import React from 'react';
import { shallow } from '../../enzyme';
import MovieInformation from './MovieInformation';

describe('Test MovieInformation:', () => {
    it('Test content', () => {
        const content = shallow(<MovieInformation genres={['Action', 'Thriller']} title="A Good Day to Die Hard" release_date="2013-02-06" />);

        expect(content.find('.movie-name').exists()).toBe(true);
        expect(content.find('.movie-genre').exists()).toBe(true);
    });
});