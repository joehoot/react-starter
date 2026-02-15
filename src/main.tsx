import "@fontsource-variable/inter";
import "@fontsource-variable/open-sans";
import "@fontsource-variable/roboto-flex";
import "@fontsource-variable/dm-sans";
import "./reset.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import ErrorBoundary from "./ErrorBoundary";
import App from "./App";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

createRoot(root).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
