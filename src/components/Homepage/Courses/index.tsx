import type { ReactNode } from 'react';

import styles from './styles.module.css';

type Course = {
    title: string;
    description: string;
    image: string;
    level: string;
    duration: string;
    slug: string;
};

const courses: Course[] = [
    {
        title: "Let's Book Fundamentals",
        description:
            "In this course you'll learn all the basic functions of Let's Book. From your first booking to setting up your payments.",
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
        level: 'Beginner',
        duration: '2h 15m',
        slug: 'fundamentals',
    },
    {
        title: 'Planning & Season Management',
        description:
            'Optimize your planning for busy periods. Learn how to set seasonal rates and manage your fleet efficiently.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
        level: 'Beginner - Intermediate',
        duration: '1h 45m',
        slug: 'planning',
    },
    {
        title: 'Payments & Finance',
        description:
            'Manage your revenue professionally. From sending payment links to generating tax reports.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
        level: 'Beginner',
        duration: '3h 20m',
        slug: 'payments',
    },
    {
        title: 'Analytics & Growth',
        description:
            'Use data to grow your business. Discover which boats are most popular and when you should expand.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
        level: 'Beginner - Intermediate',
        duration: '2h 5m',
        slug: 'analytics',
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
                        <a
                            key={index}
                            href={`/courses/${course.slug}`}
                            className={styles.CourseCard}
                        >
                            <div className={styles.CourseImage}>
                                <img src={course.image} alt={course.title} />
                                <div className={styles.PlayButton}>
                                    <svg
                                        width="48"
                                        height="48"
                                        viewBox="0 0 48 48"
                                        fill="none"
                                    >
                                        <circle
                                            cx="24"
                                            cy="24"
                                            r="24"
                                            fill="white"
                                            fillOpacity="0.95"
                                        />
                                        <path
                                            d="M20 16L32 24L20 32V16Z"
                                            fill="#081590"
                                        />
                                    </svg>
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
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
