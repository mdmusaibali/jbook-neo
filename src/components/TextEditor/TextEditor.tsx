import { useState, useEffect, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";
import "./TextEditor.scss";

const TextEditor = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState<string | undefined>("# Hello");

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (ref.current && e.target && ref.current.contains(e?.target as Node)) {
        console.log("element clicked on is inside editor");
        return;
      }
      setEditing(false);
    };
    document.addEventListener("click", listener, { capture: true });
    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []);

  const inputChangeHandler = (value: string | undefined) => {
    setInput(value);
  };

  if (editing) {
    return (
      <div ref={ref} data-color-mode="light">
        <MDEditor
          className="text-editor"
          value={input}
          onChange={inputChangeHandler}
        />
      </div>
    );
  }

  return (
    <div onClick={() => setEditing(true)} data-color-mode="light">
      <MDEditor.Markdown className="text-markdown" source={input} />
    </div>
  );
};

export default TextEditor;
