import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { NotificationProvider } from "./Hooks/NotificationHook.jsx";
import { GlobalDataProvider } from "./Hooks/GlobalDataContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ToastContainer />
    <StrictMode>
      <NotificationProvider>
        <GlobalDataProvider>
          <App />
        </GlobalDataProvider>
      </NotificationProvider>
    </StrictMode>
  </BrowserRouter>
);
