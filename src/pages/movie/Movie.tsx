import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesByServerByGenre } from "../../store/actionCreators";
import { stateSelector } from "../../store/reducers";
import MovieView from "./MovieView";

const Movie: FunctionComponent = () => {
  const { movies, activeMovie } = useSelector(stateSelector);
  const genre = activeMovie ? activeMovie.genres[0] : '';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesByServerByGenre(genre));
  }, [activeMovie]);

  return <MovieView activeMovie={activeMovie} movies={movies} genre={genre} />
}

export default Movie;