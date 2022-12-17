import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { cellsActions } from "../store/slices/cellsSlice";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(cellsActions, dispatch);
};
