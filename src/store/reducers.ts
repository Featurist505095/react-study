import { FilmDataType } from '../Components/MovieItem/FilmDataType';
import { SearchType, SortType } from '../pages/home/StateType';
import { 
    CLEAR_MOVIES_DATA, CLEAR_SEARCH_DATA, GET_MOVIES, LOAD_DATA, LOAD_DATA_BY_GENRE,
     LOAD_DATA_BY_ID, PUT_DATA, PUT_DATA_BY_GENRE, PUT_DATA_BY_ID, SEARCH_BY, SORT_BY,
    SORT_DATA, UPDATE_INPUT_DATA, UPDATE_SEARCH_DATA } from './actionCreators';

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
        case CLEAR_MOVIES_DATA: {
            return {
                ...state,
                movies: []
            }
        }
        case CLEAR_SEARCH_DATA: {
            return {
                ...state,
                searchData: ''
            }
        }
        case LOAD_DATA: {
            return {
                ...state
            }
        }
        case PUT_DATA: {
            return {
                ...state,
                isPending: false,
                movies: action.payload.data
            }
        }
        case LOAD_DATA_BY_ID: {
            return {
                ...state
            }
        }
        case PUT_DATA_BY_ID: {
            return {
                ...state,
                isPending: false,
                activeMovie: action.payload
            }
        }
        case LOAD_DATA_BY_GENRE: {
            return {
                ...state
            }
        }
        case PUT_DATA_BY_GENRE: {
            return {
                ...state,
                isPending: false,
                movies: action.payload.data
            }
        }
        default:
            return state;
    }
};