"use client";

/* hooks */
import React, { useCallback, useState } from "react";

/* react components */
import { AiOutlineMenu } from "react-icons/ai";

/* other components */
import Avatar from "../../avatar/Avatar";
import MenuItem from "../menuitem/MenuItem";

/* styles */
import styles from "./styles";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className={styles.userMenu}>
      <div className={styles.wrapper}>
        <div className={styles.text} onClick={() => {}}>
          Airbnb your home
        </div>
        <div className={styles.profile} onClick={toggleOpen}>
          <AiOutlineMenu />
          <div className={styles.avatarContainer}>
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={styles.profileMenuContainer}>
          <div className={styles.profileMenu}>
            <>
              <MenuItem onClick={() => {}} label="Login"/>
              <MenuItem onClick={() => {}} label="Sign up"/>
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
