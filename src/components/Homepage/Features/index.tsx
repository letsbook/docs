import Link from '@docusaurus/Link';
import type { ReactNode } from 'react';

import styles from './styles.module.css';

type CategoryLink = {
    title: string;
    link: string;
};

type Category = {
    title: string;
    icon: string;
    links: CategoryLink[];
};

const categories: Category[] = [
    {
        title: 'Daily Use',
        icon: '📱',
        links: [
            {
                title: 'Add or cancel a Booking',
                link: '/docs/customer-management',
            },
            { title: 'Using the Planning Overview', link: '/docs/scheduling' },
            { title: 'Sync planning with calendar', link: '/docs/scheduling' },
            {
                title: 'Take a boat out of service',
                link: '/docs/fleet-management',
            },
            { title: 'Running exports', link: '/docs/analytics-reporting' },
            { title: 'Refunding deposits', link: '/docs/pricing-billing' },
        ],
    },
    {
        title: 'Setup & Configuration',
        icon: '⚙️',
        links: [
            { title: 'Manage Boats', link: '/docs/fleet-management' },
            { title: 'Manage Docks', link: '/docs/fleet-management' },
            { title: 'Pricing Setup', link: '/docs/pricing-billing' },
            { title: 'Payment Providers', link: '/docs/pricing-billing' },
            { title: 'Email Templates', link: '/docs/account-management' },
            { title: 'User Management', link: '/docs/account-management' },
        ],
    },
    {
        title: 'Payments & Finance',
        icon: '💳',
        links: [
            { title: 'Payment processing', link: '/docs/pricing-billing' },
            { title: 'Refunds & cancellations', link: '/docs/pricing-billing' },
            { title: 'Deposit management', link: '/docs/pricing-billing' },
            { title: 'Financial reporting', link: '/docs/analytics-reporting' },
            { title: 'Tax integration', link: '/docs/analytics-reporting' },
        ],
    },
    {
        title: 'Reports & Analytics',
        icon: '📊',
        links: [
            { title: 'Booking reports', link: '/docs/analytics-reporting' },
            { title: 'Revenue analysis', link: '/docs/analytics-reporting' },
            { title: 'Customer insights', link: '/docs/customer-management' },
            { title: 'Seasonal trends', link: '/docs/analytics-reporting' },
            { title: 'Export data', link: '/docs/analytics-reporting' },
        ],
    },
    {
        title: 'Integrations',
        icon: '🔗',
        links: [
            { title: 'Calendar sync', link: '/docs/scheduling' },
            {
                title: 'Website integration',
                link: '/docs/booking-forms-integration',
            },
            { title: 'Payment gateways', link: '/docs/pricing-billing' },
            { title: 'Email providers', link: '/docs/account-management' },
            { title: 'Third-party tools', link: '/docs/api-advanced' },
        ],
    },
    {
        title: 'Troubleshooting',
        icon: '🆘',
        links: [
            { title: 'Common issues', link: '/docs/intro' },
            { title: 'Error messages', link: '/docs/intro' },
            { title: 'Performance tips', link: '/docs/intro' },
            { title: 'Browser compatibility', link: '/docs/intro' },
            { title: 'Contact support', link: '/docs/intro' },
        ],
    },
];

export default function Features(): ReactNode {
    return (
        <section className={styles.Root}>
            <div className="container">
                <h2 className={styles.SectionTitle}>All guides</h2>
                <p className={styles.SectionSubtitle}>
                    Discover all the possibilities of Let's Book
                </p>

                <div className={styles.CategoriesGrid}>
                    {categories.map((category, index) => (
                        <div key={index} className={styles.CategoryCard}>
                            <div className={styles.CategoryHeader}>
                                <div className={styles.CategoryIcon}>
                                    {category.icon}
                                </div>
                                <h3 className={styles.CategoryTitle}>
                                    {category.title}
                                </h3>
                            </div>
                            <ul className={styles.CategoryLinks}>
                                {category.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            to={link.link}
                                            className={styles.CategoryLink}
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
