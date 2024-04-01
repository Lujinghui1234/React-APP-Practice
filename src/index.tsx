import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = document.getElementById("root") as HTMLElement;
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);

reportWebVitals();
