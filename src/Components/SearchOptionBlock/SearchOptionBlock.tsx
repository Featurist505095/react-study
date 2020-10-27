import React, { FunctionComponent } from "react";
import { SearchType } from "../../pages/home/StateType";
import { InformationItem } from "../InformationItem/InformationItem";
import { SearchOptionsList } from "../SearchOptionsList/SearchOptionsList";
import "./SearchOptionBlock.scss";

interface SearchOptionBlockProps {
  options: SearchType[];
  clickAction: any;
  selected: string;
}
export const SearchOptionBlock: FunctionComponent<SearchOptionBlockProps> = ({ options, clickAction, selected }) => {
  return (
    <div className="search-option-block">
      <InformationItem text="SEARCH BY" />
      <SearchOptionsList options={options} clickAction={clickAction} selected={selected}/>
    </div>
  );
};