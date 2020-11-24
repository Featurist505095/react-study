import React, { FunctionComponent } from "react";
import { CompanyName } from "../CompanyName";
import { MovieCard } from "../MovieCard";
import { SearchButton } from "../SearchButton";
import { SearchForm } from "../SearchForm";
import { FilmDataType } from "../MovieItem/FilmDataType";
import "./Header.scss";

interface IHeaderView {
  MovieData?: FilmDataType;
  clickAction: any;
}

export const HeaderView: FunctionComponent<IHeaderView> = ({ MovieData, clickAction }) => {
  return (MovieData !== undefined) ?
  (
    <header>
      <CompanyName />
      <SearchButton size="small" clickAction={clickAction}/>
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