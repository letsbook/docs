import Link from '@docusaurus/Link';
import ButtonWrapper from '@site/src/components/Button/ButtonWrapper';
import isExternalHref from '@site/src/components/Button/helpers/isExternalHref';
import extractTextContent from '@site/src/helpers/extractTextContent';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
    href: string;
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'subtle';
    align?: 'left' | 'center' | 'right';
}

const Button = ({
    href,
    children,
    variant = 'primary',
    align,
}: ButtonProps) => {
    const external = isExternalHref(href);

    const button = (
        <Link
            to={href}
            className={clsx(styles.Root, {
                [styles.primary]: variant === 'primary',
                [styles.secondary]: variant === 'secondary',
            })}
            {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
        >
            {extractTextContent(children)}
        </Link>
    );

    if (typeof align === 'undefined') {
        return button;
    }

    return <ButtonWrapper align={align}>{button}</ButtonWrapper>;
};

export default Button;
