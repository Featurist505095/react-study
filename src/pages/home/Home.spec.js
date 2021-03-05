import React from 'react';
import { shallow } from '../../enzyme';
import HomeView from './HomeView';
import MovieData from '../../entity';

describe('Test HomeView:', () => {
    it('Test content', () => {
        const content = shallow(<HomeView movies={MovieData} />);

        expect(content.find('Header').length).toEqual(1);
        expect(content.find('FilmDetailsBlock').length).toEqual(1);
        expect(content.find('MovieList').length).toEqual(1);
        expect(content.find('Footer').length).toEqual(1);
    });
});