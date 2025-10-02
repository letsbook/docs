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
        title: 'Daily operations walkthrough',
        description:
            'Quick 10-minute tour of everything you do daily: bookings, planning, customer check-ins.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop',
        level: 'Beginner',
        duration: '10m',
        slug: 'daily-operations-walkthrough',
    },
    {
        title: 'Getting started guide',
        description:
            'From zero to first booking in 30 minutes: setup, configuration, and going live.',
        image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&auto=format&fit=crop',
        level: 'Beginner',
        duration: '30m',
        slug: 'onboarding-guide',
    },
    {
        title: 'Dock host operations',
        description:
            'Run a marina or dock? Learn fleet management, multiple locations, and dock assignments.',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop',
        level: 'Intermediate',
        duration: '20m',
        slug: 'dock-host-operations',
    },
    {
        title: 'Seasonal planning strategies',
        description:
            'Master schedules, blockouts, seasonal pricing, and managing high-demand periods.',
        image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800&auto=format&fit=crop',
        level: 'Intermediate',
        duration: '20m',
        slug: 'seasonal-planning',
    },
    {
        title: 'Boat club setup',
        description:
            'Configure memberships, internal bookings, member rates, and boat club workflows.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop',
        level: 'Advanced',
        duration: '20m',
        slug: 'boat-club-setup',
    },
    {
        title: 'Build autonomous operations',
        description:
            'Automate everything: self-service bookings, payments, check-ins, and remote boat access.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
        level: 'Advanced',
        duration: '25m',
        slug: 'autonomous-operations',
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
