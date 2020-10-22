import React, { FunctionComponent } from "react";
import { optionsType } from "../../Types/OptionsType";
import { InformationItem } from "../InformationItem/InformationItem";
import { SearchOptionsList } from "../SearchOptionsList/SearchOptionsList";
import "./SearchOptionBlock.scss";

interface SearchOptionBlockProps {
  options: optionsType[];
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