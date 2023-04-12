"use client";

import React from "react";

/* hooks */
import { useRouter } from "next/navigation";

/* next component */
import Image from "next/image";

/* styles */
import styles from "./styles";

const Logo = () => {
  return (
    <Image
      className={styles.logo}
      alt="airbnb clone logo"
      height={100}
      width={100}
      src="/images/logo.png"
    />
  );
};

export default Logo;
