import React from "react";
import * as ReactDOM from "react-dom";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { SelectableForm } from "./Components/SelectableForm/SelectableForm";
import { MovieList } from "./Components/MovieList/MovieList";
import "./index.scss";
import {ErrorBoundary} from "./Components/ErrorBoundary/ErrorBoundary";

interface IApp {
  toggleOrder(text: string): void;
}
class App extends React.Component implements IApp {
  state = {
    options: [
      {id: 1, name: 'Title'},
      {id: 2, name: 'GENRE'}
    ],
    // const movieItems : any[] = [];
    movieItems: [
      {id: 1111, name: 'Film1', rate: 6.7, year: 1994, genre: 'Action'},
      {id: 2222, name: 'Film2', rate: 0, year: 2150, genre: 'Action'},
      {id: 3333, name: 'Film3', rate: 10, year: 1850, genre: 'Dramas'},
      {id: 4444, name: 'Film4', rate: 10, year: 1850, genre: 'Dramas'}
    ],
    order: 'release date',
    currentMovie: 0
  };
  setState: any;

  toggleOrder = (text: string) => {
    this.setState(({order}:{order:string}) => {
      return { order: order === text ? order : text };
    });
  }

  render = () => {
    return (
      <>
        <Header options={this.state.options}/>
        <SelectableForm filmCount={this.state.movieItems.length} orderAction={this.toggleOrder} selected={this.state.order}/>
        <MovieList data={this.state.movieItems}/>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </>
    )
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);