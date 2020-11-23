import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./SearchButton.scss";

interface ISearchButton {
  size?: string;
  clickAction?: any;
}

export const SearchButton: FunctionComponent<ISearchButton> = ( { size, clickAction } ) => {
  if (size === 'small') {
    return (
      <Link to="/search">
        <button className={'search-button ' + size} type="button" onClick={clickAction}>SEARCH</button>
      </Link>

    )
  }
  return (
    <button className={'search-button'} type="button" onClick={clickAction}>SEARCH</button>
  );
};