import supportImage from '@site/static/img/support.jpg';
import type { ReactNode } from 'react';

import styles from './styles.module.css';

export default function GettingStarted(): ReactNode {
    const openIntercom = (e: React.MouseEvent) => {
        e.preventDefault();
        if (typeof window !== 'undefined' && (window as any).Intercom) {
            (window as any).Intercom('show');
        }
    };

    return (
        <section className={styles.Root}>
            <div className="container">
                <div className={styles.Content}>
                    <div className={styles.ImageContent}>
                        <img
                            src={supportImage}
                            alt="Support team member"
                            className={styles.SupportImage}
                        />
                    </div>

                    <div className={styles.TextContent}>
                        <h2 className={styles.Title}>
                            Our team is here to help
                        </h2>
                        <p className={styles.Description}>
                            Get answers from our support team who know Let's
                            Book inside out.
                        </p>

                        <div className={styles.Actions}>
                            <button
                                onClick={openIntercom}
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
