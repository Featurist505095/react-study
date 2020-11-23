import React, { FunctionComponent, useEffect } from "react";
import { CompanyName } from "../CompanyName";
import { MovieCard } from "../MovieCard";
import { SearchButton } from "../SearchButton";
import { SearchForm } from "../SearchForm";
import { FilmDataType } from "../MovieItem/FilmDataType";
import "./Header.scss";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMovieById } from "../../store/actionCreators";

interface HeaderProps {
  MovieData?: FilmDataType;
}

export const Header: FunctionComponent<HeaderProps> = ({ MovieData }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const clickAction = async () => {
    dispatch(getMovieById(pathname.replace('/film/', '')));
  }

  useEffect(() => {
    dispatch(getMovieById(pathname.replace('/film/', '')));
  }, [pathname])

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