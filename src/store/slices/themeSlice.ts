import { createSlice } from "@reduxjs/toolkit";
import { SetThemeAction } from "../types/theme";
interface Theme {
  theme: "light" | "dark";
}
const initialState: Theme = {
  theme: "light",
};

const themeSlice = createSlice({
  initialState,
  name: "theme",
  reducers: {
    setTheme(state, action: SetThemeAction) {
      const theme = action.payload.theme;
      state.theme = theme;
      localStorage.setItem("theme", theme);
      if (theme === "light") {
        document.documentElement.style.setProperty(
          "--color-primary",
          "#50ffaf"
        );
        document.documentElement.style.setProperty(
          "--color-secondary",
          "#f2de3a"
        );
        document.documentElement.style.setProperty(
          "--color-tertiary",
          "#9C7BFF"
        );
        document.documentElement.style.setProperty("--color-text", "#000");
      } else {
        document.documentElement.style.setProperty(
          "--color-primary",
          "#222831"
        );
        document.documentElement.style.setProperty(
          "--color-secondary",
          "#00ADB5"
        );
        document.documentElement.style.setProperty(
          "--color-tertiary",
          "#393E46"
        );
        document.documentElement.style.setProperty("--color-text", "#eeeeee");
      }
    },
  },
});

export const themeActions = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
