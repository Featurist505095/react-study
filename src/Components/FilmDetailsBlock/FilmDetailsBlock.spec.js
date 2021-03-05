import React from 'react';
import { shallow } from '../../enzyme';
import FilmDetailsBlock from './FilmDetailsBlock';

describe('Test FilmDetailsBlock:', () => {
    it('Test with genre', () => {
        const content = shallow(<FilmDetailsBlock genre="Action" />);

        expect(content.find('.film-details-list').exists()).not.toBe(true);
    });

    it('Test without genre', () => {
        const content = shallow(<FilmDetailsBlock />);

        expect(content.find('.film-details-list').exists()).toBe(false);
    });
});
