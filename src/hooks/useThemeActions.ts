import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { themeActions } from "../store/slices/themeSlice";

export const useThemeActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(themeActions, dispatch);
};
