import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Login from "./login.jsx";
import Menubar from "./Menubar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Menubar></Menubar>
      <App />
      <Login></Login>
    </AuthProvider>
  </React.StrictMode>
);
