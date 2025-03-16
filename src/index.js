import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
import "./assets/scss/bootstrap.scss";
// import "./assets/lib/animate/animate.min.css";
// import "./assets/lib/animate/animate.css";
// import "./assets/lib/easing/easing.min.js";
// import "./assets/lib/easing/easing.js";
// import "./assets/lib/owlcarousel/owl.carousel.min.js";
// import "./assets/lib/owlcarousel/owl.carousel.js";
const root = document.getElementById("root"); // Make sure this matches the div in index.html

if (root) {
  ReactDOM.createRoot(root).render(<App />);
} else {
  console.error("Root element not found!");
}