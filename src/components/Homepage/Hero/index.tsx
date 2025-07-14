import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function Hero(): ReactNode {
    const { siteConfig } = useDocusaurusContext();

    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.heroContainer}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            {siteConfig.title}
                        </h1>
                        <p className={styles.heroSubtitle}>
                            {siteConfig.tagline}
                        </p>
                        <p className={styles.heroDescription}>
                            Streamline your boat rental business with our comprehensive management platform. 
                            From fleet management to customer bookings, Let's Book has everything you need.
                        </p>
                        <div className={styles.heroButtons}>
                            <Link
                                className={`button button--primary button--lg ${styles.heroButton}`}
                                to="/docs/intro"
                            >
                                Get Started
                            </Link>
                            <Link
                                className={`button button--secondary button--lg ${styles.heroButton}`}
                                to="/docs/getting-started"
                            >
                                View Documentation
                            </Link>
                        </div>
                    </div>
                    <div className={styles.heroVisual}>
                        <div className={styles.heroImage}>
                            <div className={styles.mockupContainer}>
                                <div className={styles.mockupHeader}>
                                    <div className={styles.mockupDots}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <div className={styles.mockupContent}>
                                    <div className={styles.mockupDashboard}>
                                        <div className={styles.mockupCard}>
                                            <div className={styles.mockupIcon}>⛵</div>
                                            <div className={styles.mockupText}>Fleet Management</div>
                                        </div>
                                        <div className={styles.mockupCard}>
                                            <div className={styles.mockupIcon}>📅</div>
                                            <div className={styles.mockupText}>Scheduling</div>
                                        </div>
                                        <div className={styles.mockupCard}>
                                            <div className={styles.mockupIcon}>👥</div>
                                            <div className={styles.mockupText}>Customer Management</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
