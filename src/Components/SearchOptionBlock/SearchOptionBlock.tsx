import React, { FunctionComponent } from "react";
import { optionsType } from "../../Types/OptionsType";
import { InformationItem } from "../InformationItem/InformationItem";
import { SearchOptionsList } from "../SearchOptionsList/SearchOptionsList";
import "./SearchOptionBlock.scss";

interface SearchOptionBlockProps {
  options: optionsType[];
}
export const SearchOptionBlock: FunctionComponent<SearchOptionBlockProps> = ({ options }) => {
  return (
    <div className="search-option-block">
      <InformationItem text="SEARCH BY" />
      <SearchOptionsList options={options} />
    </div>
  );
};