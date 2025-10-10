import Link from '@docusaurus/Link';
import type { ReactNode } from 'react';

import styles from './styles.module.css';

const BoatIcon = () => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
        <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"></path>
        <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path>
        <path d="M12 10v4"></path>
        <path d="M12 2v3"></path>
    </svg>
);

const DollarIcon = () => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
);

const CalendarIcon = () => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);

const TrendingUpIcon = () => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
);

type QuickAction = {
    title: string;
    description: string;
    icon: ReactNode;
    link: string;
    cta: string;
};

const quickActions: QuickAction[] = [
    {
        title: 'Run your daily operations',
        description:
            'Essential tools for managing your daily rental operations',
        icon: <BoatIcon />,
        link: '/guides/day-to-day',
        cta: 'View overview',
    },
    {
        title: 'Boost bookings and revenue',
        description:
            'Strategies to increase bookings and maximize revenue from your fleet',
        icon: <TrendingUpIcon />,
        link: '/guides/boost-revenue',
        cta: 'Explore strategies',
    },
    {
        title: 'Master your planning views',
        description:
            'Navigate your daily operations using Timeline, Availability, and Fleet views',
        icon: <CalendarIcon />,
        link: '/guides/day-to-day/planning-overview',
        cta: 'Learn more',
    },
];

export default function QuickActions(): ReactNode {
    return (
        <section className={styles.Root}>
            <div className="container">
                <h2 className={styles.SectionTitle}>Quick start</h2>
                <p className={styles.SectionSubtitle}>
                    Get up and running quickly
                </p>

                <div className={styles.ActionsGrid}>
                    {quickActions.map((action, index) => (
                        <Link
                            key={index}
                            to={action.link}
                            className={styles.ActionCard}
                        >
                            <div className={styles.CardContent}>
                                <div className={styles.ActionIcon}>
                                    {action.icon}
                                </div>
                                <h3 className={styles.ActionTitle}>
                                    {action.title}
                                </h3>
                                <p className={styles.ActionDescription}>
                                    {action.description}
                                </p>
                            </div>
                            <div className={styles.ActionLink}>
                                {action.cta}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
