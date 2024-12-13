import React from "react";
import ReactDOM from "react-dom/client"; // Импорт из новой версии React 18+
import "./App.css";
import App from "./App.js";

// Создание корневого элемента
const root = ReactDOM.createRoot(document.getElementById("root"));

// Рендеринг приложения
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);