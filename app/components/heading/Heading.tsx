import React from 'react'

/* styles */
import styles from './styles';

interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
    title, subtitle, center = false
}) => {
    
  return (
    <div className={styles.heading(center)}>
        <div className={styles.title}>
            {title}
        </div>
        <div className={styles.subtitle}>
            {subtitle}
        </div>
    </div>
  )
}

export default Heading