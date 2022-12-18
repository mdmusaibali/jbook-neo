import { useEffect, useState } from "react";
import CodeEditor from "./../CodeEditor/CodeEditor";
import { OnChange } from "@monaco-editor/react";
import Preview from "./../Preview/Preview";
import Resizable from "../Resizable/Resizable";
import "./CodeCell.scss";
import { Cell } from "../../store/types/cells";
import { useCellsActions } from "../../hooks/useActions/useCellsActions";
import { createBundle } from "../../store/thunks/bundlesThunk";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import Spinner from "../Spinner/Spinner";

interface CodeCellProps {
  cell: Cell;
}

const CodeCell = ({ cell }: CodeCellProps) => {
  const { updateCell } = useCellsActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (!bundle) {
      dispatch(createBundle({ cellId: cell.id, input: cell.content }));
      return;
    }
    const timer = setTimeout(async () => {
      dispatch(createBundle({ cellId: cell.id, input: cell.content }));
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content, cell.id]);

  const changeHandler: OnChange = (value) => {
    if (value) updateCell({ id: cell.id, content: value });
  };

  return (
    <Resizable direction="vertical" className="code-cell">
      <>
        <div
          style={{
            height: "100%",
            display: "flex",
            backgroundColor: "#fff",
          }}
        >
          <Resizable direction="horizontal">
            <CodeEditor
              value={cell.content}
              onChange={changeHandler}
              id={cell.id}
            />
          </Resizable>
          {!bundle || bundle.loading ? (
            <div className="progress-cover">
              <Spinner />
            </div>
          ) : (
            <Preview code={bundle.code} err={bundle.err} />
          )}
        </div>
      </>
    </Resizable>
  );
};

export default CodeCell;
