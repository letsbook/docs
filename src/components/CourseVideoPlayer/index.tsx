import React, { useRef, useState } from 'react';

import styles from './styles.module.css';

interface CourseVideoPlayerProps {
    videoSrc: string;
    title?: string;
    thumbnailSrc?: string;
}

export default function CourseVideoPlayer({
    videoSrc,
    title,
    thumbnailSrc,
}: CourseVideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
        // Wacht tot video geladen is en speel af in fullscreen
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play();
                // Probeer fullscreen te openen
                if (videoRef.current.requestFullscreen) {
                    videoRef.current.requestFullscreen();
                } else if ((videoRef.current as any).webkitRequestFullscreen) {
                    (videoRef.current as any).webkitRequestFullscreen();
                } else if ((videoRef.current as any).mozRequestFullScreen) {
                    (videoRef.current as any).mozRequestFullScreen();
                }
            }
        }, 100);
    };

    return (
        <div className={styles.videoContainer}>
            {!isPlaying && (
                <div className={styles.thumbnail} onClick={handlePlay}>
                    {thumbnailSrc && (
                        <img
                            src={thumbnailSrc}
                            alt={title}
                            className={styles.thumbnailImage}
                        />
                    )}
                    <div className={styles.playButton}>
                        <svg
                            width="80"
                            height="80"
                            viewBox="0 0 80 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="40"
                                cy="40"
                                r="40"
                                fill="rgba(18, 193, 155, 0.95)"
                            />
                            <path d="M32 26L56 40L32 54V26Z" fill="white" />
                        </svg>
                    </div>
                </div>
            )}
            {isPlaying && (
                <video
                    ref={videoRef}
                    controls
                    playsInline
                    width="100%"
                    className={styles.video}
                    title={title}
                    autoPlay
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
}
