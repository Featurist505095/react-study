import React, { FunctionComponent } from "react";
import { OptionsType } from "../../pages/home/StateType";
import { InformationItem } from "../InformationItem/InformationItem";
import { SearchOptionsList } from "../SearchOptionsList/SearchOptionsList";
import "./SearchOptionBlock.scss";

interface SearchOptionBlockProps {
  options: OptionsType[];
  searchAction: any;
  selected: string;
}
export const SearchOptionBlock: FunctionComponent<SearchOptionBlockProps> = ({ options, searchAction, selected }) => {
  return (
    <div className="search-option-block">
      <InformationItem text="SEARCH BY" />
      <SearchOptionsList options={options} searchAction={searchAction} selected={selected}/>
    </div>
  );
};