import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Courses from '@site/src/components/Homepage/Courses';
import Features from '@site/src/components/Homepage/Features';
import GettingStarted from '@site/src/components/Homepage/GettingStarted';
import Hero from '@site/src/components/Homepage/Hero';
import QuickActions from '@site/src/components/Homepage/QuickActions';
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
                <QuickActions />
                <Features />
                <Courses />
                <GettingStarted />
            </main>
        </Layout>
    );
}
