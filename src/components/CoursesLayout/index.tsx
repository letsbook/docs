import React from 'react';
import Layout from '@theme/Layout';
import './courses-theme.css';

export default function CoursesLayout({ children, title, description }) {
    return (
        <Layout title={title} description={description}>
            <div className="courses-theme-wrapper">
                {children}
            </div>
        </Layout>
    );
}
