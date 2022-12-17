import { useState, useEffect, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";
import "./TextEditor.scss";
import { Cell } from "../../store/types/cells";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface TextEditorProps {
  cell: Cell;
}

const TextEditor = ({ cell }: TextEditorProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState(false);
  const themeCtx = useTypedSelector((state) => state.theme);
  const { updateCell } = useActions();

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
    updateCell({ id: cell.id, content: value ? value : "" });
  };

  if (editing) {
    return (
      <div ref={ref} data-color-mode={themeCtx.theme}>
        <MDEditor
          className="text-editor"
          value={cell.content}
          onChange={inputChangeHandler}
        />
      </div>
    );
  }

  return (
    <div onClick={() => setEditing(true)} data-color-mode={themeCtx.theme}>
      <MDEditor.Markdown
        className="text-markdown"
        source={cell.content || "&nbsp;Click to edit"}
      />
    </div>
  );
};

export default TextEditor;
