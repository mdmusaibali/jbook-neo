import Header from "./components/Header/Header";
import CellList from "./components/CellList/CellList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { AiFillNotification } from "react-icons/ai";
import Footer from "./components/Footer/Footer";

function App() {
  const themeCtx = useTypedSelector((state) => state.theme);
  return (
    <div className="App">
      <Header />
      <div>
        <CellList />
      </div>
      <Footer />
      <ToastContainer
        theme={themeCtx.theme}
        // autoClose={false}
        icon={<AiFillNotification size={18} />}
        toastStyle={{
          boxShadow: "6px 6px 0 #000",
          border: "3px solid black",
          backgroundColor: themeCtx.theme === "dark" ? "#00ADB5" : "#f2de3a",
          color: "#000",
          fontWeight: "600",
          letterSpacing: "0.6px",
        }}
        progressStyle={{
          backgroundColor: themeCtx.theme === "dark" ? "#00ADB5" : "#f2de3a",
        }}
      />
    </div>
  );
}

export default App;
