// initial state types
export interface BundleState {
  [key: string]:
    | {
        loading: boolean;
        code: string;
        err: string;
      }
    | undefined;
}

// action types
export interface BundleStartAction {
  type: string;
  payload: {
    cellId: string;
  };
}

export interface BundleCompleteAction {
  type: string;
  payload: {
    cellId: string;
    bundle: {
      code: string;
      err: string;
    };
  };
}
