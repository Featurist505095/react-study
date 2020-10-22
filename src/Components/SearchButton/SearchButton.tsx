import React, { FunctionComponent } from "react";
import "./SearchButton.scss";

interface ISearchButton {
  size?: string;
}

export const SearchButton: FunctionComponent<ISearchButton> = ( { size } ) => {
  return (
    <button className={'search-button ' + size}>SEARCH</button>
  );
};