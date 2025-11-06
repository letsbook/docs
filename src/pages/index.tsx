import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';

import Features from './Homepage/components/Features';
import GettingStarted from './Homepage/components/GettingStarted';
import Hero from './Homepage/components/Hero';
import QuickActions from './Homepage/components/QuickActions';
import ReleaseBanner from './Homepage/components/ReleaseBanner';

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Your comprehensive guide to Let's Book - the complete boat rental management platform"
        >
            <Hero />

            <main>
                <QuickActions />
                <ReleaseBanner />
                <Features />
                <GettingStarted />
            </main>
        </Layout>
    );
}
