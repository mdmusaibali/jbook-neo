import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <h1 className={styles["heading"]}>JSBOOK NEO</h1>
      <a
        href="https://www.google.com"
        target={"_blank"}
        className={styles["install"]}
      >
        npm install
      </a>
    </div>
  );
};

export default Header;
