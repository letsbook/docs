import type { ReactNode } from 'react';

import styles from './styles.module.css';

const ReleaseBanner = (): ReactNode => (
    <a href="/releases/v1.15" className={styles.Banner}>
        <span className={styles.Badge}>New Release!</span>
        <span className={styles.Text}>
            Finance makeover, charge cards twice, and better discounts
        </span>
        <span className={styles.Arrow}>→</span>
    </a>
);

export default ReleaseBanner;
