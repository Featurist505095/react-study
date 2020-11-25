import React from 'react';
import { shallow } from '../../enzyme';
import { MovieItem } from './MovieItem';
import { MovieImage } from '../MovieImage/MovieImage';

describe('Test options:', () => {
    const content = shallow(<MovieItem title="A Good Day to Die Hard" release_date="2013-02-06" genres={['Action', 'Thriller']} poster_path="https://image.tmdb.org/t/p/w500/c2SQMd00CCGTiDxGXVqA2J9lmzF.jpg" />);

    it('Check content creation:', () => {
        expect(content.find('MovieImage').length).toEqual(1);
    });
});
