import { useActions } from "../../hooks/useActions";
import { FaPlus } from "react-icons/fa";

import "./AddCell.scss";

interface AddCellProps {
  prevCellId: string | null;
  last?: boolean;
}

const AddCell = ({ prevCellId, last }: AddCellProps) => {
  const { insertCell } = useActions();

  const insertHandler = (id: string | null, type: "text" | "code") => {
    insertCell({ id, type });
  };

  return (
    <div className="add-cell">
      <div className="horizontal-line"></div>
      <button
        className="button--primary"
        onClick={insertHandler.bind(null, prevCellId, "code")}
      >
        <FaPlus />
        Code
      </button>
      <button
        className="button--primary"
        onClick={insertHandler.bind(null, prevCellId, "text")}
      >
        <FaPlus />
        Text
      </button>
      <div className="horizontal-line"></div>
    </div>
  );
};

export default AddCell;
