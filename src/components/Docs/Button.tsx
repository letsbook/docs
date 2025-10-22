import React from 'react';
import Link from '@docusaurus/Link';
import styles from './Button.module.css';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'subtle';
  disabled?: boolean;
}

export default function Button({ 
  href, 
  children, 
  variant = 'primary',
  disabled = false 
}: ButtonProps): JSX.Element {
  if (disabled) {
    return (
      <div className={styles.ButtonWrapper}>
        <span className={`${styles.Button} ${styles[variant]}`}>
          {children}
        </span>
      </div>
    );
  }

  return (
    <div className={styles.ButtonWrapper}>
      <Link 
        to={href} 
        className={`${styles.Button} ${styles[variant]}`}
      >
        {children}
      </Link>
    </div>
  );
}
