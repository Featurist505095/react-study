import React, { FunctionComponent } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import FilmDetailsBlock from "../../Components/FilmDetailsBlock/FilmDetailsBlock";
import MovieList from "../../Components/MovieList/MovieList";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import { FilmDataType } from "../../Components/MovieItem/FilmDataType";

interface IState {
  movies: FilmDataType[]
}

const HomeView: FunctionComponent<IState> = ({ movies }) => {
  return (
    <>
      <Header />
      <FilmDetailsBlock 
        filmCount={movies.length}
      />
      <ErrorBoundary>
        <MovieList MovieData={movies} />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default HomeView;