import type { ReactNode } from 'react';

import MetaballsBackground from '../MetaballsBackground/MetaballsBackground';

import styles from './styles.module.css';

export default function Hero(): ReactNode {
    return (
        <section className={styles.Root}>
            <MetaballsBackground />

            <div className="container">
                <div className={styles.HeaderContent}>
                    <h1 className={styles.Title}>
                        <span className={styles.BrandName}>Let's Book</span>
                        Support Center
                    </h1>
                </div>
            </div>
        </section>
    );
}
