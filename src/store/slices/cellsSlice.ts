import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { defaultHTMLForEditor } from "../../constants/data";
import { randomId } from "../../utils/helper";
import {
  Cell,
  CellsState,
  DeleteCellAction,
  InsertCellAfterAction,
  MoveCellAction,
  SetCellStateAction,
  UpdateCellAction,
} from "../types/cells";

const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

const cellsSlice = createSlice({
  initialState,
  name: "cells",
  reducers: {
    updateCell(state, action: UpdateCellAction) {
      const { content, id } = action.payload;
      state.data[id].content = content;
    },
    deleteCell(state, action: DeleteCellAction) {
      delete state.data[action.payload.id];
      state.order = state.order.filter((id) => id !== action.payload.id);
    },
    insertCell(state, action: InsertCellAfterAction) {
      const cell: Cell = {
        content: "",
        type: action.payload.type,
        id: randomId(),
      };

      state.data[cell.id] = cell;

      const index = state.order.findIndex((id) => id === action.payload.id);
      if (index < 0) {
        state.order.unshift(cell.id);
      } else {
        state.order.splice(index + 1, 0, cell.id);
      }
    },
    moveCell(state, action: MoveCellAction) {
      const { direction, id } = action.payload;
      const index = state.order.findIndex((idOfCell) => idOfCell === id);
      const targetIndex = direction === "up" ? index - 1 : index + 1;

      if (targetIndex < 0 || targetIndex > state.order.length - 1) {
        return;
      }
      state.order[index] = state.order[targetIndex];
      state.order[targetIndex] = id;
    },
    setCellState(state, action: SetCellStateAction) {
      const newState = action.payload.cells;
      state.data = newState.data;
      state.error = newState.error;
      state.order = newState.order;
      toast.success("jsbook-neo added");
    },
  },
});

export const cellsActions = cellsSlice.actions;
export const cellsReducer = cellsSlice.reducer;
