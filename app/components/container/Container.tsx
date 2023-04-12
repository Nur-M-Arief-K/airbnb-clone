"use client";

import React from "react";

/* styles */
import styles from "./styles";

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className={styles.container}>{ children }</div>
  )
}

export default Container