import type { Props } from '@theme/BlogLayout';
import BlogSidebar from '@theme/BlogSidebar';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import styles from './BlogLayout.module.css';

export default function BlogLayout(props: Props): ReactNode {
    const { sidebar, toc, children, ...layoutProps } = props;

    return (
        <Layout {...layoutProps}>
            <div className={styles.Blog}>
                <BlogSidebar sidebar={sidebar} />

                <main className="container">
                    <div className="row">
                        <div className={clsx(styles.Content, 'col', 'col--9')}>
                            {!toc && <h1>Released versions</h1>}

                            {children}
                        </div>

                        {toc && <div className="col col--3">{toc}</div>}
                    </div>
                </main>
            </div>
        </Layout>
    );
}
