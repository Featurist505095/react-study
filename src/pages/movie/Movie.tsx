import React, { FunctionComponent, useEffect } from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { MovieList } from "../../Components/MovieList/MovieList";
import { FilmDetailsBlock } from "../../Components/FilmDetailsBlock/FilmDetailsBlock";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesByServer } from "../../store/actionCreators";
import { stateSelector } from "../../store/reducers";
import { useParams } from "react-router-dom";

export const Movie: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const { movies, activeMovie } = useSelector(stateSelector);
  const genre = activeMovie ? activeMovie.genres[0] : '';
  const dispatch = useDispatch();
  const searchUrl = `https://reactjs-cdp.herokuapp.com/movies?search=${genre}&searchBy=genres`;

  useEffect(() => {
    dispatch(fetchMoviesByServer(searchUrl));
  }, [activeMovie, searchUrl])
  /*useEffect(() => {
    dispatch(fetchMoviesByServer(searchUrl))
  }, [searchUrl]);*/

  return (
    <>
      <Header MovieData={activeMovie}/>
      <FilmDetailsBlock genre={genre} />
      <ErrorBoundary>
        <MovieList MovieData={movies} />
      </ErrorBoundary>
      <Footer />
    </>
  )
}