import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface QuickLink {
    title: string;
    description: string;
    link: string;
    type: 'primary' | 'secondary';
}

const quickLinks: QuickLink[] = [
    {
        title: 'Quick Start Guide',
        description: 'Get up and running with Let\'s Book in minutes',
        link: '/docs/getting-started',
        type: 'primary'
    },
    {
        title: 'API Documentation',
        description: 'Integrate Let\'s Book with your existing systems',
        link: '/docs/api-advanced',
        type: 'secondary'
    },
    {
        title: 'Account Setup',
        description: 'Configure your account and team settings',
        link: '/docs/account-management',
        type: 'secondary'
    }
];

export default function GettingStarted(): ReactNode {
    return (
        <section className={styles.gettingStarted}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <h2 className={styles.title}>
                            Ready to get started?
                        </h2>
                        <p className={styles.description}>
                            Whether you're setting up your first boat rental business or migrating from another system, 
                            our comprehensive documentation will guide you through every step.
                        </p>
                        <div className={styles.quickLinks}>
                            {quickLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.link}
                                    className={`${styles.quickLink} ${styles[link.type]}`}
                                >
                                    <div className={styles.quickLinkContent}>
                                        <h3 className={styles.quickLinkTitle}>
                                            {link.title}
                                        </h3>
                                        <p className={styles.quickLinkDescription}>
                                            {link.description}
                                        </p>
                                    </div>
                                    <div className={styles.quickLinkArrow}>
                                        →
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className={styles.visualContent}>
                        <div className={styles.placeholder}>
                            <div className={styles.placeholderIcon}>📚</div>
                            <p>Documentation Hub</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}