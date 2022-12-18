import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { cellsActions } from "../../store/slices/cellsSlice";

export const useCellsActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => {
    return bindActionCreators(cellsActions, dispatch);
  }, [dispatch]);
};
