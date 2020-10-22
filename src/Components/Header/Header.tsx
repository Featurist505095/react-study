import React, { FunctionComponent } from "react";
import { optionsType } from "../../Types/OptionsType";
import { CompanyName } from "../CompanyName/CompanyName";
import { MovieCard } from "../MovieCard/MovieCard";
import { SearchButton } from "../SearchButton/SearchButton";
import { SearchForm } from "../SearchForm/SearchForm";
import { FilmDataType } from "../../Types/FilmData";
import "./Header.scss";

interface HeaderProps {
  options?: optionsType[];
  searchAction?: any;
  selected?: string;
  MovieData?: FilmDataType;
}

export const Header: FunctionComponent<HeaderProps> = ({ options = [], searchAction, selected='', MovieData }) => {
  return (MovieData !== undefined) ?
  (
    <header>
      <CompanyName />
      <SearchButton size="small" />
      <MovieCard {...MovieData} />
    </header>
  )
  :
  (
    <header>
      <CompanyName />
      <SearchForm options={options} searchAction={searchAction} selected={selected}/>
    </header>
  );
};