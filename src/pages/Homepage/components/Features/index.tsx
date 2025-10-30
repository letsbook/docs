import Link from '@docusaurus/Link';
import {
    Ban,
    ClipboardList,
    Clock,
    CreditCard,
    Download,
    Edit,
    FileSignature,
    FileText,
    Gift,
    Handshake,
    Lock,
    Mail,
    MapPin,
    Monitor,
    Plus,
    RefreshCw,
    Rocket,
    Sailboat,
    ScrollText,
    Search,
    Ship,
    ShoppingCart,
    Smartphone,
    Star,
    Ticket,
    TrendingUp,
    User,
    Users,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { useState } from 'react';

import styles from './styles.module.css';

type CategoryLink = {
    title: string;
    description: string;
    link: string;
    icon: ReactNode;
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
                icon: <Monitor size={20} />,
            },
            {
                title: 'Boat handout process',
                description:
                    'Check customers in and hand out boats efficiently',
                link: '/guides/day-to-day/boat-handout-process',
                icon: <Ship size={20} />,
            },
            {
                title: 'Track sales insights',
                description: 'Monitor revenue and booking trends',
                link: '/guides/day-to-day/sales-insights',
                icon: <TrendingUp size={20} />,
            },
            {
                title: 'Sync with personal calendar',
                description: 'Connect your calendar to stay organized',
                link: '/guides/day-to-day/sync-personal-calendar',
                icon: <Smartphone size={20} />,
            },
            {
                title: 'Manage blockout periods',
                description: 'Block dates when boats are unavailable',
                link: '/guides/day-to-day/blockout-periods',
                icon: <Ban size={20} />,
            },
            {
                title: 'Work with waivers and contracts',
                description: 'Collect digital signatures from customers',
                link: '/guides/day-to-day/work-with-waivers-and-contracts',
                icon: <FileSignature size={20} />,
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
                icon: <Clock size={20} />,
            },
            {
                title: 'Create discount codes',
                description: 'Set up promo codes to boost bookings',
                link: '/guides/boost-revenue/create-discount-codes-to-boost-bookings',
                icon: <Ticket size={20} />,
            },
            {
                title: 'Sell add-ons and extras',
                description: 'Increase revenue with additional services',
                link: '/guides/boost-revenue/sell-add-ons-and-extras',
                icon: <ShoppingCart size={20} />,
            },
            {
                title: 'Offer memberships or subscriptions',
                description: 'Create recurring revenue streams',
                link: '/guides/boost-revenue/offer-memberships-or-subscriptions',
                icon: <Users size={20} />,
            },
            {
                title: 'Shift booking fee',
                description: 'Pass processing fees to customers',
                link: '/guides/boost-revenue/shift-booking-fee',
                icon: <CreditCard size={20} />,
            },
            {
                title: 'Generate bookings through partners',
                description: 'Expand reach with distribution partners',
                link: '/guides/boost-revenue/generate-bookings-through-partners',
                icon: <Handshake size={20} />,
            },
        ],
    },
    {
        title: 'Track bookings',
        links: [
            {
                title: 'Add booking',
                description: 'Create new reservations for customers',
                link: '/guides/day-to-day/bookings/add-booking',
                icon: <Plus size={20} />,
            },
            {
                title: 'Edit or cancel a booking',
                description: 'Modify or cancel existing reservations',
                link: '/guides/day-to-day/bookings/edit-or-cancel-a-booking',
                icon: <Edit size={20} />,
            },
            {
                title: 'Search and filter bookings',
                description: 'Find specific bookings quickly',
                link: '/guides/day-to-day/bookings/search-and-filter-bookings',
                icon: <Search size={20} />,
            },
            {
                title: 'Booking statuses',
                description: 'Understand different booking states',
                link: '/guides/day-to-day/bookings/booking-statuses',
                icon: <ClipboardList size={20} />,
            },
            {
                title: 'Export bookings',
                description: 'Download booking data to CSV or Excel',
                link: '/guides/day-to-day/bookings/export-bookings',
                icon: <Download size={20} />,
            },
            {
                title: 'Handle add-on orders',
                description: 'Manage extras purchased with bookings',
                link: '/guides/day-to-day/add-on-orders',
                icon: <ShoppingCart size={20} />,
            },
        ],
    },
    {
        title: 'Manage customers',
        links: [
            {
                title: 'Add customer',
                description: 'Create customer profiles manually',
                link: '/guides/day-to-day/customers/add-customer',
                icon: <User size={20} />,
            },
            {
                title: 'View customer history',
                description: 'See all bookings and payments per customer',
                link: '/guides/day-to-day/customers/view-customer-history',
                icon: <ScrollText size={20} />,
            },
            {
                title: 'Anonymize customers',
                description: 'Remove personal data for GDPR compliance',
                link: '/guides/day-to-day/customers/anonymize-customers',
                icon: <Lock size={20} />,
            },
            {
                title: 'Automate reviews and loyalty',
                description: 'Set up automated review requests',
                link: '/guides/boost-revenue/automate-reviews-and-loyalty',
                icon: <Star size={20} />,
            },
            {
                title: 'Customer communication',
                description: 'Send emails and notifications to customers',
                link: '/guides/day-to-day/customers/add-customer',
                icon: <Mail size={20} />,
            },
        ],
    },
    {
        title: 'Rental setup',
        links: [
            {
                title: '10 step setup guide',
                description: 'Complete walkthrough to get started',
                link: '/guides/settings/ten-step-setup-guide',
                icon: <Rocket size={20} />,
            },
            {
                title: 'Booking and cancellation rules',
                description: 'Set policies for reservations and refunds',
                link: '/guides/settings/customers/booking-cancellation-rules',
                icon: <FileText size={20} />,
            },
            {
                title: 'Manage docks',
                description: 'Add and organize your rental locations',
                link: '/guides/settings/manage-docks',
                icon: <MapPin size={20} />,
            },
            {
                title: 'Configure simultaneous pickup and return',
                description: 'Allow multiple boats to start/end at once',
                link: '/guides/settings/configure-simultaneous-pickup-return',
                icon: <RefreshCw size={20} />,
            },
            {
                title: 'Create add-ons',
                description: 'Set up extras customers can purchase',
                link: '/guides/settings/create-add-ons',
                icon: <Gift size={20} />,
            },
            {
                title: 'Manage boats',
                description: 'Add boats and configure their details',
                link: '/guides/settings/boats/manage-boats',
                icon: <Sailboat size={20} />,
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
                                            <div
                                                className={
                                                    styles.GuideLinkContent
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.GuideLinkIcon
                                                    }
                                                >
                                                    {link.icon}
                                                </div>
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
