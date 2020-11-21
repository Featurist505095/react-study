import React, { FunctionComponent } from "react";
import "./SearchButton.scss";

interface ISearchButton {
  size?: string;
  clickAction?: any;
}

export const SearchButton: FunctionComponent<ISearchButton> = ( { size, clickAction } ) => {
  return (
    <button className={'search-button ' + size} type="button" onClick={clickAction}>SEARCH</button>
  );
};