import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import React from 'react';

export default function BlogPostItemHeader(): React.ReactElement {
    const { metadata } = useBlogPost();
    const { date } = metadata;

    // Format date as "Sep 2025"
    const dateObj = new Date(date);
    const monthYear = dateObj.toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
    });

    return (
        <header>
            <BlogPostItemHeaderTitle />
            <time
                dateTime={date}
                style={{ color: '#666', fontSize: '0.95rem' }}
            >
                {monthYear}
            </time>
            <BlogPostItemHeaderAuthors />
        </header>
    );
}
