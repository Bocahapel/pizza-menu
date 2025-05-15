import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
}
//latest render react since version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
