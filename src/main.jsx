import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import { LoadingContextProvider } from "./context/LoadingContext";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoadingContextProvider>
    <AuthContextProvider>
      <ChatContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChatContextProvider>
    </AuthContextProvider>
  </LoadingContextProvider>
);
