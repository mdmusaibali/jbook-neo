export interface SetThemeAction {
  payload: {
    theme: "dark" | "light";
  };
  type: string;
}
