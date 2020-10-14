import React from "react";
import * as ReactDOM from "react-dom";
import { Comp } from "./module/Comp/Comp";
import { CompNew } from "./module/CompNew/CompNew";

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
    <Comp text="React" />
    <CompNew text="Function Component" count={counter.first} />
    <CompNew text="Function Component" count={counter.first} />
  </React.StrictMode>,
  rootElement
);
