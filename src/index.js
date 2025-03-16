import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = document.getElementById("root"); // Make sure this matches the div in index.html

if (root) {
  ReactDOM.createRoot(root).render(<App />);
} else {
  console.error("Root element not found!");
}