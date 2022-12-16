import Editor, { OnChange, OnMount } from "@monaco-editor/react";
import React from "react";
import prettier from "prettier";
import parser from "prettier/parser-babel";
import styles from "./CodeEditor.module.scss";

interface CodeEditorProps {
  value: string | undefined;
  onChange: OnChange;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const CodeEditor = ({ value, onChange, setValue }: CodeEditorProps) => {
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
    setValue(formattedInput);
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
        defaultValue={`import React from "react";
import ReactDOM from "react-dom";
        
const App = () => {
    return <h1>Hello World</h1>;
};
        
ReactDOM.render(<App />, document.querySelector("#root"));
        `}
        value={value}
        onChange={onChange}
        defaultLanguage="javascript"
        theme="vs-dark"
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
