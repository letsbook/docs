import { useHistory } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { usePluginData } from '@docusaurus/useGlobalData';
import useIsBrowser from '@docusaurus/useIsBrowser';
import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

import styles from './styles.module.css';

// Create a search adapter similar to LunrSearchAdapter
const createSearchAdapter = (lunr: any) => {
    return class LunrSearchAdapter {
        searchDocs: any[];
        lunrIndex: any;
        baseUrl: string;
        maxHits: number;

        constructor(
            searchDocs: any[],
            searchIndex: any,
            baseUrl: string = '/',
            maxHits: number = 8
        ) {
            this.searchDocs = searchDocs;
            this.lunrIndex = lunr.Index.load(searchIndex);
            this.baseUrl = baseUrl;
            this.maxHits = maxHits;
        }

        getLunrResult(input: string) {
            return this.lunrIndex.query((query: any) => {
                const tokens = lunr.tokenizer(input);
                query.term(tokens, { boost: 10 });
                query.term(tokens, { wildcard: lunr.Query.wildcard.TRAILING });
            });
        }

        getHit(doc: any, formattedTitle?: string, formattedContent?: string) {
            return {
                hierarchy: {
                    lvl0: doc.pageTitle || doc.title,
                    lvl1: doc.type === 0 ? null : doc.title,
                },
                url: doc.url,
                version: doc.version,
                _snippetResult: formattedContent
                    ? {
                          content: {
                              value: formattedContent,
                              matchLevel: 'full',
                          },
                      }
                    : null,
                _highlightResult: {
                    hierarchy: {
                        lvl0: {
                            value:
                                doc.type === 0
                                    ? formattedTitle || doc.title
                                    : doc.pageTitle,
                        },
                        lvl1:
                            doc.type === 0
                                ? null
                                : {
                                      value: formattedTitle || doc.title,
                                  },
                    },
                },
            };
        }

        async search(input: string): Promise<any[]> {
            const results = this.getLunrResult(input);
            const hits: any[] = [];
            const limitedResults = results.slice(0, this.maxHits);

            limitedResults.forEach((result: any) => {
                const doc = this.searchDocs[result.ref];
                if (doc) {
                    hits.push(this.getHit(doc));
                }
            });

            return hits.slice(0, this.maxHits);
        }
    };
};

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
    const history = useHistory();
    const isBrowser = useIsBrowser();
    const pluginData = usePluginData('docusaurus-lunr-search') as {
        fileNames: { searchDoc: string; lunrIndex: string };
    } | null;
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchAdapter, setSearchAdapter] = useState(null);
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const initialized = useRef(false);
    const searchContainerRef = useRef<HTMLDivElement>(null);
    const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Initialize search adapter
    const initializeSearch = async (): Promise<void> => {
        if (!initialized.current && isBrowser && pluginData) {
            // Only initialize search in production mode
            if (process.env.NODE_ENV !== 'production') {
                initialized.current = true;
                return;
            }

            try {
                const { baseUrl } = siteConfig;
                const pluginConfig = (siteConfig.plugins || []).find(
                    (plugin) =>
                        Array.isArray(plugin) &&
                        typeof plugin[0] === 'string' &&
                        plugin[0].includes('docusaurus-lunr-search')
                );
                const assetUrl =
                    (pluginConfig && pluginConfig[1]?.assetUrl) || baseUrl;

                const [searchDocResponse, searchIndexResponse] =
                    await Promise.all([
                        fetch(`${assetUrl}${pluginData.fileNames.searchDoc}`),
                        fetch(`${assetUrl}${pluginData.fileNames.lunrIndex}`),
                    ]);

                // Check if responses are ok before parsing JSON
                if (!searchDocResponse.ok || !searchIndexResponse.ok) {
                    throw new Error('Failed to fetch search index files');
                }

                const [searchDocFile, searchIndex] = await Promise.all([
                    searchDocResponse.json(),
                    searchIndexResponse.json(),
                ]);

                // Import lunr and create a simple search adapter
                const lunr = await import('lunr');
                const LunrSearchAdapter = createSearchAdapter(lunr.default);

                const { searchDocs, options } = searchDocFile;
                if (searchDocs && searchDocs.length > 0) {
                    const adapter = new LunrSearchAdapter(
                        searchDocs,
                        searchIndex,
                        baseUrl,
                        options?.maxHits || 8
                    );
                    setSearchAdapter(adapter);
                }
                initialized.current = true;
            } catch (error) {
                console.error('Failed to initialize search:', error);
                initialized.current = true;
            }
        }
    };

    // Initialize search on component mount
    if (isBrowser && !initialized.current) {
        initializeSearch();
    }

    // Handle clicking outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchContainerRef.current &&
                !searchContainerRef.current.contains(event.target as Node)
            ) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            // Cleanup debounce timeout
            if (debounceTimeoutRef.current) {
                clearTimeout(debounceTimeoutRef.current);
            }
        };
    }, []);

    const debouncedSearch = (query: string): void => {
        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }

        debounceTimeoutRef.current = setTimeout(() => {
            performSearch(query);
        }, 300);
    };

    const handleSuggestionClick = (query: string): void => {
        setSearchQuery(query);
        // Clear any pending debounced search
        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }
        performSearch(query);
    };

    const performSearch = async (
        query: string = searchQuery
    ): Promise<void> => {
        if (!query.trim()) {
            setSearchResults([]);
            setShowDropdown(false);
            return;
        }

        setIsLoading(true);

        try {
            if (searchAdapter) {
                // Use lunr search
                const results = await searchAdapter.search(query);
                setSearchResults(results || []);
                setShowDropdown(true);
            } else {
                setSearchResults([]);
                setShowDropdown(false);
            }
        } catch (error) {
            console.error('Search error:', error);
            setSearchResults([]);
            setShowDropdown(false);
        } finally {
            setIsLoading(false);
        }
    };

    const handleResultClick = (result: any): void => {
        const url = result.url || '/';

        // Navigate to the result with highlight state
        history.push(url, {
            highlightState: { wordToHighlight: searchQuery },
        });

        // Close dropdown
        setShowDropdown(false);
    };

    const handleSearch = (): void => {
        if (!searchQuery.trim()) return;

        if (searchResults.length > 0) {
            // Navigate to first result if we have results
            handleResultClick(searchResults[0]);
        } else {
            // Fallback: redirect to docs with search query
            history.push(`/docs?q=${encodeURIComponent(searchQuery)}`);
        }
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
                    <div
                        className={styles.SearchContainer}
                        ref={searchContainerRef}
                    >
                        <div className={styles.ChatInterface}>
                            <div className={styles.ChatInputContainer}>
                                <input
                                    type="text"
                                    className={styles.ChatInput}
                                    placeholder="Ask me anything about Let's Book... 💬"
                                    value={searchQuery}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setSearchQuery(value);
                                        debouncedSearch(value);
                                    }}
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
                            {showDropdown && searchResults.length > 0 && (
                                <div className={styles.SearchDropdown}>
                                    {searchResults.map((result, index) => (
                                        <div
                                            key={index}
                                            className={styles.SearchResult}
                                            onClick={() =>
                                                handleResultClick(result)
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.SearchResultCategory
                                                }
                                            >
                                                {result.hierarchy?.lvl0}
                                            </div>
                                            {result.hierarchy?.lvl1 && (
                                                <div
                                                    className={
                                                        styles.SearchResultSubcategory
                                                    }
                                                >
                                                    {result.hierarchy.lvl1}
                                                </div>
                                            )}
                                            {result._snippetResult?.content && (
                                                <div
                                                    className={
                                                        styles.SearchResultText
                                                    }
                                                    dangerouslySetInnerHTML={{
                                                        __html: result
                                                            ._snippetResult
                                                            .content.value,
                                                    }}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                            {showDropdown &&
                                searchResults.length === 0 &&
                                !isLoading &&
                                searchQuery.trim() && (
                                    <div className={styles.SearchDropdown}>
                                        <div className={styles.SearchNoResults}>
                                            No results found for "{searchQuery}"
                                        </div>
                                    </div>
                                )}
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
