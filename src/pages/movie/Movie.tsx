import React, { FunctionComponent, useCallback, useEffect, useState} from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { MovieList } from "../../Components/MovieList/MovieList";
import { FilmDetailsBlock } from "../../Components/FilmDetailsBlock/FilmDetailsBlock";
import { MovieData } from "../../entity";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import { FilmDataType } from "../../Components/MovieItem/FilmDataType";

export const Movie: FunctionComponent = () => {
  const [filteredData, setFilteredData] = useState(MovieData); 
  const [genre, setGenre] = useState(MovieData[0].genres[0]);

  const getFilteredData = (filteredData: FilmDataType[] ) => {
    const returnData = filteredData.filter((film) => film.genres[0] === genre);
    return returnData;
  }

  const onFilteredData = useCallback(() => {
    const updatedData = getFilteredData(filteredData);
    setFilteredData(updatedData);
  }, [ filteredData, setFilteredData ]);
  
  useEffect( () => {
    onFilteredData();
  }, [ setFilteredData ]);

  return (
    <>
      <Header MovieData={filteredData[0]}/>
      <FilmDetailsBlock genre={filteredData[0].genres[0]} />
      <ErrorBoundary>
        <MovieList MovieData={filteredData} />
      </ErrorBoundary>
      <Footer />
    </>
  )
}