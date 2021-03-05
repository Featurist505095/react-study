import React, { FunctionComponent } from "react";
import CompanyName from "../CompanyName";
import MovieCard from "../MovieCard";
import SearchButton from "../SearchButton";
import SearchForm from "../SearchForm";
import { FilmDataType } from "../MovieItem/FilmDataType";
import "./Header.scss";

interface IHeaderView {
  MovieData?: FilmDataType;
  clickAction: any;
}

const HeaderView: FunctionComponent<IHeaderView> = ({ MovieData, clickAction }) => {
  return (MovieData !== undefined) ?
  (
    <header>
      <CompanyName />
      <SearchButton size="small" clickAction={clickAction} />
      <MovieCard
        title={MovieData.title} 
        release_date={MovieData.release_date} 
        genres={MovieData.genres} 
        poster_path={MovieData.poster_path} 
        vote_average={MovieData.vote_average}
        overview={MovieData.overview}
        runtime={MovieData.runtime}
      />
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

export default HeaderView;