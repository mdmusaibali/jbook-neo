import { ReactNode } from "react";
import { Cell } from "../../store/types/cells";
import ActionBar from "../ActionBar/ActionBar";
import CodeCell from "../CodeCell/CodeCell";
import TextEditor from "../TextEditor/TextEditor";
import "./CellListItem.scss";

interface CellListItemProps {
  cell: Cell;
}
const CellListItem = ({ cell }: CellListItemProps) => {
  let child: ReactNode;
  if (cell.type === "code") {
    child = <CodeCell cell={cell} />;
  } else {
    child = <TextEditor cell={cell} />;
  }
  return (
    <div className="cell-list-item">
      <div className="action-bar-wrapper">
        <ActionBar id={cell.id} />
      </div>
      {child}
    </div>
  );
};

export default CellListItem;
