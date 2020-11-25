import React, { FunctionComponent } from "react";
import { SearchType } from "../../pages/home/StateType";
import SearchOptionItem from "../SearchOptionItem";
import "./SearchOptionsList.scss";

interface ISearchOptionsListView {
  searchOptionsList: SearchType[];
  clickAction: any;
  selected: SearchType;
}

const SearchOptionsListView: FunctionComponent<ISearchOptionsListView> = 
  ({ searchOptionsList, clickAction, selected }) => {
  return (
    <>
      {searchOptionsList.map((item) => {
        return <SearchOptionItem key={item} option={item} clickAction={clickAction} selected={selected} />
      })}
    </>
  );
};

export default SearchOptionsListView;