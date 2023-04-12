"use client";

import React from "react";

/* react component */
import Image from "next/image";

/* styles */
import styles from "./styles";

const Avatar = () => {
  return (
    <Image
      className={styles.avatar}
      src="/images/placeholder.jpg"
      height={30}
      width={30}
      alt="avatar image"
    />
  );
};

export default Avatar;
