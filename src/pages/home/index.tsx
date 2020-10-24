import React from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { FilmDetailsBlock } from "../../Components/FilmDetailsBlock/FilmDetailsBlock";
import { MovieList } from "../../Components/MovieList/MovieList";
import "./index.scss";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import { MovieData } from "../../entity";
import { StateType, Order, Search } from "./StateType";

interface IApp {
  toggleOrder(text: Order): void;
  toggleSearch(text: Search): void;
}
export default class Home extends React.Component implements IApp {
  state: StateType = {
    options: [
      {id: 1, name: 'TITLE'},
      {id: 2, name: 'GENRE'}
    ],
    order: 'release date',
    searchBy: 'TITLE',
    currentMovie: 0
  };
  setState: any;

  toggleOrder = (text: Order) => {
    this.setState(({order}:{order: Order}) => {
      return { order: order === text ? order : text };
    });
  }

  toggleSearch = (text: Search) => {
    this.setState(({searchBy}:{searchBy: Search}) => {
      return { searchBy: searchBy === text ? searchBy : text };
    });
  }

  render = () => {
    return (
      <>
        <Header options={this.state.options} searchAction={this.toggleSearch} selected={this.state.searchBy} />
        <FilmDetailsBlock filmCount={MovieData.length} orderAction={this.toggleOrder} selected={this.state.order}/>
        <ErrorBoundary>
          <MovieList MovieData={MovieData}/>
        </ErrorBoundary>
        <Footer />
      </>
    )
  }
}