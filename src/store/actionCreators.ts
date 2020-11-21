import { FilmDataType } from '../Components/MovieItem/FilmDataType';
import { SearchType, SortType } from '../pages/home/StateType';

export const SEARCH_BY = 'SEARCH_BY';

export const toggleSearch = (searchBy: SearchType) => {
    return {
        type: SEARCH_BY,
        payload: searchBy
    }
};

export const SORT_BY = 'SORT_BY';

export const toggleSort = (sortBy: SortType) => {
    return {
        type: SORT_BY,
        payload: sortBy
    }
}

export const SORT_DATA = 'SORT_DATA';

export const sortData = (movies: FilmDataType[]) => {
    return {
        type: SORT_DATA,
        payload: movies
    }
}

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_PENDING = 'GET_MOVIES_PENDING';
export const GET_MOVIES_FULFILLED = 'GET_MOVIES_FULFILLED';

export const getMovies = () => {
    return {
        type: GET_MOVIES
    }
}

export const fetchMoviesByServer = (url: string) => {
    console.log(url);
    return {
        type: GET_MOVIES,
        payload: fetch(url)
            .then(response => response.json())
    };
}

export const UPDATE_SEARCH_DATA = 'UPDATE_SEARCH_DATA';

export const updateData = (searchData: string) => {
    return {
        type: UPDATE_SEARCH_DATA,
        payload: searchData
    }
}

export const UPDATE_INPUT_DATA = 'UPDATE_INPUT_DATA';

export const updateInputData = (inputData: string) => {
    return {
        type: UPDATE_INPUT_DATA,
        payload: inputData
    }
}