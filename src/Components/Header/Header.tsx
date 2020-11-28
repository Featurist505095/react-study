import React, { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { FilmDataType } from "../MovieItem/FilmDataType";
import "./Header.scss";
import { clearMoviesData, getMovieById } from "../../store/actionCreators";
import HeaderView from "./HeaderView";

interface HeaderProps {
  MovieData?: FilmDataType;
}

const Header: FunctionComponent<HeaderProps> = ({ MovieData }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const clickAction = async () => {
    if (pathname.indexOf('film')) {
      dispatch(getMovieById(pathname.replace('/film/', '')));
      dispatch(clearMoviesData());
    }
  }

  useEffect(() => {
    if (pathname.indexOf('film')) {
      dispatch(getMovieById(pathname.replace('/film/', '')));
    }
  }, [pathname])

  return <HeaderView clickAction={clickAction} MovieData={MovieData} />
};

export default Header;