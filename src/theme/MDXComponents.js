import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Button from '@site/src/components/Button/Button';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

// Custom link component that conditionally renders as Button in blog posts
function SmartLink(props) {
  // Try to get blog context - will be undefined outside blog posts
  let isBlogPost = false;
  try {
    const blogContext = useBlogPost();
    isBlogPost = !!blogContext;
  } catch (e) {
    // Not in a blog post context
  }
  
  // Check if this is a dashboard link
  const isDashboardLink = props.href?.includes('dashboard.letsbook.app');
  
  // Check if parent is a list item by checking if we're in a list context
  // In MDX, links inside bullets will have different rendering context
  // We can't easily detect this in the component, so we use a simpler approach:
  // Only render as Button if the link text looks like a primary action
  const isPrimaryAction = props.children?.toString().toLowerCase().includes('create') ||
                          props.children?.toString().toLowerCase().includes('open') ||
                          props.children?.toString().toLowerCase().includes('start') ||
                          props.children?.toString().toLowerCase().includes('add') ||
                          props.children?.toString().toLowerCase().includes('set up');
  
  // Only render as Button if:
  // 1. We're in a blog post (release)
  // 2. It's a dashboard link
  // 3. It looks like a primary action (not just a reference link)
  if (isBlogPost && isDashboardLink && isPrimaryAction) {
    return (
      <Button href={props.href} variant="primary">
        {props.children}
      </Button>
    );
  }
  
  // Default link behavior for everything else
  return <a {...props} />;
}

export default {
  ...MDXComponents,
  a: SmartLink,
};
