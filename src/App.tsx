import "./App.scss";
import Header from "./components/Header/Header";
import CellList from "./components/CellList/CellList";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <CellList />
      </div>
    </div>
  );
}

export default App;
