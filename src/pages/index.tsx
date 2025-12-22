import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Features from '@site/src/pages/_home/components/Features';
import GettingStarted from '@site/src/pages/_home/components/GettingStarted';
import Hero from '@site/src/pages/_home/components/Hero';
import QuickActions from '@site/src/pages/_home/components/QuickActions';
import ReleaseBanner from '@site/src/pages/_home/components/ReleaseBanner';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Your comprehensive guide to Let's Book - the complete boat rental management platform"
        >
            <Hero />

            <main>
                STAGING
                <QuickActions />
                <ReleaseBanner />
                <Features />
                <GettingStarted />
            </main>
        </Layout>
    );
}
