import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/authContext.jsx";
import EventsContextProvider from "./context/eventsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <EventsContextProvider>
          <App />
        </EventsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
