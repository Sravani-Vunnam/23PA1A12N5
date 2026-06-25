import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Log } from "logging-middleware";

const token = import.meta.env.VITE_LOG_TOKEN;

Log(
  token,
  "frontend",
  "info",
  "page",
  "Application started"
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);