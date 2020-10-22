import React, { FunctionComponent } from "react";
import { optionsType } from "../../Types/OptionsType";
import { SearchButton } from "../SearchButton/SearchButton";
import { SearchInput } from "../SearchInput/SearchInput";
import { SearchLabel } from "../SearchLabel/SearchLabel";
import { SearchOptionBlock } from "../SearchOptionBlock/SearchOptionBlock";
import "./SearchForm.scss";

interface SearchFormProps {
  options: optionsType[];
}

export const SearchForm: FunctionComponent<SearchFormProps> = ({ options }) => {
  return (
    <form className="search-form" action="javascript:void(0);">
      <SearchLabel />
      <SearchInput />
      <SearchOptionBlock options={options}/>
      <SearchButton />
    </form>
  );
};