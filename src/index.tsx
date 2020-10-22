import React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App/App";
import { BrowserRouter }  from 'react-router-dom';
import "./index.scss";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);