import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import React from 'react';

import styles from './styles.module.css';

// Utility to extract a version like v1.2.3 or 1.2 from a string
function extractVersion(text: string | undefined): string | undefined {
    if (!text) return undefined;
    const match = text.match(/\b(v?\d+(?:\.\d+)+)\b/i);
    return match ? match[1] : undefined;
}

export default function BlogPostItemHeaderTitle(): React.ReactElement {
    // We ignore default props and derive title from metadata to ensure consistency
    const { metadata, frontMatter, isBlogPostPage } = useBlogPost();
    const title = metadata.title;
    const version = (frontMatter as any)?.releaseVersion as string | undefined;

    return (
        <header className={styles.headerWrapper}>
            {/* Render the title as an H1 on post page, H2 on list items to better match default semantics */}
            {isBlogPostPage ? (
                <h1 className={styles.title}>{title}</h1>
            ) : (
                <h2 className={styles.title}>
                    <a href={metadata.permalink}>{title}</a>
                </h2>
            )}

            {version && (
                <div className={styles.versionBox} aria-label="Release version">
                    <span className={styles.versionLabel}>Version</span>
                    <span className={styles.versionValue}>{version}</span>
                </div>
            )}
        </header>
    );
}
