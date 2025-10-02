import React from 'react';
import styles from './styles.module.css';

interface CourseVideoProps {
    videoId: string;
    title: string;
}

export default function CourseVideo({ videoId, title }: CourseVideoProps) {
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
