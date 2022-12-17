import { useActions } from "../../hooks/useActions";
import { Direction } from "../../store/types/cells";
import "./ActionBar.scss";
import { FaArrowUp, FaArrowDown, FaTrash } from "react-icons/fa";

interface ActionBarProps {
  id: string;
}
const ActionBar = ({ id }: ActionBarProps) => {
  const { moveCell, deleteCell } = useActions();

  const moveHandler = (direction: Direction) => {
    moveCell({ id, direction });
  };

  const deleteHandler = () => {
    deleteCell({ id });
  };
  return (
    <div className="action-bar">
      <button onClick={moveHandler.bind(null, "up")} className="button--icon">
        <FaArrowUp size={14} />
      </button>
      <button onClick={moveHandler.bind(null, "down")} className="button--icon">
        <FaArrowDown size={14} />
      </button>
      <button onClick={deleteHandler} className="button--icon">
        <FaTrash size={14} />
      </button>
    </div>
  );
};

export default ActionBar;
