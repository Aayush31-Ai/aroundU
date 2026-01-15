import { BrowserRouter } from "react-router";
import App from "./App";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';
import "./index.css";
import SmoothScroll from "./components/SmoothScroll";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter>
      {/* <SmoothScroll> */}
        <App />
      {/* </SmoothScroll> */}
    </BrowserRouter>
  </HelmetProvider>
);
