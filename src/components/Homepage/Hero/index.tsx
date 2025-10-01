import type { ReactNode } from 'react';

const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
    </svg>
);

import styles from './styles.module.css';

export default function Hero(): ReactNode {
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = formData.get('search') as string;
        if (query) {
            window.location.href = `/search?q=${encodeURIComponent(query)}`;
        }
    };

    return (
        <section className={styles.Root}>
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className={styles.VideoBackground}
            >
                <source src="/img/video_header.mp4" type="video/mp4" />
            </video>

            <div className="container">
                <div className={styles.HeaderContent}>
                    <h1 className={styles.Title}>
                        <span className={styles.BrandName}>Let's Book</span>
                        Support Center
                    </h1>
                    
                    <div className={styles.SearchContainer}>
                        <form onSubmit={handleSearch} className={styles.SearchForm}>
                            <div className={styles.SearchWrapper}>
                                <SearchIcon />
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="How can we help you?"
                                    className={styles.SearchInput}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
