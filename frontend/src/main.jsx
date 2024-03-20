import React from "react";
import ReactDOM from "react-dom/client";
import App, { router } from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/index.jsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
