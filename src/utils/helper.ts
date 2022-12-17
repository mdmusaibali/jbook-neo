export const randomId = () => {
  return Math.random().toString(36).substring(2, 7);
};

export const init = () => {
  // disabling Ctrl+S
  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (
      e.key === "s" &&
      (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
    ) {
      e.preventDefault();
    }
  });
};

type Theme = "light" | "dark";
export const checkThemeInLocalStorage = (): Theme => {
  const theme = localStorage.getItem("theme");
  if (!theme) return "light";
  if (theme === "light") {
    return "light";
  } else if (theme === "dark") {
    return "dark";
  }
  return "light";
};
