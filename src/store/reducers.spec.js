import reducer from './reducers';
import { SEARCH_BY, SORT_BY, SORT_DATA, GET_MOVIES, GET_MOVIES_PENDING, GET_MOVIES_FULFILLED, UPDATE_SEARCH_DATA,UPDATE_INPUT_DATA } from './actionCreators';
import { MovieData } from '../entity';

const initialState = {
    movies: MovieData,
    sortOptionList: ['release date', 'rating'],
    sortBy: 'release date',
    searchOptionList: ['TITLE', 'GENRE'],
    searchBy: 'TITLE',
    searchData: '',
    searchInput: '',
    isPending: true,
};

it(`Check reducer ${SEARCH_BY}`, () => {
    const action = {
        type: SEARCH_BY,
        payload: 'GENRE'
    }

    console.log(reducer(initialState, action));
    expect(reducer(initialState, action)).toEqual({

    })
})