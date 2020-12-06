import { GET_MOVIES_BY_ALL_ENDPOINTS, GET_MOVIES_BY_GENRE_ENDPOINT } from '../api/endpointrs';
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

export const getMovies = () => {
    return {
        type: GET_MOVIES
    }
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

export const LOAD_DATA = 'LOAD_DATA';

export const loadData = (sortBy?: string, searchBy?: string, text?: string) => {
    let url = '';
    
    if (sortBy !== undefined && searchBy !== undefined && text !== undefined) {
        const copyText = text.replace(' ', '%20');
        const copySortBy = sortBy === 'rating' ? 'vote_average' : 'release_date';
        const copySearchBy = searchBy === 'GENRE' ? 'genres' : 'title';
        url = GET_MOVIES_BY_ALL_ENDPOINTS(copySortBy, copySearchBy, copyText);
    }

    if (url === '') {
        return { type: GET_MOVIES };
    }
    return {
        type: LOAD_DATA,
        payload: url
    };
}

export const PUT_DATA = 'PUT_DATA';

export const putData = (dataFromServer: any) => {
    return {
        type: PUT_DATA,
        payload: dataFromServer
    }
}

export const LOAD_DATA_BY_ID = 'LOAD_DATA_BY_ID';

export const loadDataById = (id: string) => {
    const url = `https://reactjs-cdp.herokuapp.com/movies/${id}`;

    return {
        type: LOAD_DATA_BY_ID,
        payload: url
    }
}

export const PUT_DATA_BY_ID = 'PUT_DATA_BY_ID';

export const putDataById = (dataFromServer: any) => {
    return {
        type: PUT_DATA_BY_ID,
        payload: dataFromServer
    }
}

export const LOAD_DATA_BY_GENRE = 'LOAD_DATA_BY_GENRE';

export const loadDataByGenre = (genre: string) => {
    const url = GET_MOVIES_BY_GENRE_ENDPOINT(genre);

    return {
        type: LOAD_DATA_BY_GENRE,
        payload: url
    }
}

export const PUT_DATA_BY_GENRE = 'PUT_DATA_BY_GENRE';

export const putDataByGenre = (dataFromServer: any) => {
    return {
        type: PUT_DATA_BY_GENRE,
        payload: dataFromServer
    }
}