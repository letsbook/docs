import Button from '@site/src/components/Button/Button';
import React from 'react';

import styles from './PlanComparison.module.css';

export default function PlanComparison() {
    return (
        <div className={styles.planContainer}>
            <div className={styles.planCard}>
                <div className={styles.planHeader}>
                    <h3>Standard Plan</h3>
                    <div className={styles.planPrice}>
                        <span className={styles.priceAmount}>$30</span>
                        <span className={styles.pricePeriod}>/month</span>
                    </div>
                    <div className={styles.planSubprice}>
                        (€25/month) + 2.5% booking fee
                    </div>
                </div>

                <div className={styles.planBody}>
                    <p className={styles.planDescription}>
                        Perfect for small and medium-sized rental businesses
                        getting started or with seasonal operations.
                    </p>

                    <div className={styles.planSection}>
                        <strong>Ideal for:</strong>
                        <ul>
                            <li>New boat rental businesses</li>
                            <li>Seasonal operations</li>
                            <li>Annual revenue under $100,000</li>
                        </ul>
                    </div>

                    <div className={styles.planSection}>
                        <strong>Why it works:</strong>
                        <p>
                            Low fixed cost with reasonable booking fees means
                            you only pay more when you're making more. Perfect
                            for testing the waters or managing seasonal
                            operations.
                        </p>
                    </div>
                </div>

                <div className={styles.planFooter}>
                    <Button href="https://lets-book.com/en/get-started">
                        Get Started with Standard
                    </Button>
                </div>
            </div>

            <div className={styles.planCard}>
                <div className={styles.planHeader}>
                    <h3>Pro Plan</h3>
                    <div className={styles.planPrice}>
                        <span className={styles.priceAmount}>$175</span>
                        <span className={styles.pricePeriod}>/month</span>
                    </div>
                    <div className={styles.planSubprice}>
                        (€150/month) + 1% booking fee
                    </div>
                </div>

                <div className={styles.planBody}>
                    <p className={styles.planDescription}>
                        The smart choice for growing rental businesses with
                        higher volume and annual turnover of $100,000+.
                    </p>

                    <div className={styles.planSection}>
                        <strong>Ideal for:</strong>
                        <ul>
                            <li>Established rental businesses</li>
                            <li>Year-round operations</li>
                            <li>Annual revenue over $100,000</li>
                        </ul>
                    </div>

                    <div className={styles.planSection}>
                        <strong>Why it works:</strong>
                        <p>
                            Higher fixed cost pays for itself quickly with the
                            lower 1% booking fee. More predictable costs as you
                            scale, with significant savings on every booking.
                        </p>
                    </div>
                </div>

                <div className={styles.planFooter}>
                    <Button href="https://lets-book.com/en/get-started">
                        Get Started with Pro
                    </Button>
                </div>
            </div>
        </div>
    );
}
