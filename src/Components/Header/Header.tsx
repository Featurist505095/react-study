import React, { FunctionComponent } from "react";
import { CompanyName } from "../CompanyName/CompanyName";
import { MovieCard } from "../MovieCard/MovieCard";
import { SearchButton } from "../SearchButton/SearchButton";
import { SearchForm } from "../SearchForm/SearchForm";
import { FilmDataType } from "../MovieItem/FilmDataType";
import "./Header.scss";
import { SearchType } from "../../pages/home/StateType";

interface HeaderProps {
  options?: SearchType[];
  clickAction?: any;
  selected?: string;
  MovieData?: FilmDataType;
}

export const Header: FunctionComponent<HeaderProps> = ({ options = [], clickAction, selected='', MovieData }) => {
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
      <SearchForm options={options} clickAction={clickAction} selected={selected}/>
    </header>
  );
};