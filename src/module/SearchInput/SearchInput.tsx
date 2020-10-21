import React, { FunctionComponent } from "react";
import "./SearchInput.scss";

export const SearchInput: FunctionComponent = () => {
  return (
    <input id="search-input" className="search-input"  autoComplete="off" />
  );
};