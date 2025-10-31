import type { ReactNode } from 'react';

import styles from './styles.module.css';

const SearchIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
    </svg>
);

const Hero = (): ReactNode => (
    <section className={styles.Root}>
        <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.VideoBackground}
        >
            <source src="/video/video_header.mp4" type="video/mp4" />
        </video>

        <div className="container">
            <div className={styles.HeaderContent}>
                <h1 className={styles.Title}>
                    <span className={styles.BrandName}>Let's Book</span>
                    Support Center
                </h1>

                <div className={styles.SearchContainer}>
                    <button className={styles.SearchButton}>
                        <SearchIcon />
                        <span className={styles.SearchInput}>
                            How can we help you?
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
