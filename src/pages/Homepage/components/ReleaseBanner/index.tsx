import Link from '@docusaurus/Link';
import type { ReactNode } from 'react';

import latestRelease from '@site/src/data/latest-release.json';
import styles from './styles.module.css';

const ReleaseBanner = (): ReactNode => {
    return (
        <div className={styles.Container}>
            <Link to={latestRelease.url} className={styles.Banner}>
                <span className={styles.Badge}>New Release!</span>
                <span className={styles.Text}>{latestRelease.description}</span>
                <span className={styles.Arrow}>→</span>
            </Link>
        </div>
    );
};

export default ReleaseBanner;
