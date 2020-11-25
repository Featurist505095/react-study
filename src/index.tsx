import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter }  from 'react-router-dom';
import { Provider } from "react-redux";
import App from "./App/App";
import store from "./store/store";
import "./index.scss";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
);