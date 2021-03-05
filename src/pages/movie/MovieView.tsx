import React, { FunctionComponent } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MovieList from "../../Components/MovieList/MovieList";
import FilmDetailsBlock from "../../Components/FilmDetailsBlock/FilmDetailsBlock";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import { FilmDataType } from "../../Components/MovieItem/FilmDataType";

interface IMovieView {
    activeMovie: FilmDataType | undefined,
    genre: string,
    movies: FilmDataType[]
}

const MovieView: FunctionComponent<IMovieView> = ({ activeMovie, genre, movies }) => {
    return (
      <>
        <Header MovieData={activeMovie} />
        <FilmDetailsBlock genre={genre} />
        <ErrorBoundary>
          <MovieList MovieData={movies} />
        </ErrorBoundary>
        <Footer />
      </>
      )
}

export default MovieView;