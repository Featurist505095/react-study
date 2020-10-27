import React, { FunctionComponent, useState } from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { FilmDetailsBlock } from "../../Components/FilmDetailsBlock/FilmDetailsBlock";
import { MovieList } from "../../Components/MovieList/MovieList";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import { MovieData } from "../../entity";
import { OrderType, SearchType } from "./StateType";
import { FilmDataType } from "../../Components/MovieItem/FilmDataType";

export const Home: FunctionComponent = () => {
  const optionsList: SearchType[] = ['TITLE', 'GENRE'];
  const orderList: OrderType[] = ['release date', 'rating'];
  const [option, useOption] = useState(optionsList[0]);
  const [order, useOrder] = useState(orderList[0]);

  sortData(order, MovieData);

  return (
    <>
      <Header 
        options={optionsList} 
        clickAction={ {'action': useToggle, 'useFunction': useOption } } 
        selected={option}
      />
      <FilmDetailsBlock 
        filmCount={MovieData.length} 
        clickAction={ {'action': useToggle, 'useFunction': useOrder }} 
        selected={order}
      />
      <ErrorBoundary>
        <MovieList MovieData={MovieData}/>
      </ErrorBoundary>
      <Footer />
    </>
  );
}

const useToggle = ( text: string, useFunction: any ): void => { 
  useFunction(text);
};

const sortData = ( order: OrderType, data: FilmDataType[] ) => {
  const orderField = order === 'release date' ? 'release_date' : 'vote_average';

  data.sort((prev, curr) => {
    return prev[orderField] > curr[orderField] ? -1 : 1;
  });
}