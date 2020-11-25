import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./SearchButton.scss";

interface ISearchButton {
  size?: string;
  clickAction?: any;
  sortBy?: string;
  searchBy?: string;
  searchInput?: string;
}

const SearchButton: FunctionComponent<ISearchButton> = ( { size, clickAction, sortBy, searchBy, searchInput } ) => {
  const url = `/search/?text=${searchInput}&sort=${sortBy}&search=${searchBy}`;
  if (size?.includes('small')) {
    return (
      <Link to="/search">
        <button className={`search-button ${  size}`} type="button" onClick={clickAction}>SEARCH</button>
      </Link>

    )
  }
  return (
    <Link to={url}>
      <button className="search-button" type="button" onClick={clickAction}>SEARCH</button>
    </Link>

  );
};

export default SearchButton;