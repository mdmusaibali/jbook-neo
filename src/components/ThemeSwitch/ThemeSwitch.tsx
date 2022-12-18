import { useEffect } from "react";
import { FaMoon, FaRegSun } from "react-icons/fa";
import { checkThemeInLocalStorage } from "../../utils/helper";
import { useThemeActions } from "../../hooks/useActions/useThemeActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const ThemeSwitch = () => {
  const { setTheme } = useThemeActions();
  const themeCtx = useTypedSelector((state) => state.theme);

  const themeChange = () => {
    if (themeCtx.theme === "dark") {
      setTheme({ theme: "light" });
    } else {
      setTheme({ theme: "dark" });
    }
  };

  useEffect(() => {
    const theme = checkThemeInLocalStorage();
    setTheme({ theme });
  }, []);

  return (
    <button
      className="button--icon"
      onClick={themeChange}
      style={{ marginLeft: "auto", marginRight: "1rem" }}
    >
      {themeCtx.theme === "light" && <FaMoon size={14} />}
      {themeCtx.theme === "dark" && <FaRegSun size={14} />}
    </button>
  );
};

export default ThemeSwitch;
