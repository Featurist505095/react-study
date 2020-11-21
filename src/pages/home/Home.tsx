import React, { FunctionComponent, useEffect } from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { FilmDetailsBlock } from "../../Components/FilmDetailsBlock/FilmDetailsBlock";
import { MovieList } from "../../Components/MovieList/MovieList";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import { SortType, SearchType } from "./StateType";
import { FilmDataType } from "../../Components/MovieItem/FilmDataType";
import { connect } from "react-redux";
import { sortData } from "../../store/actionCreators";

interface IState {
  movies: FilmDataType[],
  sortOptionList: SortType[],
  sortBy: SortType,
  searchOptionList: SearchType[],
  searchBy: SearchType,
  sortData: any
}

const Home: FunctionComponent<IState> = ({ movies, sortBy, sortData }) => {
    useEffect(() => {
        sortData(movies);
    }, [sortBy]);

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

const mapStateToProps = (state: IState) => {
  return {
    movies: state.movies,
    sortBy: state.sortBy

  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    sortData: (movies: FilmDataType[]) => dispatch(sortData(movies))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);