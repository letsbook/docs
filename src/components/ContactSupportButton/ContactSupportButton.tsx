import Button from '@site/src/components/Button/Button';
import React, { ReactNode } from 'react';

interface ContactSupportButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'subtle';
    align?: 'left' | 'center' | 'right';
}

const ContactSupportButton = ({
    children,
    variant = 'primary',
    align,
}: ContactSupportButtonProps) => {
    const openIntercom = (e: React.MouseEvent): void => {
        e.preventDefault();
        if (typeof window !== 'undefined' && (window as any).Intercom) {
            (window as any).Intercom('show');
        }
    };

    return (
        <Button href="#" variant={variant} align={align} onClick={openIntercom}>
            {children}
        </Button>
    );
};

export default ContactSupportButton;
