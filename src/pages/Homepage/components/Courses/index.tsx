import dailyOperationsImage from '@site/docs/courses/graphics/daily_operations_walktrough.jpeg';
import dockOperationsImage from '@site/docs/courses/graphics/dock_operations.jpg';
import placeholderImage from '@site/docs/courses/graphics/placeholder.png';
import teamImage from '@site/docs/courses/graphics/team.jpg';
import walkImage from '@site/docs/courses/graphics/walk.webp';
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
    badge?: string;
};

const courses: Course[] = [
    {
        title: 'Quick platform tour',
        description:
            'See everything Let\'s Book can do in 10 minutes. The full picture of your rental toolkit.',
        image: walkImage,
        level: 'Beginner',
        duration: '10m',
        slug: 'daily-operations-walkthrough',
    },
    {
        title: 'Getting started guide',
        description:
            'From zero to first booking in 30 minutes: setup, configuration, and going live.',
        image: teamImage,
        level: 'Beginner',
        duration: '30m',
        slug: 'onboarding-guide',
    },
    {
        title: 'Dock staff operations',
        description:
            'Everything dock staff needs: check-ins, boat handouts, safety briefings, and handling returns.',
        image: dockOperationsImage,
        level: 'Beginner',
        duration: '15m',
        slug: 'dock-staff-operations',
        badge: 'Role training',
    },
    {
        title: 'Bookings manager essentials',
        description:
            'Master phone bookings, manage schedules, handle payments, and keep customers happy.',
        image: dailyOperationsImage,
        level: 'Beginner',
        duration: '20m',
        slug: 'bookings-manager-essentials',
        badge: 'Role training',
    },
];

export default function Courses(): ReactNode {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [hasMoved, setHasMoved] = useState(false);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!sliderRef.current) return;
        setIsDragging(true);
        setHasMoved(false);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        
        // Als er meer dan 5px beweging is, markeer als drag
        if (Math.abs(walk) > 5) {
            setHasMoved(true);
        }
        
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleClick = (e: React.MouseEvent, slug: string) => {
        // Voorkom navigatie als er gedragged is
        if (hasMoved) {
            e.preventDefault();
        }
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
                                onClick={(e) => handleClick(e, course.slug)}
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
                                        <div className={styles.CourseMeta}>
                                            <span className={styles.CourseDuration}>
                                                {course.duration}
                                            </span>
                                            {course.badge && (
                                                <span className={styles.CourseBadge}>
                                                    {course.badge}
                                                </span>
                                            )}
                                        </div>
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
