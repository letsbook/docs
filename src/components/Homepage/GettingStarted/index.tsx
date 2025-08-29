import Link from '@docusaurus/Link';
import type { ReactNode } from 'react';

import styles from './styles.module.css';

type HelpOption = {
    title: string;
    description: string;
    icon: string;
    link?: string;
};

const helpOptions: HelpOption[] = [
    {
        title: 'Email us',
        description: 'support@lets-book.com',
        icon: '📧',
        link: 'mailto:support@lets-book.com',
    },
    {
        title: 'Join our community',
        description: 'Find every answer you are looking for',
        icon: '👋',
        link: '/guides/intro',
    },
    {
        title: 'Book an expert',
        description: 'Find a specialist for your situation',
        icon: '🏠',
        link: '/guides/intro',
    },
];

export default function GettingStarted(): ReactNode {
    return (
        <section className={styles.Root}>
            <div className="container">
                <div className={styles.HelpContent}>
                    <div className={styles.HelpText}>
                        <h2 className={styles.Title}>Still have questions?</h2>

                        <div className={styles.HelpOptions}>
                            {helpOptions.map((option, index) => (
                                <Link
                                    key={index}
                                    to={option.link || '#'}
                                    className={styles.HelpOption}
                                >
                                    <div className={styles.HelpIcon}>
                                        {option.icon}
                                    </div>
                                    <div className={styles.HelpDetails}>
                                        <h3 className={styles.HelpTitle}>
                                            {option.title}
                                        </h3>
                                        <p className={styles.HelpDescription}>
                                            {option.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className={styles.HelpIllustration}>
                        <svg
                            width="400"
                            height="300"
                            viewBox="0 0 400 300"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="200"
                                cy="150"
                                r="120"
                                fill="#F7F8FE"
                                stroke="#E2E8F0"
                                strokeWidth="2"
                            ></circle>

                            <rect
                                x="160"
                                y="120"
                                width="80"
                                height="60"
                                rx="4"
                                fill="#081690"
                            ></rect>
                            <rect
                                x="165"
                                y="125"
                                width="70"
                                height="50"
                                rx="2"
                                fill="white"
                            ></rect>
                            <line
                                x1="200"
                                y1="125"
                                x2="200"
                                y2="175"
                                stroke="#E2E8F0"
                                strokeWidth="1"
                            ></line>

                            <circle
                                cx="140"
                                cy="100"
                                r="15"
                                fill="#FCF1CD"
                            ></circle>
                            <rect
                                x="130"
                                y="115"
                                width="20"
                                height="30"
                                rx="10"
                                fill="#12C19B"
                            ></rect>
                            <line
                                x1="125"
                                y1="125"
                                x2="120"
                                y2="135"
                                stroke="#12C19B"
                                strokeWidth="3"
                                strokeLinecap="round"
                            ></line>
                            <line
                                x1="155"
                                y1="125"
                                x2="160"
                                y2="135"
                                stroke="#12C19B"
                                strokeWidth="3"
                                strokeLinecap="round"
                            ></line>

                            <circle
                                cx="260"
                                cy="100"
                                r="15"
                                fill="#FCF1CD"
                            ></circle>
                            <rect
                                x="250"
                                y="115"
                                width="20"
                                height="30"
                                rx="10"
                                fill="#081690"
                            ></rect>
                            <line
                                x1="245"
                                y1="125"
                                x2="240"
                                y2="135"
                                stroke="#081690"
                                strokeWidth="3"
                                strokeLinecap="round"
                            ></line>
                            <line
                                x1="275"
                                y1="125"
                                x2="280"
                                y2="135"
                                stroke="#081690"
                                strokeWidth="3"
                                strokeLinecap="round"
                            ></line>

                            <text
                                x="120"
                                y="90"
                                fontFamily="Arial"
                                fontSize="20"
                                fill="#12C19B"
                            >
                                ?
                            </text>
                            <text
                                x="280"
                                y="90"
                                fontFamily="Arial"
                                fontSize="20"
                                fill="#081690"
                            >
                                ?
                            </text>
                            <text
                                x="90"
                                y="110"
                                fontFamily="Arial"
                                fontSize="16"
                                fill="#12C19B"
                            >
                                ?
                            </text>
                            <text
                                x="310"
                                y="110"
                                fontFamily="Arial"
                                fontSize="16"
                                fill="#081690"
                            >
                                ?
                            </text>

                            <circle
                                cx="100"
                                cy="180"
                                r="3"
                                fill="#12C19B"
                                opacity="0.6"
                            ></circle>
                            <circle
                                cx="320"
                                cy="180"
                                r="3"
                                fill="#081690"
                                opacity="0.6"
                            ></circle>
                            <circle
                                cx="80"
                                cy="140"
                                r="2"
                                fill="#12C19B"
                                opacity="0.4"
                            ></circle>
                            <circle
                                cx="340"
                                cy="140"
                                r="2"
                                fill="#081690"
                                opacity="0.4"
                            ></circle>
                        </svg>
                    </div>
                </div>

                <div className={styles.FooterCTA}>
                    <div className={styles.CTAContent}>
                        <h2 className={styles.CTATitle}>
                            Didn't find what you were looking for?
                        </h2>
                        <p className={styles.CTADescription}>
                            Our support team is ready to help you with all your
                            questions about Let's Book
                        </p>
                        <div className={styles.CTAButtons}>
                            <Link
                                to="/guides/intro"
                                className={`${styles.Btn} ${styles.BtnPrimary}`}
                            >
                                💬 Start chat
                            </Link>
                            <Link
                                to="mailto:support@lets-book.com"
                                className={`${styles.Btn} ${styles.BtnSecondary}`}
                            >
                                📧 Send email
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
