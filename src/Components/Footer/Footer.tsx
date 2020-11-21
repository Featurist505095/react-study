import React, { FunctionComponent } from "react";
import { CompanyName } from "../CompanyName";
import "./Footer.scss";

export const Footer: FunctionComponent = () => {
  return (
    <footer>
      <CompanyName />
    </footer>
  );
};