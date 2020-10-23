import React, { FunctionComponent } from "react";
import { optionsType } from "../../Types/OptionsType";
import { SearchOptionItem } from "../SearchOptionItem/SearchOptionItem";
import "./SearchOptionsList.scss";

interface SearchOptionsListProps {
  options: optionsType[];
  searchAction: any;
  selected: string;
}
export const SearchOptionsList: FunctionComponent<SearchOptionsListProps> = ({ options, searchAction, selected }) => {
  return (
    <>
      {options.map((item) => {
        const select = item.name === selected ? true : false;

        return <SearchOptionItem key={item.id} option={item.name} searchAction={searchAction} select={select}/>
      })}
    </>
  );
};