import FileButtons from "../FileButtons/FileButtons";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <h1 className={styles["heading"]}>JSBOOK NEO</h1>
      <ThemeSwitch />
      <FileButtons type="download" />
      <FileButtons type="upload" />
      {/* <a
        href="https://www.google.com"
        target={"_blank"}
        className={styles["install"]}
      >
        npm install
      </a> */}
    </div>
  );
};

export default Header;
