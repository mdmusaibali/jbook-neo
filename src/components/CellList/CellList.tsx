import { Fragment } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import AddCell from "../AddCell/AddCell";
import CellListItem from "../CellListItem/CellListItem";
import "./CellList.scss";

const CellList = () => {
  const cellsCtx = useTypedSelector((state) => state.cells);
  const cells = cellsCtx.order.map((id) => cellsCtx.data[id]);
  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell prevCellId={cell.id} />
    </Fragment>
  ));
  return (
    <div className="cell-list">
      <div className={cells.length === 0 ? "force-visible" : ""}>
        <AddCell prevCellId={null} last={true} />
      </div>
      {renderedCells}
    </div>
  );
};

export default CellList;
