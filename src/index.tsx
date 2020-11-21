import React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App/App";
import { BrowserRouter }  from 'react-router-dom';
import { store } from "./store/store";
import "./index.scss";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
);