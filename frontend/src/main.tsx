import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import router from "./AppRoutes";
import "./global.css";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
