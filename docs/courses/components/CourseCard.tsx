import React from 'react';

import styles from './CourseCard.module.css';

interface CourseCardProps {
    href: string;
    imageUrl: string;
    title: string;
    duration: string;
    description: string;
    badge?: string;
}

export default function CourseCard({
    href,
    imageUrl,
    title,
    duration,
    description,
    badge,
}: CourseCardProps) {
    return (
        <a href={href} className={styles.courseCard}>
            <div
                className={styles.courseImage}
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                {badge && (
                    <div className={styles.courseBadge}>{badge}</div>
                )}
                <div className={styles.playButton}>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                        <circle
                            cx="28"
                            cy="28"
                            r="28"
                            fill="white"
                            fillOpacity="0.95"
                        />
                        <path d="M23 18L39 28L23 38V18Z" fill="#081590" />
                    </svg>
                </div>
            </div>
            <div className={styles.courseBody}>
                <div className={styles.courseHeader}>
                    <h2>{title}</h2>
                    <div className={styles.courseDuration}>{duration}</div>
                </div>
                <div className={styles.courseContent}>
                    <p>{description}</p>
                </div>
            </div>
        </a>
    );
}
