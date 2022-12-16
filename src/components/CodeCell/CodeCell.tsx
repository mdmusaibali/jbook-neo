import { useEffect, useState } from "react";
import CodeEditor from "./../CodeEditor/CodeEditor";
import { OnChange } from "@monaco-editor/react";
import bundle from "./../../bundler";
import Preview from "./../Preview/Preview";
import Resizable from "../Resizable/Resizable";
import "./CodeCell.scss";

function CodeCell() {
  const [code, setCode] = useState<string | undefined>("");
  const [err, setErr] = useState<string | undefined>("");
  const [input, setInput] = useState<string | undefined>("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output?.code);
      setErr(output?.err);
    }, 750);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  const changeHandler: OnChange = (value) => {
    setInput(value);
  };

  return (
    <Resizable direction="vertical" className="code-cell">
      <>
        {/* <button onClick={onClick}>asd</button> */}
        <div
          style={{
            height: "100%",
            display: "flex",
            backgroundColor: "#fff",
          }}
        >
          <Resizable direction="horizontal">
            <CodeEditor
              value={input}
              onChange={changeHandler}
              setValue={setInput}
            />
          </Resizable>
          <Preview code={code} err={err} />
        </div>
      </>
    </Resizable>
  );
}

export default CodeCell;
