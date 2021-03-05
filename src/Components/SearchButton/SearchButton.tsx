import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import SearchButtonStyle from "./SearchButton.styled";
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
        <SearchButtonStyle className={`search-button ${  size}`} type="button" onClick={clickAction}>
          SEARCH
        </SearchButtonStyle>
      </Link>

    )
  }
  return (
    <Link to={url}>
      <SearchButtonStyle className="search-button" type="button" onClick={clickAction}>SEARCH</SearchButtonStyle>
    </Link>

  );
};

export default SearchButton;