import React, { FunctionComponent } from "react";
import { CompanyName } from "../CompanyName";
import { MovieCard } from "../MovieCard";
import { SearchButton } from "../SearchButton";
import { SearchForm } from "../SearchForm";
import { FilmDataType } from "../MovieItem/FilmDataType";
import "./Header.scss";

interface HeaderProps {
  MovieData?: FilmDataType;
}

export const Header: FunctionComponent<HeaderProps> = ({ MovieData }) => {
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
      <SearchForm />
    </header>
  );
};