import ReactDOM from "react-dom/client";
import App from "./App";
import { init } from "./helper/init";
import "./main.scss";

init();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
