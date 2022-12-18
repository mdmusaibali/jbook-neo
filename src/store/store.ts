import { configureStore } from "@reduxjs/toolkit";
import { bundlesReducer } from "./slices/bundlesSlice";
import { cellsReducer } from "./slices/cellsSlice";
import { themeReducer } from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    cells: cellsReducer,
    theme: themeReducer,
    bundles: bundlesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
