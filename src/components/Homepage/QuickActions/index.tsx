import Link from '@docusaurus/Link';
import type { ReactNode } from 'react';

import styles from './styles.module.css';

type QuickAction = {
    title: string;
    description: string;
    icon: string;
    link: string;
};

const quickActions: QuickAction[] = [
    {
        title: 'Add new booking',
        description:
            'Manually add a booking to your schedule and handle payment',
        icon: '⛵',
        link: '/guides/customer-management',
    },
    {
        title: 'View schedule',
        description: 'Get an overview of all bookings and available boats',
        icon: '📋',
        link: '/guides/scheduling',
    },
    {
        title: 'Handle payments',
        description: 'Send payment links and manage refunds and deposits',
        icon: '💳',
        link: '/guides/pricing-billing',
    },
    {
        title: 'Get started',
        description: "Complete guide to get started with Let's Book right away",
        icon: '🚀',
        link: '/guides/getting-started',
    },
];

export default function QuickActions(): ReactNode {
    return (
        <section className={styles.Root}>
            <div className="container">
                <h2 className={styles.SectionTitle}>Quick start</h2>
                <p className={styles.SectionSubtitle}>
                    The most commonly used features to get started right away
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
                            <div className={styles.ActionLink}>Start now →</div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
