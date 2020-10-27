import React, { FunctionComponent } from "react";
import { SearchType } from "../../pages/home/StateType";
import { SearchOptionItem } from "../SearchOptionItem/SearchOptionItem";
import "./SearchOptionsList.scss";

interface SearchOptionsListProps {
  options: SearchType[];
  clickAction: any;
  selected: string;
}
export const SearchOptionsList: FunctionComponent<SearchOptionsListProps> = ({ options, clickAction, selected }) => {
  return (
    <>
      {options.map((item) => {
        const select = item === selected ? true : false;

        return <SearchOptionItem key={item} option={item} clickAction={clickAction} select={select}/>
      })}
    </>
  );
};