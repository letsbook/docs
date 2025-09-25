import React, { useEffect, useRef } from 'react';

/**
 * MetaballsBackground
 * True metaballs rendering using scalar field thresholding.
 * Renders behind content, respects prefers-reduced-motion, and adapts to theme.
 */
export default function MetaballsBackground(): React.ReactElement | null {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const rafRef = useRef<number | null>(null);
    const ballsRef = useRef<
        {
            x: number;
            y: number;
            vx: number;
            vy: number;
            r: number; // influence radius (CSS px)
            color: string;
        }[]
    >([]);
    const dpiRef = useRef<number>(1);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d');
        if (!ctx) return () => {};

        const prefersReduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        const isDark =
            document.documentElement.dataset.theme === 'dark' ||
            document.documentElement.classList.contains('theme-dark');

        const resize = () => {
            const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
            dpiRef.current = dpr;
            const { clientWidth, clientHeight } =
                canvas.parentElement || document.body;
            canvas.width = Math.floor(clientWidth * dpr);
            canvas.height = Math.floor(Math.max(300, clientHeight) * dpr);
            canvas.style.width = clientWidth + 'px';
            canvas.style.height = Math.max(300, clientHeight) + 'px';
        };
        resize();
        window.addEventListener('resize', resize);

        // Initialize balls
        const initBalls = () => {
            const baseCount = 4;
            const count = prefersReduced ? 0 : baseCount;
            const w = canvas.width / dpiRef.current;
            const h = canvas.height / dpiRef.current;
            ballsRef.current = Array.from({ length: count }).map(() => {
                const r = Math.min(w, h) * (0.06 + Math.random() * 0.04) * 5; // 5x larger radii
                const speed = 0.08 + Math.random() * 0.18; // px/ms baseline
                return {
                    x: (0.05 + 0.9 * Math.random()) * w,
                    y: (0.05 + 0.9 * Math.random()) * h,
                    vx: (Math.random() > 0.5 ? 1 : -1) * speed,
                    vy: (Math.random() > 0.5 ? 1 : -1) * speed,
                    r,
                    color: '#2232bd',
                };
            });
        };
        initBalls();

        // Offscreen low-res buffer for field computation to keep it fast
        const fieldCanvas = document.createElement('canvas');
        const fieldCtx = fieldCanvas.getContext('2d');

        let last = performance.now();
        let acc = 0;
        let isVisible = true;

        // Pause when not visible to save CPU
        const io = new IntersectionObserver((entries) => {
            isVisible = entries.some((e) => e.isIntersecting);
        });
        io.observe(canvas);

        const animate = () => {
            const now = performance.now();
            const dtRaw = now - last;
            last = now;
            acc += dtRaw;

            // Target ~45fps
            if (acc < 1000 / 45 || !isVisible || document.hidden) {
                rafRef.current = requestAnimationFrame(animate);
                return;
            }
            const dt = Math.min(32, acc);
            acc = 0;

            const dpr = dpiRef.current;
            const W = canvas.width;
            const H = canvas.height;

            // Move balls
            const maxX = W / dpr;
            const maxY = H / dpr;
            const speedScale = 0.25; // slower for large blobs
            ballsRef.current.forEach((b) => {
                b.x += b.vx * dt * speedScale;
                b.y += b.vy * dt * speedScale;
                const margin = b.r * 0.5;
                if (b.x < margin || b.x > maxX - margin) b.vx *= -1;
                if (b.y < margin || b.y > maxY - margin) b.vy *= -1;
            });

            // Compute scalar field at reduced resolution to cut CPU cost
            // Adaptive scale: lower for high DPR and large canvases
            const scale = Math.max(0.33, Math.min(0.75, 1 / dpr));
            const fw = Math.max(96, Math.floor(W * scale));
            const fh = Math.max(96, Math.floor(H * scale));
            if (fieldCanvas.width !== fw || fieldCanvas.height !== fh) {
                fieldCanvas.width = fw;
                fieldCanvas.height = fh;
            }

            // Reuse a single ImageData buffer per size
            const img = fieldCtx!.getImageData(0, 0, fw, fh);
            const data = img.data;

            // Precompute constants
            const invScale = 1 / scale / dpr;
            const threshold = 1.0; // iso-surface threshold
            const balls = ballsRef.current;

            for (let y = 0; y < fh; y++) {
                for (let x = 0; x < fw; x++) {
                    const px = x * invScale;
                    const py = y * invScale;
                    let field = 0;
                    for (let i = 0; i < balls.length; i++) {
                        const b = balls[i];
                        const dx = px - b.x;
                        const dy = py - b.y;
                        const d2 = dx * dx + dy * dy + 0.0001; // avoid div by 0

                        const influence = (b.r * b.r) / d2;
                        field += influence;

                        // Ignore very distant pixels to cut work
                        const cutoff = b.r * b.r * 0.25;
                        if (d2 < cutoff) {
                            // Classic metaball contribution ~ (r^2 / d^2)
                            field += (b.r * b.r) / d2;
                        }
                    }
                    // Alpha from field threshold
                    const a = Math.max(
                        0,
                        Math.min(255, ((field - threshold) * 255) / threshold)
                    );
                    const idx = (y * fw + x) * 4;
                    // White mask, alpha = a
                    data[idx] = 255;
                    data[idx + 1] = 255;
                    data[idx + 2] = 255;
                    data[idx + 3] = a;
                }
            }
            fieldCtx!.putImageData(img, 0, 0);

            // Clear main
            ctx.clearRect(0, 0, W, H);

            // Soft backdrop for nicer blend
            const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
            if (isDark) {
                bgGrad.addColorStop(0, 'rgba(255,255,255,0.04)');
                bgGrad.addColorStop(1, 'rgba(0,0,0,0)');
            } else {
                bgGrad.addColorStop(0, 'rgba(255,255,255,0.35)');
                bgGrad.addColorStop(1, 'rgba(255,255,255,0)');
            }
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, W, H);

            // Draw field mask with no smoothing to avoid blur
            ctx.save();
            ctx.globalCompositeOperation = 'source-over';
            ctx.imageSmoothingEnabled = false;
            ctx.imageSmoothingQuality = 'low';

            // Draw the mask at 1:1 resolution
            ctx.drawImage(fieldCanvas, 0, 0, W, H);

            // Solid tint using the required single color
            ctx.globalCompositeOperation = 'source-atop';
            ctx.fillStyle = '#2232bd';
            ctx.fillRect(0, 0, W, H);

            ctx.restore();

            rafRef.current = requestAnimationFrame(animate);
        };

        if (!prefersReduced) {
            rafRef.current = requestAnimationFrame(animate);
        }

        // No need to react to theme changes since color is fixed
        const observer = new MutationObserver(() => {});
        // Avoid invalid options object; observe the 'data-theme' attribute in case Docusaurus toggles themes
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme', 'class'],
        });

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            window.removeEventListener('resize', resize);
            observer.disconnect();
            io.disconnect();
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            data-testid="metaballs-bg"
            style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                zIndex: 1,
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    opacity: 0.9,
                }}
            />
        </div>
    );
}
