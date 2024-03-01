import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { MyContextProvider } from "./Context/myContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MyContextProvider>
    <BrowserRouter basename="SweeftDigital-Task"> 
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </MyContextProvider>
);
