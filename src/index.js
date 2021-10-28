import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthStateProvider } from "./lib/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthStateProvider>
      <App />
    </AuthStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
