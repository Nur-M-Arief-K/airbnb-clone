"use client";

import React from "react";
import { IconType } from "react-icons/lib";

/* styles */
import styles from "./styles";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline = false,
  small = false,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles.button(outline, small)}
    >
      {Icon && <Icon size={24} className={styles.icon} />} {label}
    </button>
  );
};

export default Button;
