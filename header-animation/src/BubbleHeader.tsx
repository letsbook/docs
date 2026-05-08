import { interpolate as flubberInterpolate } from 'flubber';
import { ReactElement, useMemo } from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';

import { NORMALIZED_PATHS, PATH_VIEWBOX_SIZE } from './paths';

type Bubble = {
    sequence: number[];
    centerX: number;
    swayAmplitude: number;
    swayFrequency: number;
    swayPhase: number;
    size: number;
    cycles: number;
    yPhase: number;
    opacity: number;
    morphPhase: number;
};

const BUBBLE_COUNT = 16;
const BUBBLE_COLOR = '#0a1cb5';

const SHAPE_COUNT = NORMALIZED_PATHS.length;

const seededRandom = (seed: number): (() => number) => {
    let state = seed >>> 0;
    return () => {
        state = (state * 1664525 + 1013904223) >>> 0;
        return state / 0xffffffff;
    };
};

const buildShuffledSequence = (
    rng: () => number,
    length: number
): number[] => {
    const indices = Array.from({ length: SHAPE_COUNT }, (_, i) => i);
    const sequence: number[] = [];
    let last = -1;
    for (let i = 0; i < length; i += 1) {
        let pick = indices[Math.floor(rng() * SHAPE_COUNT)];
        while (pick === last) {
            pick = indices[Math.floor(rng() * SHAPE_COUNT)];
        }
        sequence.push(pick);
        last = pick;
    }
    sequence.push(sequence[0]);
    return sequence;
};

const buildBubbles = (
    canvasWidth: number,
    canvasHeight: number,
    count: number
): Bubble[] => {
    const rng = seededRandom(20260508);
    const bubbles: Bubble[] = [];
    const cyclesPool = [1, 1, 2];
    for (let i = 0; i < count; i += 1) {
        const morphSteps = 3 + Math.floor(rng() * 3);
        const size = 80 + rng() * 220;
        const cycles = cyclesPool[Math.floor(rng() * cyclesPool.length)];
        const lanePadding = size * 0.6;
        const centerX =
            lanePadding + rng() * (canvasWidth - lanePadding * 2);
        bubbles.push({
            sequence: buildShuffledSequence(rng, morphSteps),
            centerX,
            swayAmplitude: 20 + rng() * 90,
            swayFrequency: Math.floor(rng() * 3),
            swayPhase: rng() * Math.PI * 2,
            size,
            cycles,
            yPhase: rng(),
            opacity: 0.18 + rng() * 0.45,
            morphPhase: rng(),
        });
    }
    bubbles.sort((a, b) => a.size - b.size);
    return bubbles;
};

type Interpolator = (t: number) => string;

const interpolatorCache = new Map<string, Interpolator>();

const getInterpolator = (fromIdx: number, toIdx: number): Interpolator => {
    const key = `${fromIdx}->${toIdx}`;
    let cached = interpolatorCache.get(key);
    if (!cached) {
        cached = flubberInterpolate(
            NORMALIZED_PATHS[fromIdx],
            NORMALIZED_PATHS[toIdx],
            { maxSegmentLength: 6 }
        ) as Interpolator;
        interpolatorCache.set(key, cached);
    }
    return cached;
};

const easeInOutSine = (t: number): number =>
    -(Math.cos(Math.PI * t) - 1) / 2;

const getMorphedPath = (sequence: number[], progress: number): string => {
    const segments = sequence.length - 1;
    const scaled = progress * segments;
    const segIndex = Math.min(Math.floor(scaled), segments - 1);
    const localT = scaled - segIndex;
    const eased = easeInOutSine(localT);
    return getInterpolator(sequence[segIndex], sequence[segIndex + 1])(eased);
};

const BubbleHeader = (): ReactElement => {
    const frame = useCurrentFrame();
    const { width, height, durationInFrames } = useVideoConfig();

    const bubbles = useMemo(
        () => buildBubbles(width, height, BUBBLE_COUNT),
        [width, height]
    );

    const verticalSpan = height + 400;

    return (
        <AbsoluteFill style={{ backgroundColor: '#081590' }}>
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'block' }}
            >
                {bubbles.map((bubble, idx) => {
                    const loopProgress = frame / durationInFrames;
                    const morphProgress =
                        (loopProgress + bubble.morphPhase) % 1;
                    const path = getMorphedPath(
                        bubble.sequence,
                        morphProgress
                    );

                    const yProgress =
                        (loopProgress * bubble.cycles + bubble.yPhase) % 1;
                    const y =
                        height + 200 - yProgress * verticalSpan;

                    const swayT =
                        loopProgress * Math.PI * 2 * bubble.swayFrequency +
                        bubble.swayPhase;
                    const x = bubble.centerX + Math.sin(swayT) * bubble.swayAmplitude;

                    const scale = bubble.size / PATH_VIEWBOX_SIZE;
                    const half = bubble.size / 2;

                    return (
                        <g
                            key={idx}
                            transform={`translate(${x - half} ${y - half}) scale(${scale})`}
                            opacity={bubble.opacity}
                        >
                            <path d={path} fill={BUBBLE_COLOR} />
                        </g>
                    );
                })}
            </svg>
        </AbsoluteFill>
    );
};

export default BubbleHeader;
