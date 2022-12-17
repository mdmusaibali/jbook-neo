// initial state types
export type CellTypes = "code" | "text";

export interface Cell {
  id: string;
  type: CellTypes;
  content: string;
}

export interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  };
}

// payload types
export type Direction = "up" | "down";
export interface UpdateCellAction {
  payload: {
    id: string;
    content: string;
  };
  type: string;
}

export interface MoveCellAction {
  payload: {
    id: string;
    direction: Direction;
  };
  type: string;
}

export interface DeleteCellAction {
  payload: {
    id: string;
  };
  type: string;
}

export interface InsertCellAfterAction {
  payload: {
    id: string | null;
    type: CellTypes;
  };
  type: string;
}
