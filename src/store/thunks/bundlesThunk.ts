import { createAsyncThunk } from "@reduxjs/toolkit";
import bundle from "../../bundler";

interface CreateBundlePayload {
  cellId: string;
  input: string;
}

export const createBundle = createAsyncThunk(
  "createBundle",
  async (payload: CreateBundlePayload) => {
    const { input } = payload;

    const result = await bundle(input);

    return result;
  }
);
