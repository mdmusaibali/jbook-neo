import { createSlice } from "@reduxjs/toolkit";
import { createBundle } from "../thunks/bundlesThunk";
import { BundleState } from "../types/bundle";

const initialState: BundleState = {};

const bundlesSlice = createSlice({
  initialState,
  name: "bundles",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createBundle.pending, (state, action) => {
      const { cellId } = action.meta.arg;
      state[cellId] = {
        loading: true,
        code: "",
        err: "",
      };
    });
    builder.addCase(createBundle.fulfilled, (state, action) => {
      const { cellId } = action.meta.arg;
      const result = action.payload;
      if (result)
        state[cellId] = {
          loading: false,
          code: result.code,
          err: result.err,
        };
    });
    builder.addCase(createBundle.rejected, (state, action) => {
      console.log("REJECTED");
    });
  },
});

export const bundlesActions = bundlesSlice.actions;
export const bundlesReducer = bundlesSlice.reducer;
