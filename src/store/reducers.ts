import { FilmDataType } from '../Components/MovieItem/FilmDataType';
import { SearchType, SortType } from '../pages/home/StateType';
import { CLEAR_MOVIES_DATA, GET_MOVIES, GET_MOVIES_ERROR, GET_MOVIES_FULFILLED, GET_MOVIES_PENDING, GET_MOVIE_BY_ID, GET_MOVIE_BY_ID_ERROR, GET_MOVIE_BY_ID_FULFILLED, GET_MOVIE_BY_ID_PENDING, SEARCH_BY, SORT_BY, SORT_DATA, UPDATE_INPUT_DATA, UPDATE_SEARCH_DATA } from './actionCreators';

type IInitialState = {
    movies: FilmDataType[],
    sortOptionList: SortType[],
    sortBy: SortType,
    searchOptionList: SearchType[],
    searchBy: SearchType,
    searchData: string,
    searchInput: string,
    activeMovie: FilmDataType | undefined,
    isPending: boolean
}

const initialState: IInitialState = {
    movies: [],
    sortOptionList: ['release date', 'rating'],
    sortBy: 'release date',
    searchOptionList: ['TITLE', 'GENRE'],
    searchBy: 'TITLE',
    searchData: '',
    searchInput: '',
    activeMovie: undefined,
    isPending: true,
  };

  export const stateSelector = (state: IInitialState) => state;

export const reducer = (state: IInitialState = initialState, action: { type: string; payload?: any }) => {
    switch (action.type) {
        case SEARCH_BY: {
            return {
                ...state,
                searchBy: action.payload
            };
        }
        case SORT_BY: {
            return {
                ...state,
                sortBy: action.payload
            };
        }
        case SORT_DATA: {
            return {
                ...state,
                movies: action.payload
            };
        }
        case GET_MOVIES: {
            return {
                ...state
            };
        }
        case GET_MOVIES_ERROR: {
            return {
                ...state,
                isPending: false,    
            };
        }
        case GET_MOVIES_PENDING: {
            return {
                ...state,
                isPending: true,    
            };
        }
        case GET_MOVIES_FULFILLED: {
            return {
                ...state,
                isPending: false,
                movies: action.payload.data
            }
        }
        case UPDATE_SEARCH_DATA: {
            return {
                ...state,
                searchData: action.payload
            };
        }
        case UPDATE_INPUT_DATA: {
            return {
                ...state,
                searchInput: action.payload
            }
        }
        case GET_MOVIE_BY_ID: {
            return {
                ...state,
            }
        }
        case GET_MOVIE_BY_ID_ERROR: {
            return {
                ...state,
                isPending: false
            }
        }
        case GET_MOVIE_BY_ID_PENDING: {
            return {
                ...state,
                isPending: true
            }
        }
        case GET_MOVIE_BY_ID_FULFILLED: {
            return {
                ...state,
                isPending: false,
                activeMovie: action.payload
            }
        }
        case CLEAR_MOVIES_DATA: {
            return {
                ...state,
                movies: {}
            }
        }
        default:
            return state;
    }
};