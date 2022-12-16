export const init = () => {
  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (
      e.key === "s" &&
      (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
    ) {
      e.preventDefault();
    }
  });
};
