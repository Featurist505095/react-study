import React from 'react';
import { shallow } from '../../enzyme';
import { MovieImage } from './MovieImage';

describe ('Test movie image:', () => {
    it('Test content', () => {
        const content = shallow(<MovieImage poster_path={"url_to_image"} />);

        expect(content.find('.movie-image[src="url_to_image"]').exists()).toBe(true);
    });
})