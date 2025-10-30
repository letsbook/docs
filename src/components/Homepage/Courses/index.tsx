import { useRef, useState } from 'react';
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
        image: '/img/homepage/courses/team.jpg',
        level: 'Beginner',
        duration: '10m',
        slug: 'daily-operations-walkthrough',
    },
    {
        title: 'Getting started guide',
        description:
            'From zero to first booking in 30 minutes: setup, configuration, and going live.',
        image: '/img/homepage/courses/daily_operations_walktrough.jpeg',
        level: 'Beginner',
        duration: '30m',
        slug: 'onboarding-guide',
    },
    {
        title: 'Dock host operations',
        description:
            'Run a marina or dock? Learn fleet management, multiple locations, and dock assignments.',
        image: '/img/homepage/courses/dock_operations.jpg',
        level: 'Intermediate',
        duration: '20m',
        slug: 'dock-host-operations',
    },
    {
        title: 'Seasonal planning strategies',
        description:
            'Master schedules, blockouts, seasonal pricing, and managing high-demand periods.',
        image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&auto=format&fit=crop&q=80',
        level: 'Intermediate',
        duration: '20m',
        slug: 'seasonal-planning',
    },
    {
        title: 'Boat club setup',
        description:
            'Configure memberships, internal bookings, member rates, and boat club workflows.',
        image: 'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=800&auto=format&fit=crop&q=80',
        level: 'Advanced',
        duration: '20m',
        slug: 'boat-club-setup',
    },
    {
        title: 'Build autonomous operations',
        description:
            'Automate everything: self-service bookings, payments, check-ins, and remote boat access.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
        level: 'Advanced',
        duration: '25m',
        slug: 'autonomous-operations',
    },
];

export default function Courses(): ReactNode {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!sliderRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <section className={styles.Root}>
            <div className="container">
                <h2 className={styles.SectionTitle}>Courses</h2>
                <p className={styles.SectionSubtitle}>
                    Learn step by step how to use Let's Book optimally
                </p>

                <div className={styles.SliderContainer}>
                    <div
                        ref={sliderRef}
                        className={styles.SliderTrack}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >
                        {courses.map((course, index) => (
                            <a
                                key={index}
                                href={`/courses/${course.slug}`}
                                className={styles.CourseCard}
                                draggable={false}
                            >
                                <div className={styles.CourseImage}>
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        draggable={false}
                                    />
                                    <div className={styles.CourseHeader}>
                                        <h3 className={styles.CourseTitle}>
                                            {course.title}
                                        </h3>
                                        <span className={styles.CourseDuration}>
                                            {course.duration}
                                        </span>
                                    </div>
                                    <div className={styles.PlayButton}>
                                        <svg
                                            width="64"
                                            height="64"
                                            viewBox="0 0 64 64"
                                            fill="none"
                                        >
                                            <circle
                                                cx="32"
                                                cy="32"
                                                r="28"
                                                fill="white"
                                                fillOpacity="0.95"
                                            />
                                            <path
                                                d="M28 24C28 22.5 29 22 30 22.7L41 30.7C42 31.4 42 32.6 41 33.3L30 41.3C29 42 28 41.5 28 40V24Z"
                                                fill="#081590"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className={styles.CourseContent}></div>
                            </a>
                        ))}
                    </div>

                    <div className={styles.SliderDots}>
                        {courses.map((_, index) => (
                            <div key={index} className={styles.SliderDot} />
                        ))}
                    </div>
                </div>

                <div className={styles.ViewAllContainer}>
                    <a href="/courses" className={styles.ViewAllButton}>
                        View all courses
                        <span className={styles.ViewAllArrow}>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
