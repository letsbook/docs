import Link from '@docusaurus/Link';
import type { ReactNode } from 'react';

import styles from './styles.module.css';

type QuickAction = {
    title: string;
    description: string;
    icon: string;
    link: string;
    cta: string;
};

const quickActions: QuickAction[] = [
    {
        title: 'Get started',
        description: "Complete guide to get started with Let's Book right away",
        icon: '→',
        link: '/guides/get-started/step-setup-guide',
        cta: 'Start setup',
    },
    {
        title: 'Working with planning overview',
        description:
            'Navigate your daily operations using Timeline, Availability, and Fleet views',
        icon: '⊞',
        link: '/guides/day-to-day/planning-overview',
        cta: 'Learn more',
    },
    {
        title: 'Track sales insights',
        description: 'Turn your season into a scoreboard with sales analytics',
        icon: '▲',
        link: '/guides/day-to-day/sales-insights',
        cta: 'View guide',
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
                            <span className={styles.ActionIcon}>
                                {action.icon}
                            </span>
                            <h3 className={styles.ActionTitle}>
                                {action.title}
                            </h3>
                            <p className={styles.ActionDescription}>
                                {action.description}
                            </p>
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
