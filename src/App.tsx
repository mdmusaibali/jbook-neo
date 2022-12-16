import CodeCell from "./components/CodeCell/CodeCell";
import "./App.scss";
import Header from "./components/Header/Header";
import TextEditor from "./components/TextEditor/TextEditor";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <CodeCell /> */}
      <TextEditor />
    </div>
  );
}

export default App;
