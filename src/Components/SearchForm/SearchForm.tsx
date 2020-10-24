import React, { FunctionComponent } from "react";
import { OptionsType } from "../../pages/home/StateType";
import { SearchButton } from "../SearchButton/SearchButton";
import { SearchOptionBlock } from "../SearchOptionBlock/SearchOptionBlock";
import "./SearchForm.scss";

interface SearchFormProps {
  options: OptionsType[];
  searchAction: any;
  selected: string;
}

export const SearchForm: FunctionComponent<SearchFormProps> = ({ options, searchAction, selected }) => {
  return (
    <form className="search-form" action="javascript:void(0);">
      <label className="search-label" htmlFor="search-input">{'FIND YOUR MOVIE'}</label>
      <input id="search-input" className="search-input"  autoComplete="off" />
      <SearchOptionBlock options={options} searchAction={searchAction} selected={selected}/>
      <SearchButton />
    </form>
  );
};