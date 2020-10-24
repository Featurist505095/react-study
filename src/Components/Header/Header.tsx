import React, { FunctionComponent } from "react";
import { CompanyName } from "../CompanyName/CompanyName";
import { MovieCard } from "../MovieCard/MovieCard";
import { SearchButton } from "../SearchButton/SearchButton";
import { SearchForm } from "../SearchForm/SearchForm";
import { FilmDataType } from "../MovieItem/FilmDataType";
import "./Header.scss";
import { OptionsType } from "../../pages/home/StateType";

interface HeaderProps {
  options?: OptionsType[];
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