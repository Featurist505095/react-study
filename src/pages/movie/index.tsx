import React from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { MovieList } from "../../Components/MovieList/MovieList";
import { FilmDetailsBlock } from "../../Components/FilmDetailsBlock/FilmDetailsBlock";
import "./index.scss";
import { MovieData } from "../../entity";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import { Order, StateType } from "./StateType";

interface IApp {
  toggleOrder(text: Order): void;
}
export default class Movie extends React.Component implements IApp {
  state: StateType = {
    options: [
      {id: 1, name: 'Title'},
      {id: 2, name: 'GENRE'}
    ],
    order: 'release date',
    currentMovie: 0
  };
  setState: any;

  toggleOrder = (text: Order) => {
    this.setState(({order}:{order: Order}) => {
      return { order: order === text ? order : text };
    });
  }

  render = () => {
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
}