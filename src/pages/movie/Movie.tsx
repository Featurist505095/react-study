import React, { FunctionComponent, useEffect } from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { MovieList } from "../../Components/MovieList/MovieList";
import { FilmDetailsBlock } from "../../Components/FilmDetailsBlock/FilmDetailsBlock";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import { useDispatch, useSelector } from "react-redux";
import { FilmDataType } from "../../Components/MovieItem/FilmDataType";
import { fetchMoviesByServer } from "../../store/actionCreators";

interface IMovie {
  movies: FilmDataType[],
}

export const Movie: FunctionComponent = () => {
  const movies = useSelector((state: IMovie) => state.movies);
  const dispatch = useDispatch();
  const searchUrl = `https://reactjs-cdp.herokuapp.com/movies?search=drama&searchBy=genres`
  useEffect(() => {
    dispatch(fetchMoviesByServer(searchUrl))
  }, [searchUrl]);

  return (
    <>
      <Header MovieData={movies[0]}/>
      <FilmDetailsBlock genre={movies[0].genres[0]} />
      <ErrorBoundary>
        <MovieList MovieData={movies} />
      </ErrorBoundary>
      <Footer />
    </>
  )
}