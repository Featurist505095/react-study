import React, { FunctionComponent } from "react";
import InformationItem from "../InformationItem";
import SearchOptionsList from "../SearchOptionsList";
import "./SearchOptionBlock.scss";

const SearchOptionBlock: FunctionComponent = () => {
  return (
    <div className="search-option-block">
      <InformationItem text="SEARCH BY" />
      <SearchOptionsList />
    </div>
  );
};

export default SearchOptionBlock;