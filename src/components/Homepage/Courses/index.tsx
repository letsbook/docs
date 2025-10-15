import { useState, useRef } from 'react';
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
        image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=80',
        level: 'Beginner',
        duration: '10m',
        slug: 'daily-operations-walkthrough',
    },
    {
        title: 'Getting started guide',
        description:
            'From zero to first booking in 30 minutes: setup, configuration, and going live.',
        image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&auto=format&fit=crop&q=80',
        level: 'Beginner',
        duration: '30m',
        slug: 'onboarding-guide',
    },
    {
        title: 'Dock host operations',
        description:
            'Run a marina or dock? Learn fleet management, multiple locations, and dock assignments.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80',
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

    const scroll = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const scrollAmount = sliderRef.current.offsetWidth * 0.8;
            sliderRef.current.scrollBy({
                left: direction === 'right' ? scrollAmount : -scrollAmount,
                behavior: 'smooth',
            });
        }
    };

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
                    <button
                        onClick={() => scroll('left')}
                        className={styles.SliderArrow + ' ' + styles.SliderArrowLeft}
                        aria-label="Previous course"
                    >
                        ‹
                    </button>

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
                                    <img src={course.image} alt={course.title} draggable={false} />
                                    <div className={styles.PlayButton}>
                                        <svg
                                            width="56"
                                            height="56"
                                            viewBox="0 0 56 56"
                                            fill="none"
                                        >
                                            <circle
                                                cx="28"
                                                cy="28"
                                                r="28"
                                                fill="white"
                                                fillOpacity="0.95"
                                            />
                                            <path
                                                d="M23 19C23 17.3431 24.7909 16.2988 26.2 17.2L37.6 24.2C38.8667 25.0111 38.8667 26.9889 37.6 27.8L26.2 34.8C24.7909 35.7012 23 34.6569 23 33V19Z"
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

                    <button
                        onClick={() => scroll('right')}
                        className={styles.SliderArrow + ' ' + styles.SliderArrowRight}
                        aria-label="Next course"
                    >
                        ›
                    </button>
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
