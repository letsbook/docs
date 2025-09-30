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
    const openBeacon = (e: React.MouseEvent) => {
        e.preventDefault();
        if (typeof window !== 'undefined' && (window as any).Beacon) {
            (window as any).Beacon('open');
        }
    };

    return (
        <section className={styles.Root}>
            <div className="container">
                <div className={styles.Content}>
                    <div className={styles.TextContent}>
                        <h2 className={styles.Title}>Our team is here to help</h2>
                        <p className={styles.Description}>
                            Get answers from our support team who know Let's Book inside out. 
                            We respond fast and help you get the most out of the platform.
                        </p>
                        
                        <div className={styles.Actions}>
                            <button
                                onClick={openBeacon}
                                className={`${styles.Btn} ${styles.BtnPrimary}`}
                            >
                                Contact support
                            </button>
                            <a
                                href="mailto:support@lets-book.com"
                                className={`${styles.Btn} ${styles.BtnSecondary}`}
                            >
                                Send email
                            </a>
                        </div>
                    </div>

                    <div className={styles.ImageContent}>
                        <img 
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop" 
                            alt="Support team member" 
                            className={styles.SupportImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
