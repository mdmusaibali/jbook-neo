import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./main.scss";
import { store } from "./store/store";
import { init } from "./utils/helper";

init();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
