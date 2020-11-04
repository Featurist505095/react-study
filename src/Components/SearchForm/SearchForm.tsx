import React, { FunctionComponent } from "react";
import { SearchType } from "../../pages/home/StateType";
import { SearchButton } from "../SearchButton/SearchButton";
import { SearchOptionBlock } from "../SearchOptionBlock/SearchOptionBlock";
import "./SearchForm.scss";

interface SearchFormProps {
  options: SearchType[];
  clickAction: any;
  selected: string;
}

export const SearchForm: FunctionComponent<SearchFormProps> = ({ options, clickAction, selected }) => {
  return (
    <form className="search-form">
      <label className="search-label" htmlFor="search-input">{'FIND YOUR MOVIE'}</label>
      <input id="search-input" className="search-input"  autoComplete="off" />
      <SearchOptionBlock options={options} clickAction={clickAction} selected={selected}/>
      <SearchButton />
    </form>
  );
};