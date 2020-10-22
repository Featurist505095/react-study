import React from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { SelectableForm } from "../../Components/SelectableForm/SelectableForm";
import { MovieList } from "../../Components/MovieList/MovieList";
import "./index.scss";
import {ErrorBoundary} from "../../Components/ErrorBoundary/ErrorBoundary";
import { MovieData } from "../../entity";

/*
  "id": 0,
  "title": "string",
  "tagline": "string",
  "vote_average": 0,
  "vote_count": 0,
  "release_date": "string",
  "poster_path": "string",
  "overview": "string",
  "budget": 0,
  "revenue": 0,
  "runtime": 0,
  "genres": [
    "string"
  ]
*/
interface IApp {
  toggleOrder(text: string): void;
}
export default class Home extends React.Component implements IApp {
  state = {
    options: [
      {id: 1, name: 'Title'},
      {id: 2, name: 'GENRE'}
    ],
    order: 'release date',
    searchBy: 'TITLE',
    currentMovie: 0
  };
  setState: any;

  toggleOrder = (text: string) => {
    this.setState(({order}:{order:string}) => {
      return { order: order === text ? order : text };
    });
  }

  toggleSearch = (text: string) => {
    this.setState(({searchBy}:{searchBy:string}) => {
      return { searchBy: searchBy === text ? searchBy : text };
    });
  }

  render = () => {
    return (
      <>
        <Header options={this.state.options} searchAction={this.toggleSearch} selected={this.state.searchBy} />
        <SelectableForm filmCount={MovieData.length} orderAction={this.toggleOrder} selected={this.state.order}/>
        <MovieList MovieData={MovieData}/>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </>
    )
  }
}