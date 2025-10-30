import React from 'react';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

export default function BlogPostItemHeader(): JSX.Element {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {date, formattedDate} = metadata;
  
  // Format date as "Sep 2025"
  const dateObj = new Date(date);
  const monthYear = dateObj.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });

  return (
    <header>
      <BlogPostItemHeaderTitle />
      <time dateTime={date} style={{color: '#666', fontSize: '0.95rem'}}>
        {monthYear}
      </time>
      <BlogPostItemHeaderAuthors />
    </header>
  );
}
