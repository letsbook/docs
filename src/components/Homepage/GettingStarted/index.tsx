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
                    <div className={styles.ImageContent}>
                        <img 
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop" 
                            alt="Support team member" 
                            className={styles.SupportImage}
                        />
                    </div>

                    <div className={styles.TextContent}>
                        <h2 className={styles.Title}>Our team is here to help</h2>
                        <p className={styles.Description}>
                            Get answers from our support team who know Let's Book inside out.
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
                </div>
            </div>
        </section>
    );
}
