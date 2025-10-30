import React from 'react';

import styles from './CoursesHero.module.css';

interface CoursesHeroProps {
    children: React.ReactNode;
}

export default function CoursesHero({ children }: CoursesHeroProps) {
    return (
        <div className={styles.coursesHero}>
            <div className={styles.heroContent}>{children}</div>
        </div>
    );
}
