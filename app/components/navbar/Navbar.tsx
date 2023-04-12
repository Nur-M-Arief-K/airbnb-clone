"use client";

/* sub components */
import Logo from "./logo/Logo";
import Search from "./search/Search";
import UserMenu from "./usermenu/UserMenu";

/* other components */
import Container from "../container/Container";

/* styles */
import styles from "./styles";

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <Container>
        <div className={styles.menu}>
          <Logo />
          <Search />
          <UserMenu />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
