import React from "react";
import Button from "../Button/Button.jsx";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo.jsx";
import Search from "../Search/Search.jsx";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <Logo />
      <Search />
      <Button children="Give Feedback" />
    </div>
  );
};

export default Navbar;
