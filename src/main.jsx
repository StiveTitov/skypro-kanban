import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./Contexts/UserContext.jsx";
import { TaskProvider } from "./Contexts/TaskContent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <TaskProvider>
      <UserProvider>
        <App />
      </UserProvider>
      </TaskProvider>
    </React.StrictMode>
  </BrowserRouter>
);
