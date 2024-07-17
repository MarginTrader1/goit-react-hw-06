import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";

import { BrowserRouter } from "react-router-dom";

import "modern-normalize"; // импорт библиотеки модерн нормалайз
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </React.StrictMode>
);
