import React, { FunctionComponent } from "react";
import "./SearchLabel.scss";

interface SearchLabelProps {
  text?: string;
}
export const SearchLabel: FunctionComponent<SearchLabelProps> = ({ text = 'FIND YOUR MOVIE' }) => {
  return (
    <label className="search-label" htmlFor="search-input">
      {text}
    </label>
  );
};