import React from 'react';
import { shallow } from '../../enzyme';
import FilmDetailsBlock from './FilmDetailsBlock';

describe('Test error text:', () => {
    it('Test content', () => {
        const content = shallow(<FilmDetailsBlock genre="Action" />);

        expect(content.find('.film-details-list').exists()).not.toBe(true);
    });

    it('Test content', () => {
        const content = shallow(<FilmDetailsBlock />);

        expect(content.find('.film-details-list').exists()).toBe(false);
    });
});
