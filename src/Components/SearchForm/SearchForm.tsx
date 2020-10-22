import React, { FunctionComponent } from "react";
import { optionsType } from "../../Types/OptionsType";
import { SearchButton } from "../SearchButton/SearchButton";
import { SearchOptionBlock } from "../SearchOptionBlock/SearchOptionBlock";
import "./SearchForm.scss";

interface SearchFormProps {
  options: optionsType[];
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