import Editor, { OnChange, OnMount } from "@monaco-editor/react";
import React from "react";
import prettier from "prettier";
import parser from "prettier/parser-babel";
import styles from "./CodeEditor.module.scss";
import { useCellsActions } from "../../hooks/useActions/useCellsActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { defaultHTMLForEditor } from "../../constants/data";

interface CodeEditorProps {
  value: string | undefined;
  onChange: OnChange;
  id: string;
}

const CodeEditor = ({ value, onChange, id }: CodeEditorProps) => {
  const { updateCell } = useCellsActions();
  const themeCtx = useTypedSelector((state) => state.theme);

  const formatHandler = () => {
    let formattedInput: string = "";
    if (value)
      formattedInput = prettier
        .format(value, {
          parser: "babel",
          plugins: [parser],
          useTabs: false,
          semi: true,
        })
        .replace(/\n$/, "");

    updateCell({ id, content: formattedInput });
  };

  const onMount: OnMount = (monacoEditor) => {};

  return (
    <div className={styles["code-editor-container"]}>
      <button
        className={`${styles["code-editor-container--format-button"]} button--primary `}
        onClick={formatHandler}
      >
        Format
      </button>
      <Editor
        className={styles["code-editor-container--editor"]}
        defaultValue={defaultHTMLForEditor}
        value={value}
        onChange={onChange}
        defaultLanguage="javascript"
        theme={themeCtx.theme === "dark" ? "vs-dark" : "light"}
        onMount={onMount}
        options={{
          formatOnType: true,
          formatOnPaste: true,
          wordWrap: "on",
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default CodeEditor;
