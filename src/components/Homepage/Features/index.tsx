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
                description:
                    'Check customers in and hand out boats efficiently',
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
                title: 'Work with waivers and contracts',
                description: 'Collect digital signatures from customers',
                link: '/guides/day-to-day/work-with-waivers-and-contracts',
            },
        ],
    },
    {
        title: 'Boost revenue',
        links: [
            {
                title: 'Set early bird and last minute pricing',
                description: 'Optimize rates based on booking timing',
                link: '/guides/boost-revenue/set-early-bird-and-last-minute-pricing',
            },
            {
                title: 'Create discount codes',
                description: 'Set up promo codes to boost bookings',
                link: '/guides/boost-revenue/create-discount-codes-to-boost-bookings',
            },
            {
                title: 'Sell add-ons and extras',
                description: 'Increase revenue with additional services',
                link: '/guides/boost-revenue/sell-add-ons-and-extras',
            },
            {
                title: 'Offer memberships or subscriptions',
                description: 'Create recurring revenue streams',
                link: '/guides/boost-revenue/offer-memberships-or-subscriptions',
            },
            {
                title: 'Shift booking fee',
                description: 'Pass processing fees to customers',
                link: '/guides/boost-revenue/shift-booking-fee',
            },
            {
                title: 'Generate bookings through partners',
                description: 'Expand reach with distribution partners',
                link: '/guides/boost-revenue/generate-bookings-through-partners',
            },
        ],
    },
    {
        title: 'Track bookings',
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
                title: 'Booking statuses',
                description: 'Understand different booking states',
                link: '/guides/bookings/booking-statuses',
            },
            {
                title: 'Export bookings',
                description: 'Download booking data to CSV or Excel',
                link: '/guides/bookings/export-bookings',
            },
            {
                title: 'Handle add-on orders',
                description: 'Manage extras purchased with bookings',
                link: '/guides/day-to-day/add-on-orders',
            },
        ],
    },
    {
        title: 'Manage customers',
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
                title: 'Sync with personal calendar',
                description: 'Connect your calendar to stay organized',
                link: '/guides/day-to-day/sync-personal-calendar',
            },
            {
                title: 'Automate reviews and loyalty',
                description: 'Set up automated review requests',
                link: '/guides/boost-revenue/automate-reviews-and-loyalty',
            },
            {
                title: 'Customer communication',
                description: 'Send emails and notifications to customers',
                link: '/guides/customers/add-customer',
            },
        ],
    },
    {
        title: 'Rental setup',
        links: [
            {
                title: '10 step setup guide',
                description: 'Complete walkthrough to get started',
                link: '/guides/settings/step-setup-guide',
            },
            {
                title: 'Booking and cancellation rules',
                description: 'Set policies for reservations and refunds',
                link: '/guides/settings/booking-cancellation-rules',
            },
            {
                title: 'Manage docks',
                description: 'Add and organize your rental locations',
                link: '/guides/settings/manage-docks',
            },
            {
                title: 'Configure simultaneous pickup and return',
                description: 'Allow multiple boats to start/end at once',
                link: '/guides/settings/configure-simultaneous-pickup-return',
            },
            {
                title: 'Create add-ons',
                description: 'Set up extras customers can purchase',
                link: '/guides/settings/create-add-ons',
            },
            {
                title: 'Manage boats',
                description: 'Add boats and configure their details',
                link: '/guides/settings/boats/manage-boats',
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
                                direction === 'right'
                                    ? styles.SlideFromRight
                                    : styles.SlideFromLeft
                            }`}
                        >
                            <div className={styles.LinksGrid}>
                                {categories[activeTab].links.map(
                                    (link, index) => (
                                        <Link
                                            key={index}
                                            to={link.link}
                                            className={styles.GuideLink}
                                        >
                                            <div>
                                                <div
                                                    className={
                                                        styles.GuideLinkTitle
                                                    }
                                                >
                                                    {link.title}
                                                </div>
                                                <div
                                                    className={
                                                        styles.GuideLinkDescription
                                                    }
                                                >
                                                    {link.description}
                                                </div>
                                            </div>
                                            <span
                                                className={
                                                    styles.GuideLinkArrow
                                                }
                                            >
                                                →
                                            </span>
                                        </Link>
                                    )
                                )}
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
