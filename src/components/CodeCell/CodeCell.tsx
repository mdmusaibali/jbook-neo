import { useEffect, useState } from "react";
import CodeEditor from "./../CodeEditor/CodeEditor";
import { OnChange } from "@monaco-editor/react";
import bundle from "./../../bundler";
import Preview from "./../Preview/Preview";
import Resizable from "../Resizable/Resizable";
import "./CodeCell.scss";
import { Cell } from "../../store/types/cells";
import { useActions } from "../../hooks/useActions";

interface CodeCellProps {
  cell: Cell;
}

const CodeCell = ({ cell }: CodeCellProps) => {
  const [code, setCode] = useState<string | undefined>("");
  const [err, setErr] = useState<string | undefined>("");
  const { updateCell } = useActions();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(cell.content);
      setCode(output?.code);
      setErr(output?.err);
    }, 750);
    return () => {
      clearTimeout(timer);
    };
  }, [cell.content]);

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
          <Preview code={code} err={err} />
        </div>
      </>
    </Resizable>
  );
};

export default CodeCell;
