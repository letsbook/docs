import type { Props } from '@theme/BlogLayout';
import BlogSidebar from '@theme/BlogSidebar';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import styles from './BlogLayout.module.css';

export default function BlogLayout(props: Props): ReactNode {
    const { sidebar, toc, children, ...layoutProps } = props;
    const hasSidebar = sidebar && sidebar.items.length > 0;

    return (
        <Layout {...layoutProps}>
            <div className={styles.Blog}>
                <BlogSidebar sidebar={sidebar} />

                <main className="container">
                    <div
                        className={clsx('col', styles.Content, {
                            'col--7': hasSidebar,
                            'col--9 col--offset-1': !hasSidebar,
                        })}
                    >
                        {children}
                    </div>

                    {toc && <div className="col col--2">{toc}</div>}
                </main>
            </div>
        </Layout>
    );
}
