import { BrowserRouter } from "react-router";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";
import SmoothScroll from "./components/SmoothScroll";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SmoothScroll>
      <App />
    </SmoothScroll>
  </BrowserRouter>
);
