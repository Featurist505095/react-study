import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { FilmDetailsBlock } from "../../Components/FilmDetailsBlock/FilmDetailsBlock";
import { MovieList } from "../../Components/MovieList/MovieList";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import { MovieData } from "../../entity";
import { OrderType, SearchType } from "./StateType";
import { FilmDataType } from "../../Components/MovieItem/FilmDataType";

export const Home: FunctionComponent = React.memo(() => {
  const searchOptionList: SearchType[] = ['TITLE', 'GENRE'];
  const orderList: OrderType[] = ['release date', 'rating'];
  const [searchOption, setOption] = useState(searchOptionList[0]);
  const [order, setOrder] = useState(orderList[0]);
  const [sortedData, setSortedData] = useState(MovieData);

  const getSortedData = ( order: OrderType, data: FilmDataType[] ): FilmDataType[] => {
    const returnData = [...data];
    const orderField = order === 'release date' ? 'release_date' : 'vote_average';

    returnData.sort((prev, curr) => {
      return prev[orderField] > curr[orderField] ? -1 : 1;
    });

    return returnData;
  };

  const onSortedData = useCallback((order , MovieData) => {
    const updatedData = getSortedData( order , MovieData );
    setSortedData(updatedData);
  }, [ order, setSortedData ]);


  const useToggleOption = (text: SearchType): void => {
    setOption(text);
  }

  const useToggleOrder = (text: OrderType): void => {
    setOrder(text);
  }

  useEffect( () => { 
    onSortedData(order , sortedData);
  } , [ order, setSortedData ]);

  return (
    <>
      <Header 
        options={searchOptionList} 
        clickAction={ useToggleOption }
        selected={searchOption}
      />
      <FilmDetailsBlock 
        filmCount={sortedData.length} 
        clickAction={ useToggleOrder } 
        selected={order}
      />
      <ErrorBoundary>
        <MovieList MovieData={sortedData} />
      </ErrorBoundary>
      <Footer />
    </>
  );
});