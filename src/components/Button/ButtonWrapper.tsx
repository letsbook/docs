import clsx from 'clsx';
import { ReactNode } from 'react';

import styles from './ButtonWrapper.module.css';

type ButtonWrapperProps = {
    children: ReactNode;
    align?: 'left' | 'center' | 'right';
};

const ButtonWrapper = ({ children, align }: ButtonWrapperProps) => {
    return (
        <div
            className={clsx(styles.Root, {
                [styles.left]: align === 'left' || !align,
                [styles.center]: align === 'center',
                [styles.right]: align === 'right',
            })}
        >
            {children}
        </div>
    );
};

export default ButtonWrapper;
