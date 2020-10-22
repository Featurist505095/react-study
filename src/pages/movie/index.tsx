import React from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { MovieList } from "../../Components/MovieList/MovieList";
import { SelectableForm } from "../../Components/SelectableForm/SelectableForm";
import "./index.scss";
import { MovieData } from "../../entity";

interface IApp {
  toggleOrder(text: string): void;
}
export default class Movie extends React.Component implements IApp {
  state = {
    options: [
      {id: 1, name: 'Title'},
      {id: 2, name: 'GENRE'}
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
        <Header MovieData={MovieData[0]}/>
        <SelectableForm genre={MovieData[0].genres[0]} />
        <MovieList MovieData={MovieData}/>
        <Footer />
      </>
    )
  }
}