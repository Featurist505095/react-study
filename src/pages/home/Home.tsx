import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import FilmDetailsBlock from "../../Components/FilmDetailsBlock/FilmDetailsBlock";
import MovieList from "../../Components/MovieList/MovieList";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import { SortType, SearchType } from "./StateType";
import { FilmDataType } from "../../Components/MovieItem/FilmDataType";
import { getBrokenMovies } from "../../store/selectors";

interface IState {
  movies: FilmDataType[],
  sortOptionList: SortType[],
  sortBy: SortType,
  searchOptionList: SearchType[],
  searchBy: SearchType,
  sortData: any
}

const Home: FunctionComponent<IState> = ({ movies }) => {
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
    movies: getBrokenMovies(state)
  }
}
export default connect(mapStateToProps)(Home);