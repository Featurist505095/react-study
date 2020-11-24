import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesByServer } from "../../store/actionCreators";
import { stateSelector } from "../../store/reducers";
import { MovieView } from "./MovieView";

export const Movie: FunctionComponent = () => {
  const { movies, activeMovie } = useSelector(stateSelector);
  const genre = activeMovie ? activeMovie.genres[0] : '';
  const dispatch = useDispatch();
  const searchUrl = `https://reactjs-cdp.herokuapp.com/movies?search=${genre}&searchBy=genres`;

  useEffect(() => {
    dispatch(fetchMoviesByServer(searchUrl));
  }, [activeMovie, searchUrl]);

  return <MovieView activeMovie={activeMovie} movies={movies} genre={genre} />
}