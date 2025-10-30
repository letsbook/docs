import React, { PropsWithChildren } from 'react';

import styles from './styles.module.css';

type CardGridProps = PropsWithChildren<{
    className?: string;
}>;

export function CardGrid({ children, className }: CardGridProps) {
    return (
        <div className={[styles.cardGrid, className].filter(Boolean).join(' ')}>
            {children}
        </div>
    );
}

type CardLinkProps = PropsWithChildren<{
    href: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    // Optional: allow overriding target/rel if needed later
    target?: string;
    rel?: string;
}>;

export function CardLink({
    href,
    imageSrc,
    imageAlt,
    title,
    children,
    target,
    rel,
}: CardLinkProps) {
    return (
        <a href={href} className={styles.card} target={target} rel={rel}>
            <div className={styles.cardImage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imageSrc} alt={imageAlt} />
            </div>
            <div className={styles.cardBody}>
                <div className={styles.cardContent}>
                    <h3>{title}</h3>
                    {typeof children === 'string' ? (
                        <p>{children}</p>
                    ) : (
                        children
                    )}
                </div>
            </div>
        </a>
    );
}

export default CardGrid;
