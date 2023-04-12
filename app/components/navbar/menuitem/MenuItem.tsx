"use client";

/* hooks */
import React from 'react'

/* styles */
import styles from './styles';

interface MenuItemProps {
    onClick: () => void;
    label: string
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div className={styles.menuItem} onClick={onClick}>
        {label}
    </div>
  )
}

export default MenuItem