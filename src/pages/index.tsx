import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';

import Hero from '@site/src/components/Homepage/Hero';
import Features from '@site/src/components/Homepage/Features';
import GettingStarted from '@site/src/components/Homepage/GettingStarted';
import Benefits from '@site/src/components/Homepage/Benefits';

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Your comprehensive guide to Let's Book - the complete boat rental management platform"
        >
            <Hero />
            <main>
                <Features />
                <Benefits />
                <GettingStarted />
            </main>
        </Layout>
    );
}
