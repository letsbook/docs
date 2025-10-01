import Link from '@docusaurus/Link';
import { useState } from 'react';
import type { ReactNode } from 'react';

import styles from './styles.module.css';

type CategoryLink = {
    title: string;
    description: string;
    link: string;
};

type Category = {
    title: string;
    links: CategoryLink[];
};

const categories: Category[] = [
    {
        title: 'Day to day use',
        links: [
            {
                title: 'Working with planning overview',
                description: 'Navigate Timeline, Availability, and Fleet views',
                link: '/guides/day-to-day/planning-overview',
            },
            {
                title: 'Boat handout process',
                description: 'Check customers in and hand out boats efficiently',
                link: '/guides/day-to-day/boat-handout-process',
            },
            {
                title: 'Track sales insights',
                description: 'Monitor revenue and booking trends',
                link: '/guides/day-to-day/sales-insights',
            },
            {
                title: 'Manage blockout periods',
                description: 'Block dates when boats are unavailable',
                link: '/guides/day-to-day/blockout-periods',
            },
            {
                title: 'Sync with personal calendar',
                description: 'Connect your calendar to stay organized',
                link: '/guides/day-to-day/sync-personal-calendar',
            },
            {
                title: 'Handle no-shows',
                description: 'Manage customers who miss their booking',
                link: '/guides/day-to-day/handle-no-shows',
            },
        ],
    },
    {
        title: 'Manage bookings',
        links: [
            {
                title: 'Add booking',
                description: 'Create new reservations for customers',
                link: '/guides/bookings/add-booking',
            },
            {
                title: 'Edit or cancel a booking',
                description: 'Modify or cancel existing reservations',
                link: '/guides/bookings/edit-or-cancel-a-booking',
            },
            {
                title: 'Search and filter bookings',
                description: 'Find specific bookings quickly',
                link: '/guides/bookings/search-and-filter-bookings',
            },
            {
                title: 'Export bookings',
                description: 'Download booking data to CSV or Excel',
                link: '/guides/bookings/export-bookings',
            },
            {
                title: 'Process refunds',
                description: 'Handle cancellations and refund payments',
                link: '/guides/bookings/process-refunds',
            },
            {
                title: 'Booking notifications',
                description: 'Set up automated customer emails',
                link: '/guides/bookings/booking-notifications',
            },
        ],
    },
    {
        title: 'Settings',
        links: [
            {
                title: 'Manage docks',
                description: 'Add and organize your rental locations',
                link: '/guides/settings/manage-docks',
            },
            {
                title: 'Understanding rental setup',
                description: 'Configure which boats are available where',
                link: '/guides/settings/understanding-rental-setup',
            },
            {
                title: 'Booking and cancellation rules',
                description: 'Set policies for reservations and refunds',
                link: '/guides/settings/booking-cancellation-rules',
            },
            {
                title: 'Configure pricing',
                description: 'Set rental rates and seasonal pricing',
                link: '/guides/settings/pricing',
            },
            {
                title: 'Payment methods',
                description: 'Connect Stripe and manage payments',
                link: '/guides/settings/payment-methods',
            },
            {
                title: 'Email templates',
                description: 'Customize automated customer emails',
                link: '/guides/settings/email-templates',
            },
        ],
    },
    {
        title: 'Booking form',
        links: [
            {
                title: 'Add to website',
                description: 'Embed the booking form on your site',
                link: '/guides/booking-form/add-to-website',
            },
            {
                title: 'Alternatives',
                description: 'Share direct links or use the widget',
                link: '/guides/booking-form/alternatives',
            },
            {
                title: 'Custom questions',
                description: 'Collect additional customer information',
                link: '/guides/booking-form/questions',
            },
            {
                title: 'Match branding',
                description: 'Style the form to match your website',
                link: '/guides/booking-form/match-branding',
            },
            {
                title: 'Form analytics',
                description: 'Track conversions and drop-off rates',
                link: '/guides/booking-form/form-analytics',
            },
            {
                title: 'Multi-language support',
                description: 'Offer booking form in multiple languages',
                link: '/guides/booking-form/multi-language',
            },
        ],
    },
    {
        title: 'Boats',
        links: [
            {
                title: 'Manage boats',
                description: 'Add boats and configure their details',
                link: '/guides/boats/manage-boats',
            },
            {
                title: 'Assign boats to docks',
                description: 'Set which boats are available at each location',
                link: '/guides/boats/assign-boats-to-docks',
            },
            {
                title: 'Connect boats',
                description: 'Link GPS trackers and IoT devices',
                link: '/guides/boats/connect-boats',
            },
            {
                title: 'Boat availability',
                description: 'Set specific hours and schedules per boat',
                link: '/guides/boats/boat-availability',
            },
            {
                title: 'Maintenance mode',
                description: 'Mark boats as out of service temporarily',
                link: '/guides/boats/maintenance-mode',
            },
            {
                title: 'Boat capacity',
                description: 'Set passenger limits and weight restrictions',
                link: '/guides/boats/boat-capacity',
            },
        ],
    },
    {
        title: 'Customers',
        links: [
            {
                title: 'Add customer',
                description: 'Create customer profiles manually',
                link: '/guides/customers/add-customer',
            },
            {
                title: 'View customer history',
                description: 'See all bookings and payments per customer',
                link: '/guides/customers/view-customer-history',
            },
            {
                title: 'Anonymize customers',
                description: 'Remove personal data for GDPR compliance',
                link: '/guides/customers/anonymize-customers',
            },
            {
                title: 'Customer tags',
                description: 'Organize customers with custom labels',
                link: '/guides/customers/customer-tags',
            },
            {
                title: 'Export customer data',
                description: 'Download customer lists and history',
                link: '/guides/customers/export-customer-data',
            },
            {
                title: 'Customer loyalty',
                description: 'Reward returning customers with discounts',
                link: '/guides/customers/customer-loyalty',
            },
        ],
    },
];

export default function Features(): ReactNode {
    const [activeTab, setActiveTab] = useState(0);
    const [direction, setDirection] = useState<'left' | 'right'>('right');

    const handleTabClick = (newIndex: number) => {
        setDirection(newIndex > activeTab ? 'left' : 'right');
        setActiveTab(newIndex);
    };

    return (
        <section className={styles.Root}>
            <div className="container">
                <h2 className={styles.SectionTitle}>Popular guides</h2>
                <p className={styles.SectionSubtitle}>
                    Quick access to the most used sections
                </p>

                <div className={styles.TabsContainer}>
                    <div className={styles.TabsList}>
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => handleTabClick(index)}
                                className={`${styles.Tab} ${
                                    activeTab === index ? styles.TabActive : ''
                                }`}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>

                    <div className={styles.TabContent}>
                        <div 
                            key={activeTab} 
                            className={`${styles.TabContentInner} ${
                                direction === 'right' ? styles.SlideFromRight : styles.SlideFromLeft
                            }`}
                        >
                            <div className={styles.LinksGrid}>
                                {categories[activeTab].links.map((link, index) => (
                                    <Link
                                        key={index}
                                        to={link.link}
                                        className={styles.GuideLink}
                                    >
                                        <div>
                                            <div className={styles.GuideLinkTitle}>
                                                {link.title}
                                            </div>
                                            <div className={styles.GuideLinkDescription}>
                                                {link.description}
                                            </div>
                                        </div>
                                        <span className={styles.GuideLinkArrow}>
                                            →
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.ViewMoreContainer}>
                    <Link
                        to="/guides/day-to-day"
                        className={styles.ViewMoreButton}
                    >
                        View all guides
                        <span className={styles.ViewMoreArrow}>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
