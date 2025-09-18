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
                link: '/guides/customer-management',
            },
            {
                title: 'Using the Planning Overview',
                link: '/guides/scheduling',
            },
            {
                title: 'Sync planning with calendar',
                link: '/guides/scheduling',
            },
            {
                title: 'Take a boat out of service',
                link: '/guides/fleet-management',
            },
            { title: 'Running exports', link: '/guides/analytics-reporting' },
            { title: 'Refunding deposits', link: '/guides/pricing-billing' },
        ],
    },
    {
        title: 'Setup & Configuration',
        icon: '⚙️',
        links: [
            { title: 'Manage Boats', link: '/guides/fleet-management' },
            { title: 'Manage Docks', link: '/guides/fleet-management' },
            { title: 'Pricing Setup', link: '/guides/pricing-billing' },
            { title: 'Payment Providers', link: '/guides/pricing-billing' },
            { title: 'Email Templates', link: '/guides/account-management' },
            { title: 'User Management', link: '/guides/account-management' },
        ],
    },
    {
        title: 'Payments & Finance',
        icon: '💳',
        links: [
            { title: 'Payment processing', link: '/guides/pricing-billing' },
            {
                title: 'Refunds & cancellations',
                link: '/guides/pricing-billing',
            },
            { title: 'Deposit management', link: '/guides/pricing-billing' },
            {
                title: 'Financial reporting',
                link: '/guides/analytics-reporting',
            },
            { title: 'Tax integration', link: '/guides/analytics-reporting' },
        ],
    },
    {
        title: 'Reports & Analytics',
        icon: '📊',
        links: [
            { title: 'Booking reports', link: '/guides/analytics-reporting' },
            { title: 'Revenue analysis', link: '/guides/analytics-reporting' },
            { title: 'Customer insights', link: '/guides/customer-management' },
            { title: 'Seasonal trends', link: '/guides/analytics-reporting' },
            { title: 'Export data', link: '/guides/analytics-reporting' },
        ],
    },
    {
        title: 'Integrations',
        icon: '🔗',
        links: [
            { title: 'Calendar sync', link: '/guides/scheduling' },
            {
                title: 'Website integration',
                link: '/guides/booking-forms-integration',
            },
            { title: 'Payment gateways', link: '/guides/pricing-billing' },
            { title: 'Email providers', link: '/guides/account-management' },
            { title: 'Third-party tools', link: '/guides/api-advanced' },
        ],
    },
    {
        title: 'Troubleshooting',
        icon: '🆘',
        links: [
            { title: 'Common issues', link: '/guides/intro' },
            { title: 'Error messages', link: '/guides/intro' },
            { title: 'Performance tips', link: '/guides/intro' },
            { title: 'Browser compatibility', link: '/guides/intro' },
            { title: 'Contact support', link: '/guides/intro' },
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
