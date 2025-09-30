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
        title: 'Get instant help',
        description: 'support@lets-book.com - we respond fast',
        icon: '⚡',
        link: 'mailto:support@lets-book.com',
    },
    {
        title: 'Browse all guides',
        description: 'Everything you need to know',
        icon: '📚',
        link: '/guides/get-started/step-setup-guide',
    },
    {
        title: 'Book a call',
        description: 'Get expert setup assistance',
        icon: '🎯',
        link: "javascript:Beacon('open')",
    },
];

export default function GettingStarted(): ReactNode {
    return (
        <section className={styles.Root}>
            <div className="container">
                <div className={styles.HelpContent}>
                    <div className={styles.HelpText}>
                        <h2 className={styles.Title}>
                            Need help? We've got you covered
                        </h2>

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
                        <img
                            src="/img/support-team.jpg"
                            alt="Let's Book support team member ready to help"
                            className={styles.SupportImage}
                        />
                    </div>
                </div>

                <div className={styles.FooterCTA}>
                    <div className={styles.CTAContent}>
                        <h2 className={styles.CTATitle}>
                            Can't find what you need?
                        </h2>
                        <p className={styles.CTADescription}>
                            Our support team responds fast and knows Let's Book
                            inside out
                        </p>
                        <div className={styles.CTAButtons}>
                            <Link
                                to="/guides/get-started/step-setup-guide"
                                className={`${styles.Btn} ${styles.BtnPrimary}`}
                            >
                                🚀 Get started now
                            </Link>
                            <Link
                                to="mailto:support@lets-book.com"
                                className={`${styles.Btn} ${styles.BtnSecondary}`}
                            >
                                ⚡ Contact support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
