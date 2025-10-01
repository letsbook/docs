import Layout from '@theme/Layout';
import type { ReactNode } from 'react';

import styles from './course.module.css';

export default function FundamentalsCourse(): ReactNode {
    return (
        <Layout
            title="Let's Book Fundamentals"
            description="Learn all the basic functions of Let's Book"
        >
            <div className={styles.CourseContainer}>
                <div className="container">
                    <div className={styles.VideoWrapper}>
                        <div className={styles.VideoPlaceholder}>
                            <p>Video player will be embedded here</p>
                            <p className={styles.VideoNote}>
                                Add your YouTube/Vimeo embed code
                            </p>
                        </div>
                    </div>

                    <div className={styles.CourseContent}>
                        <h1>Let's Book Fundamentals</h1>

                        <div className={styles.CourseMeta}>
                            <span className={styles.CourseLevel}>Beginner</span>
                            <span className={styles.CourseDuration}>
                                2h 15m
                            </span>
                        </div>

                        <div className={styles.CourseDescription}>
                            <h2>What you'll learn</h2>
                            <p>
                                In this comprehensive course, you'll master the
                                core functionality of Let's Book. We'll guide
                                you through everything from creating your first
                                booking to configuring payment systems and
                                managing your daily operations.
                            </p>

                            <h3>Course topics</h3>
                            <ul>
                                <li>
                                    Setting up your account and basic
                                    configuration
                                </li>
                                <li>Adding boats and managing your fleet</li>
                                <li>Creating and managing bookings</li>
                                <li>Configuring pricing and availability</li>
                                <li>
                                    Setting up payment providers (Stripe/Mollie)
                                </li>
                                <li>Using the planning overview effectively</li>
                                <li>Managing customer communications</li>
                                <li>Best practices for daily operations</li>
                            </ul>

                            <h3>Who is this course for?</h3>
                            <p>
                                This course is perfect for boat rental operators
                                who are new to Let's Book or want to ensure
                                they're using the platform effectively. No prior
                                experience with booking systems is required.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
