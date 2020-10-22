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
        if (item.name === selected) {
          return (<SearchOptionItem key={item.id} option={item.name} select={true} searchAction={searchAction} />);
        }

        return <SearchOptionItem key={item.id} option={item.name} searchAction={searchAction} />
      })}
    </>
  );
};