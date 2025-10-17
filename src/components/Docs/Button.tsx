import React from 'react';
import Link from '@docusaurus/Link';
import styles from './Button.module.css';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function Button({ 
  href, 
  children, 
  variant = 'primary' 
}: ButtonProps): JSX.Element {
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
