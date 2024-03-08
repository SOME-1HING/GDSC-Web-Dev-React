import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import GoogleFonts from "react-google-fonts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" />
    <App />
  </React.StrictMode>
);
