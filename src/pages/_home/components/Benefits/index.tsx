import type { ReactNode } from 'react';

import styles from './styles.module.css';

interface Benefit {
    title: string;
    description: string;
    icon: string;
}

const benefits: Benefit[] = [
    {
        title: 'Save Time',
        description:
            'Automate repetitive tasks and streamline your booking process to focus on what matters most.',
        icon: '⏰',
    },
    {
        title: 'Increase Revenue',
        description:
            'Optimize pricing, reduce no-shows, and maximize your fleet utilization with smart scheduling.',
        icon: '📈',
    },
    {
        title: 'Better Customer Experience',
        description:
            'Provide seamless booking experiences that keep customers coming back for more.',
        icon: '⭐',
    },
    {
        title: 'Real-time Insights',
        description:
            'Make data-driven decisions with comprehensive analytics and reporting tools.',
        icon: '📊',
    },
];

export default function Benefits(): ReactNode {
    return (
        <section className={styles.benefits}>
            <div className="container">
                <div className={styles.benefitsHeader}>
                    <h2 className={styles.benefitsTitle}>
                        Why choose Let's Book?
                    </h2>
                    <p className={styles.benefitsSubtitle}>
                        Join thousands of boat rental businesses that trust
                        Let's Book to power their operations
                    </p>
                </div>
                <div className={styles.benefitsGrid}>
                    {benefits.map((benefit, index) => (
                        <div key={index} className={styles.benefitCard}>
                            <div className={styles.benefitIcon}>
                                {benefit.icon}
                            </div>
                            <h3 className={styles.benefitTitle}>
                                {benefit.title}
                            </h3>
                            <p className={styles.benefitDescription}>
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className={styles.statsSection}>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>10,000+</div>
                        <div className={styles.statLabel}>
                            Bookings Processed
                        </div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>500+</div>
                        <div className={styles.statLabel}>Happy Businesses</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>99.9%</div>
                        <div className={styles.statLabel}>Uptime</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>24/7</div>
                        <div className={styles.statLabel}>Support</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
