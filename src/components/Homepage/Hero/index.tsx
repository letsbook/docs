import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type { ReactNode } from 'react';
import { useState } from 'react';

import styles from './styles.module.css';

type SuggestionChip = {
    text: string;
    query: string;
};

const suggestions: SuggestionChip[] = [
    {
        text: 'Add new booking',
        query: 'How do I add a new booking?',
    },
    {
        text: 'Payment methods',
        query: 'Which payment methods are supported?',
    },
    {
        text: 'Export schedule',
        query: 'Export schedule',
    },
];

export default function Hero(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSuggestionClick = (query: string): void => {
        setSearchQuery(query);
        handleSearch(query);
    };

    const handleSearch = (query: string = searchQuery): void => {
        if (!query.trim()) return;

        setIsLoading(true);

        // Simulate search processing
        setTimeout(() => {
            setIsLoading(false);
            // Here you would typically integrate with your search/AI service
            console.log('Searching for:', query);
        }, 1500);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <section className={styles.Root}>
            <div className="container">
                <div className={styles.HeaderContent}>
                    <h1 className={styles.Title}>Let's Book Help Center</h1>
                    <p className={styles.Subtitle}>
                        Everything you need to run your boat rental business
                        smoothly
                    </p>
                    <div className={styles.SearchContainer}>
                        <div className={styles.ChatInterface}>
                            <div className={styles.ChatInputContainer}>
                                <input
                                    type="text"
                                    className={styles.ChatInput}
                                    placeholder="Ask me anything about Let's Book... 💬"
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    onKeyPress={handleKeyPress}
                                />
                                <button
                                    className={styles.SendButton}
                                    onClick={() => handleSearch()}
                                    disabled={isLoading}
                                >
                                    {isLoading ? '⏳' : '→'}
                                </button>
                            </div>
                            <div className={styles.ChatSuggestions}>
                                {suggestions.map((suggestion, index) => (
                                    <button
                                        key={index}
                                        className={styles.SuggestionChip}
                                        onClick={() =>
                                            handleSuggestionClick(
                                                suggestion.query
                                            )
                                        }
                                    >
                                        {suggestion.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
