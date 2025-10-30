import React, { useRef, useState } from 'react';

import styles from './styles.module.css';

type Props = {
    videoSrc: string;
    title?: string;
    thumbnailSrc?: string;
};

export default function LocalFileVideoPlayer({
    videoSrc,
    title,
    thumbnailSrc,
}: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
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
