import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import router from "./AppRoutes";
import "./global.css";
import { RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-gpz7zhbbu5ckmxxh.us.auth0.com"
      clientId="th1SJEm6HTeyIef6pUUQQHiQPQV6j0yd"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
    {/* <App /> */}
  </React.StrictMode>
);
