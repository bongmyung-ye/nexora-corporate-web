import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n/index";
import "./index.css";
import App from "./App";
import "./styles/hero.css";
import "./styles/sustainability.css";
import "./styles/business.css";
import "./styles/media.css";
import "./styles/investment.css";
import "./styles/investment-chart-waveform.css";
import "./styles/investment-responsive-navigation.css";
import "./styles/sns-media.css";
import "./styles/footer.css";
import "./styles/footer-network-map.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);