import React, { useRef, useState } from 'react';

import styles from './styles.module.css';

type Props = {
    videoSrc: string;
    title?: string;
};

export default function VideoPlayer({ videoSrc, title }: Props) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    function handlePlay() {
        setPlaying(true);
        videoRef.current?.play();
    }

    return (
        <div className={styles.Root}>
            <video
                ref={videoRef}
                src={videoSrc}
                title={title}
                width="100%"
                controls={playing}
                className={styles.Video}
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
