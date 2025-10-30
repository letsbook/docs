import { CardGrid, CardLink } from '@site/src/components/CardGrid';
import type { ReactNode } from 'react';

import boostRevenue from '../../graphics/boost_revenue.jpg';
import dayToDay from '../../graphics/day-to-day.png';
import settings from '../../graphics/settings.jpg';

import styles from './styles.module.css';

export default function QuickActions(): ReactNode {
    return (
        <section className={styles.Root}>
            <div className="container">
                <h2 className={styles.SectionTitle}>Quick start</h2>
                <p className={styles.SectionSubtitle}>
                    Get up and running quickly
                </p>

                <CardGrid>
                    <CardLink
                        href="/guides/day-to-day"
                        imageSrc={dayToDay}
                        imageAlt="Day to day operations"
                        title="Run your daily operations"
                    >
                        Essential tools for managing your daily rental
                        operations
                    </CardLink>

                    <CardLink
                        href="/guides/boost-revenue"
                        imageSrc={boostRevenue}
                        imageAlt="Boost revenue"
                        title="Boost bookings and revenue"
                    >
                        Strategies to increase bookings and maximize revenue
                        from your fleet
                    </CardLink>

                    <CardLink
                        href="/guides/settings"
                        imageSrc={settings}
                        imageAlt="Settings"
                        title="Configure your settings"
                    >
                        Set up pricing, schedules, rental methods, and
                        integrations
                    </CardLink>
                </CardGrid>
            </div>
        </section>
    );
}
