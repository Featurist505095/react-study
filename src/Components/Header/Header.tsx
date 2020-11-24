import React, { FunctionComponent, useEffect } from "react";
import { FilmDataType } from "../MovieItem/FilmDataType";
import "./Header.scss";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearMoviesData, getMovieById } from "../../store/actionCreators";
import { HeaderView } from "./HeaderView";

interface HeaderProps {
  MovieData?: FilmDataType;
}

export const Header: FunctionComponent<HeaderProps> = ({ MovieData }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const clickAction = async () => {
    dispatch(getMovieById(pathname.replace('/film/', '')));
    dispatch(clearMoviesData());
  }

  useEffect(() => {
    dispatch(getMovieById(pathname.replace('/film/', '')));
  }, [pathname])

  return <HeaderView clickAction={clickAction} MovieData={MovieData}/>
};