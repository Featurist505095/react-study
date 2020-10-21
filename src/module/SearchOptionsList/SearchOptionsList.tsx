import React, { FunctionComponent } from "react";
import { optionsType } from "../../Types/OptionsType";
import { SearchOptionItem } from "../SearchOptionItem/SearchOptionItem";
import "./SearchOptionsList.scss";

interface SearchOptionsListProps {
  options: optionsType[];
}
export const SearchOptionsList: FunctionComponent<SearchOptionsListProps> = ({ options }) => {
  return (
    <>
      {options.map((item, i) => {
        if (i < 1) {
          return (<SearchOptionItem key={item.id} option={item.name} select={true} />);
        }

        return <SearchOptionItem key={item.id} option={item.name} />
      })}
    </>
  );
};