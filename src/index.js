import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import AlartProvider from "./component/Hooks/AleartProvider";
import { BrowserRouter as Router } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AlartProvider>
      <Router>
        <App />
      </Router>
    </AlartProvider>
  </React.StrictMode>
);
