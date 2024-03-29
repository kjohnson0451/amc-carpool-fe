import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

// Use ReactDOM to render my root component onto the DOM
// Create a root using ReactDOM.createRoot, targeting the element with id "root" in index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrap my root component with React.StrictMode for additional checks in development mode
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
