import React from 'react';

import styles from './styles.module.css';

interface VideoPlayerProps {
    videoId: string;
    title: string;
}

export default function VideoPlayer({ videoId, title }: VideoPlayerProps) {
    return (
        <div className={styles.videoContainer}>
            <div className={styles.videoWrapper}>
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.videoFrame}
                />
            </div>
        </div>
    );
}
