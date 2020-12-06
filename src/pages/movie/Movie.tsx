import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadDataByGenre } from "../../store/actionCreators";
import { stateSelector } from "../../store/reducers";
import MovieView from "./MovieView";

const Movie: FunctionComponent = () => {
  const { movies, activeMovie } = useSelector(stateSelector);
  const genre = activeMovie ? activeMovie.genres[0] : '';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDataByGenre(genre));
  }, [activeMovie]);

  return <MovieView activeMovie={activeMovie} movies={movies} genre={genre} />
}

export default Movie;