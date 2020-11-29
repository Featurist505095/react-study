import MovieData from '../entity';
import { sortData, toggleSearch, toggleSort, getMovies, updateData, updateInputData, clearMoviesData, getMovieById } from './actionCreators';

describe('Check actionCreators: ', () => {

    it('toggleSearch return', () => {
        const searchToggler = toggleSearch('TITLE');

        expect(searchToggler).toEqual({ type: 'SEARCH_BY', payload: 'TITLE' });
    });

    it('toggleSort return', () => {
        const sortToggler = toggleSort('rating');

        expect(sortToggler).toEqual({ type: 'SORT_BY', payload: 'rating' });
    });

    it('sortData return', () => {
        const sortedData = sortData(MovieData);

        expect(sortedData).toEqual({ type: 'SORT_DATA', payload: MovieData });
    });

    it('getMovies return', () => {
        const gotMovies = getMovies();

        expect(gotMovies).toEqual({ type: 'GET_MOVIES' });
    });

    it('updateData return', () => {
        const updatedData = updateData('any data');

        expect(updatedData).toEqual({ type: 'UPDATE_SEARCH_DATA', payload: 'any data' });
    });

    it('updateInputData return', () => {
        const updatedInputData = updateInputData('another data');

        expect(updatedInputData).toEqual({ type: 'UPDATE_INPUT_DATA', payload: 'another data' });
    });

    it('clearMoviesData return', () => {
        const clearedMoviesData = clearMoviesData();

        expect(clearedMoviesData).toEqual({ type: 'CLEAR_MOVIES_DATA' });
    });
});