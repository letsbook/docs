import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface Feature {
    title: string;
    description: string;
    icon: string;
    link: string;
}

const features: Feature[] = [
    {
        title: 'Fleet Management',
        description: 'Manage your entire boat fleet with ease. Track maintenance, availability, and performance.',
        icon: '⛵',
        link: '/docs/fleet-management'
    },
    {
        title: 'Customer Management',
        description: 'Keep track of your customers, their preferences, and booking history.',
        icon: '👥',
        link: '/docs/customer-management'
    },
    {
        title: 'Scheduling',
        description: 'Advanced scheduling system to manage bookings, availability, and conflicts.',
        icon: '📅',
        link: '/docs/scheduling'
    },
    {
        title: 'Booking Forms',
        description: 'Customizable booking forms and seamless integration with your website.',
        icon: '📝',
        link: '/docs/booking-forms-integration'
    },
    {
        title: 'Analytics & Reporting',
        description: 'Comprehensive analytics and reporting to track your business performance.',
        icon: '📊',
        link: '/docs/analytics-reporting'
    },
    {
        title: 'Pricing & Billing',
        description: 'Flexible pricing models and automated billing for your rental business.',
        icon: '💰',
        link: '/docs/pricing-billing'
    }
];

export default function Features(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className={styles.featuresHeader}>
                    <h2 className={styles.featuresTitle}>
                        Everything you need to manage your boat rental business
                    </h2>
                    <p className={styles.featuresSubtitle}>
                        Let's Book provides all the tools you need to streamline operations and grow your business
                    </p>
                </div>
                <div className={styles.featuresGrid}>
                    {features.map((feature, index) => (
                        <Link
                            key={index}
                            to={feature.link}
                            className={styles.featureCard}
                        >
                            <div className={styles.featureIcon}>
                                {feature.icon}
                            </div>
                            <h3 className={styles.featureTitle}>
                                {feature.title}
                            </h3>
                            <p className={styles.featureDescription}>
                                {feature.description}
                            </p>
                            <div className={styles.featureLink}>
                                Learn more →
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
