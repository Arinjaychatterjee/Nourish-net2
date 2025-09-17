import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Context_porvider } from "./Context/ContextProvider.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Context_porvider>
        <App />
      </Context_porvider>
    </AuthProvider>
  </StrictMode>
);
