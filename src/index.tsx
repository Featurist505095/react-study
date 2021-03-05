import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter }  from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App/App";
import store, { persistor } from "./store/store";
import "./index.scss";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  rootElement
);