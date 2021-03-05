import React from 'react';
import { shallow } from '../../enzyme';
import MovieView from './MovieView';
import MovieData from '../../entity';

describe('Test MovieView:', () => {
    it('Test content', () => {
        const content = shallow(<MovieView activeMovie={MovieData[0]} genre={MovieData[0].genres[0]} movies={MovieData} />);

        expect(content.find('Header').length).toEqual(1);
        expect(content.find('FilmDetailsBlock').length).toEqual(1);
        expect(content.find('MovieList').length).toEqual(1);
        expect(content.find('Footer').length).toEqual(1);
    });
});