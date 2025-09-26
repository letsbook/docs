import Link from '@docusaurus/Link';
import type { ReactNode } from 'react';
import { useState } from 'react';

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
        title: "Get started with Let's Book",
        icon: '',
        links: [
            {
                title: '10 step setup guide',
                link: '/guides/get-started/10-step-setup-guide',
            },
            {
                title: 'Choose best plan',
                link: '/guides/get-started/choose-best-plan',
            },
        ],
    },
    {
        title: 'Day to day use',
        icon: '',
        links: [
            {
                title: 'Working with planning overview',
                link: '/guides/day-to-day/planning-overview',
            },
            {
                title: 'Boat handout process',
                link: '/guides/day-to-day/boat-handout-process',
            },
            {
                title: 'Track sales insights',
                link: '/guides/day-to-day/sales-insights',
            },
            {
                title: 'Manage blockout periods',
                link: '/guides/day-to-day/blockout-periods',
            },
            {
                title: 'Sync with personal calendar',
                link: '/guides/day-to-day/sync-personal-calendar',
            },
        ],
    },
    {
        title: 'Manage bookings',
        icon: '',
        links: [
            {
                title: 'Add booking',
                link: '/guides/bookings/add-booking',
            },
            {
                title: 'Edit or cancel a booking',
                link: '/guides/bookings/edit-or-cancel-a-booking',
            },
            {
                title: 'Search and filter bookings',
                link: '/guides/bookings/search-and-filter-bookings',
            },
            {
                title: 'Export bookings',
                link: '/guides/bookings/export-bookings',
            },
        ],
    },
    {
        title: 'Extra revenue',
        icon: '',
        links: [
            {
                title: 'Discount codes and coupon setup',
                link: '/guides/extra-revenue/discount-codes-and-coupon-setup',
            },
            {
                title: 'Offer memberships or subscriptions',
                link: '/guides/extra-revenue/offer-memberships-or-subscriptions',
            },
            {
                title: 'Shift booking fee',
                link: '/guides/extra-revenue/shift-booking-fee',
            },
        ],
    },
    {
        title: 'Settings',
        icon: '',
        links: [
            {
                title: 'Manage docks',
                link: '/guides/settings/manage-docks',
            },
        ],
    },
    {
        title: 'Boats',
        icon: '',
        links: [
            {
                title: 'Manage boats',
                link: '/guides/boats/manage-boats',
            },
            {
                title: 'Assign boats to docks',
                link: '/guides/boats/assign-boats-to-docks',
            },
            {
                title: 'Connect boats',
                link: '/guides/boats/connect-boats',
            },
        ],
    },
    {
        title: 'Add-ons',
        icon: '',
        links: [
            {
                title: 'Create add-ons',
                link: '/guides/add-ons/create-add-ons',
            },
            {
                title: 'Add-on orders',
                link: '/guides/add-ons/add-on-orders',
            },
        ],
    },
    {
        title: 'Customers',
        icon: '',
        links: [
            {
                title: 'Add customer',
                link: '/guides/customers/add-customer',
            },
            {
                title: 'View customer history',
                link: '/guides/customers/view-customer-history',
            },
            {
                title: 'Anonymize customers',
                link: '/guides/customers/anonymize-customers',
            },
        ],
    },
    {
        title: 'Booking form',
        icon: '',
        links: [
            {
                title: 'Add to website',
                link: '/guides/booking-form/add-to-website',
            },
            {
                title: 'Alternatives',
                link: '/guides/booking-form/alternatives',
            },
            {
                title: 'Custom questions',
                link: '/guides/booking-form/questions',
            },
            {
                title: 'Match branding',
                link: '/guides/booking-form/match-branding',
            },
        ],
    },
    {
        title: 'Waivers and contracts',
        icon: '',
        links: [
            {
                title: 'Set up waivers',
                link: '/guides/waivers/set-up-waivers',
            },
            {
                title: 'Work with contracts',
                link: '/guides/waivers/work-with-contracts',
            },
            {
                title: 'Work with waivers',
                link: '/guides/waivers/work-with-waivers',
            },
        ],
    },
    {
        title: 'Collaborate with the team',
        icon: '',
        links: [
            {
                title: 'Invite team members',
                link: '/guides/collaborate/invite-team-members',
            },
            {
                title: 'Roles and permissions',
                link: '/guides/collaborate/roles-permissions',
            },
        ],
    },
    {
        title: 'Dive deeper',
        icon: '',
        links: [
            {
                title: 'API',
                link: '/guides/dive-deeper/api',
            },
            {
                title: 'Advanced integration',
                link: '/guides/dive-deeper/advanced-integration',
            },
            {
                title: 'Connect Google Analytics',
                link: '/guides/dive-deeper/connect-google-analytics',
            },
            {
                title: 'Custom booking conditions',
                link: '/guides/dive-deeper/custom-booking-conditions',
            },
        ],
    },
];

export default function Features(): ReactNode {
    const [showAll, setShowAll] = useState(false);

    const priorityCategories = [
        'Day to day use',
        'Manage bookings',
        'Booking form',
        'Extra revenue',
        'Dive deeper',
        "Get started with Let's Book",
    ];

    const displayedCategories = showAll
        ? categories
        : categories.filter((category) =>
              priorityCategories.includes(category.title)
          );

    return (
        <section className={styles.Root}>
            <div className="container">
                <h2 className={styles.SectionTitle}>All guides</h2>
                <p className={styles.SectionSubtitle}>
                    Discover all the possibilities of Let's Book
                </p>

                <div className={styles.CategoriesGrid}>
                    {displayedCategories.map((category, index) => (
                        <div key={index} className={styles.CategoryCard}>
                            <div className={styles.CategoryHeader}>
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

                <div className={styles.ViewMoreContainer}>
                    <button
                        className={styles.ViewMoreButton}
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? 'View less' : 'View more'}
                        <span className={styles.ViewMoreArrow}>
                            {showAll ? '↑' : '↓'}
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
