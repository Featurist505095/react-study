import React from 'react';
import { shallow } from '../../enzyme';
import FilmDetailsItem from './FilmDetailsItem';

describe('Test FilmDetailsItem:', () => {
    it('Test not selected', () => {
        const content = shallow(<FilmDetailsItem text="rating" clickAction={() => {}} />);

        expect(content.find('.selected').exists()).toBe(false);
    });

    it('Test selected', () => {
        const content = shallow(<FilmDetailsItem text="rating" clickAction={() => {}} selected={'rating'} />);

        expect(content.find('.selected').exists()).toBe(true);
    });
});