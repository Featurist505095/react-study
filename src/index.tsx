import React from "react";
import * as ReactDOM from "react-dom";
import { Comp } from "./Comp";

const rootElement = document.getElementById("root");

const counter: {
  first: number;
} = {
  first: 1
};

ReactDOM.render(
  <React.StrictMode>
    <Comp text="Function Component" count={counter.first} />
    <Comp text="React" />
  </React.StrictMode>,
  rootElement
);
