"use client";

import React from "react";

/* react compoenent */
import { BiSearch } from "react-icons/bi";

/* styles */
import styles from "./styles";

const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.wrapper}>
        <div className={styles.anywhere}>Anywhere</div>
        <div className={styles.anyweek}>Anyweek</div>
        <div className={styles.addGuest}>
            <div className={styles.addGuestText}>Add guest</div>
            <div className={styles.searchIcon}>
                <BiSearch size={18} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
