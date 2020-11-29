import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { FilmDataType } from "../../Components/MovieItem/FilmDataType";
import { getBrokenMovies } from "../../store/selectors";
import HomeView from "./HomeView";

interface IState {
  movies: FilmDataType[]
}

const Home: FunctionComponent<IState> = ({ movies }) => {
  return (<HomeView movies={movies} />);
};

const mapStateToProps = (state: IState) => {
  return {
    movies: getBrokenMovies(state)
  }
}
export default connect(mapStateToProps)(Home);