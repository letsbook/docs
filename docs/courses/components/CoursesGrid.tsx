import React from 'react';

import styles from './CoursesGrid.module.css';

interface CoursesGridProps {
    children: React.ReactNode;
}

export default function CoursesGrid({ children }: CoursesGridProps) {
    return (
        <div className={styles.coursesContainer}>
            <div className={styles.coursesGrid}>{children}</div>
        </div>
    );
}
