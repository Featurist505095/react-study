/*
import reducer from './reducers';
import {
    SEARCH_BY, SORT_BY, SORT_DATA, GET_MOVIES, GET_MOVIES_PENDING, GET_MOVIES_FULFILLED, UPDATE_SEARCH_DATA, UPDATE_INPUT_DATA
} from './actionCreators';
import { MovieData } from '../entity';


*/
import MovieData from '../entity';
import { reducer } from './reducers';

const initialState = {
    movies: MovieData,
    sortOptionList: ['release date', 'rating'],
    sortBy: 'release date',
    searchOptionList: ['TITLE', 'GENRE'],
    searchBy: 'TITLE',
    searchData: '',
    searchInput: '',
    isPending: true
};

describe('Check reducers: ', ()=> {
    it('SEARCH_BY return', () => {
        let state = { searchBy: 'TITLE' };
        state = reducer(state, { type: 'SEARCH_BY', payload: 'GENRE' });

        expect(state).toEqual({ searchBy: 'GENRE' });
    });

    it('SORT_BY return', () => {
        let state = { sortBy: 'release date' };
        state = reducer(state, { type: 'SORT_BY', payload: 'rating' });

        expect(state).toEqual({ sortBy: 'rating' });
    });

    it('SORT_DATA return', () => {
        let state = { movies: 'release date' };
        state = reducer(state, { type: 'SORT_DATA', payload: MovieData });

        expect(state).toEqual({ movies: MovieData });
    });

    it('GET_MOVIES return', () => {
        let state = { movies: MovieData[0] };
        state = reducer(state, { type: 'GET_MOVIES' });

        expect(state).toEqual({ movies: MovieData[0] });
    });

    it('GET_MOVIES_ERROR return', () => {
        let state = { isPending: true };
        state = reducer(state, { type: 'GET_MOVIES_ERROR' });

        expect(state).toEqual({ isPending: false });
    });

    it('GET_MOVIES_PENDING return', () => {
        let state = { isPending: false };
        state = reducer(state, { type: 'GET_MOVIES_PENDING' });

        expect(state).toEqual({ isPending: true });
    });

    it('GET_MOVIES_FULFILLED return', () => {
        let state = { isPending: true, movies: MovieData };
        state = reducer(state, { type: 'GET_MOVIES_FULFILLED', payload: { data: MovieData } });

        expect(state).toEqual({ isPending: false, movies: MovieData });
    });

    it('UPDATE_SEARCH_DATA return', () => {
        let state = { searchData: '' };
        state = reducer(state, { type: 'UPDATE_SEARCH_DATA', payload: 'another data' });

        expect(state).toEqual({ searchData: 'another data' });
    });

    it('UPDATE_INPUT_DATA return', () => {
        let state = { searchInput: '' };
        state = reducer(state, { type: 'UPDATE_INPUT_DATA', payload: 'update input' });

        expect(state).toEqual({ searchInput: 'update input' });
    });

    it('GET_MOVIE_BY_ID return', () => {
        let state = { movies: MovieData[0] };
        state = reducer(state, { type: 'GET_MOVIE_BY_ID' });

        expect(state).toEqual({ movies: MovieData[0] });
    });

    it('GET_MOVIE_BY_ID_ERROR return', () => {
        let state = { isPending: true };
        state = reducer(state, { type: 'GET_MOVIE_BY_ID_ERROR' });

        expect(state).toEqual({ isPending: false });
    });

    it('GET_MOVIE_BY_ID_PENDING return', () => {
        let state = { isPending: false };
        state = reducer(state, { type: 'GET_MOVIE_BY_ID_PENDING' });

        expect(state).toEqual({ isPending: true });
    });

    it('GET_MOVIE_BY_ID_FULFILLED return', () => {
        let state = { isPending: true, activeMovie: {} };
        state = reducer(state, { type: 'GET_MOVIE_BY_ID_FULFILLED', payload: MovieData[0] });

        expect(state).toEqual({ isPending: false, activeMovie: MovieData[0] });
    });

    it('CLEAR_MOVIES_DATA return', () => {
        let state = { movies: MovieData };
        state = reducer(state, { type: 'CLEAR_MOVIES_DATA' });

        expect(state).toEqual({ movies: [] });
    });

    it('CLEAR_SEARCH_DATA return', () => {
        let state = { searchData: 'text' };
        state = reducer(state, { type: 'CLEAR_SEARCH_DATA' });

        expect(state).toEqual({ searchData: '' });
    });
});
