import { configureStore } from "@reduxjs/toolkit";
import { cellsActions, cellsReducer } from "./slices/cellsSlice";
import { themeReducer } from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    cells: cellsReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
