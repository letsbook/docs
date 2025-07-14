import type { ReactNode } from 'react';

import styles from './styles.module.css';

type Course = {
    title: string;
    description: string;
    icon: string;
    level: string;
    duration: string;
    imageClass: string;
};

const courses: Course[] = [
    {
        title: "Let's Book Fundamentals",
        description:
            "In this course you'll learn all the basic functions of Let's Book. From your first booking to setting up your payments.",
        icon: '⛵',
        level: 'Beginner',
        duration: '2h 15m',
        imageClass: 'boat',
    },
    {
        title: 'Planning & Season Management',
        description:
            'Optimize your planning for busy periods. Learn how to set seasonal rates and manage your fleet efficiently.',
        icon: '📋',
        level: 'Beginner - Intermediate',
        duration: '1h 45m',
        imageClass: 'planning',
    },
    {
        title: 'Payments & Finance',
        description:
            'Manage your revenue professionally. From sending payment links to generating tax reports.',
        icon: '💳',
        level: 'Beginner',
        duration: '3h 20m',
        imageClass: 'payment',
    },
    {
        title: 'Analytics & Growth',
        description:
            'Use data to grow your business. Discover which boats are most popular and when you should expand.',
        icon: '📊',
        level: 'Beginner - Intermediate',
        duration: '2h 5m',
        imageClass: 'analytics',
    },
    {
        title: 'Marketing & Customer Retention',
        description:
            'Automate your communication and retain more customers. From welcome emails to encouraging repeat bookings.',
        icon: '📧',
        level: 'Intermediate',
        duration: '1h 30m',
        imageClass: 'marketing',
    },
];

export default function Courses(): ReactNode {
    return (
        <section className={styles.Root}>
            <div className="container">
                <h2 className={styles.SectionTitle}>Courses</h2>
                <p className={styles.SectionSubtitle}>
                    Learn step by step how to use Let's Book optimally
                </p>

                <div className={styles.CoursesGrid}>
                    {courses.map((course, index) => (
                        <div key={index} className={styles.CourseCard}>
                            <div
                                className={`${styles.CourseImage} ${styles[course.imageClass]}`}
                            >
                                <div className={styles.CourseVisual}>
                                    <div className={styles.FloatingIcon}>
                                        {course.icon}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.CourseContent}>
                                <h3 className={styles.CourseTitle}>
                                    {course.title}
                                </h3>
                                <p className={styles.CourseDescription}>
                                    {course.description}
                                </p>
                                <div className={styles.CourseMeta}>
                                    <span className={styles.CourseLevel}>
                                        {course.level}
                                    </span>
                                    <span className={styles.CourseDuration}>
                                        {course.duration}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
