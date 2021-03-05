import React, { FunctionComponent } from "react";
import { SearchType, SortType } from "../../pages/home/StateType";
import SearchButton from "../SearchButton";
import SearchFormInput from "../SearchFormInput";
import SearchOptionBlock from "../SearchOptionBlock";
import "./SearchForm.scss";

interface ISearchFormView {
    sortBy: SortType,
    searchBy: SearchType,
    searchInput: string,
    changeAction: any,
    clickAction: any
}

const SearchFormView: FunctionComponent<ISearchFormView> = 
  ({ changeAction, clickAction, sortBy, searchBy, searchInput }) => {
  return (
    <form className="search-form">
      <SearchFormInput changeAction={changeAction} />
      <SearchOptionBlock />
      <SearchButton clickAction={clickAction} sortBy={sortBy} searchBy={searchBy} searchInput={searchInput} />
    </form>
  );
};

export default SearchFormView;