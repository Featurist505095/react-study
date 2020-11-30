import { GET_MOVIES_BY_ALL_ENPOINTS, GET_MOVIES_BY_GENRE_ENDPOINT } from '../api/endpointrs';
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
export const GET_MOVIES_ERROR = 'GET_MOVIES_ERROR';
export const GET_MOVIES_FULFILLED = 'GET_MOVIES_FULFILLED';

export const getMovies = () => {
    return {
        type: GET_MOVIES
    }
}

export const fetchMoviesByServer = (sortBy?: string, searchBy?: string, text?: string, genre?: string) => {
    let url = '';
    
    if (sortBy !== undefined && searchBy !== undefined && text !== undefined) {
        const copyText = text.replace(' ', '%20');
        const copySortBy = sortBy === 'rating' ? 'vote_average' : 'release_date';
        const copySearchBy = searchBy === 'GENRE' ? 'genres' : 'title';
        url = GET_MOVIES_BY_ALL_ENPOINTS(copySortBy, copySearchBy, copyText);
    } else if (genre !== undefined) {
        url = GET_MOVIES_BY_GENRE_ENDPOINT(genre);
    }
    console.log(url);
    if (url === '') {
        return { type: GET_MOVIES };
    }
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

export const GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID';
export const GET_MOVIE_BY_ID_PENDING = 'GET_MOVIE_BY_ID_PENDING';
export const GET_MOVIE_BY_ID_ERROR = 'GET_MOVIE_BY_ID_ERROR';
export const GET_MOVIE_BY_ID_FULFILLED = 'GET_MOVIE_BY_ID_FULFILLED';

export const getMovieById = (id: string) => {
    const url = `https://reactjs-cdp.herokuapp.com/movies/${id}`;

    return {
        type: GET_MOVIE_BY_ID,
        payload: fetch(url)
        .then(response => response.json())
    }
}

export const CLEAR_MOVIES_DATA = 'CLEAR_MOVIES_DATA';

export const clearMoviesData = () => {
    return {
        type: CLEAR_MOVIES_DATA
    }
}

export const CLEAR_SEARCH_DATA = 'CLEAR_SEARCH_DATA';

export const clearSearchData =() => {
    return {
        type: CLEAR_SEARCH_DATA
    }
}