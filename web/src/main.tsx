import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n/index";
import "./index.css";
import App from "./App";
import "./styles/hero.css";
import "./styles/sustainability.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);