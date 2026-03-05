import React, { useRef, useState } from 'react';

import styles from './styles.module.css';

type Props = {
    videoSrc: string;
    title?: string;
    playButton?: boolean;
};

export default function InlineVideoPlayer({ videoSrc, title, playButton = false }: Props) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    function handlePlay() {
        setPlaying(true);
        videoRef.current?.play();
    }

    if (playButton) {
        return (
            <div className={styles.Wrapper}>
                <video
                    ref={videoRef}
                    src={videoSrc}
                    title={title}
                    width="100%"
                    controls={playing}
                    playsInline
                    className={styles.Root}
                />
                {!playing && (
                    <button className={styles.PlayButton} onClick={handlePlay} aria-label="Play video">
                        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.92" />
                            <polygon points="32,24 60,40 32,56" fill="#081590" />
                        </svg>
                    </button>
                )}
            </div>
        );
    }

    return (
        <video
            playsInline
            muted
            width="100%"
            className={styles.Root}
            title={title}
            autoPlay
            loop
        >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}
