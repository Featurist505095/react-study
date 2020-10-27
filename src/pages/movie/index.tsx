import React, { FunctionComponent} from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { MovieList } from "../../Components/MovieList/MovieList";
import { FilmDetailsBlock } from "../../Components/FilmDetailsBlock/FilmDetailsBlock";
import { MovieData } from "../../entity";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";

export const Movie: FunctionComponent = () => {
  return (
    <>
      <Header MovieData={MovieData[0]}/>
      <FilmDetailsBlock genre={MovieData[0].genres[0]} />
      <ErrorBoundary>
        <MovieList MovieData={MovieData}/>
      </ErrorBoundary>
      <Footer />
    </>
  )
}