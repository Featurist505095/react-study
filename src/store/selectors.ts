import { createSelector } from "reselect";
import { FilmDataType } from "../Components/MovieItem/FilmDataType";

export const getMovies = (state: { movies: FilmDataType[]; }) => state.movies;

export const getBrokenMovies = createSelector(getMovies, (movies) => {
    const copyMovies = [...movies];

    return copyMovies;
});

export default getMovies;