import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";
import ReactDom from "react-dom/client";
const store = configureStore({ reducer: rootReducer, devTools: true });

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);
root.render(
  <Provider store={store}>
    <React.Fragment>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </React.Fragment>
  </Provider>
);
