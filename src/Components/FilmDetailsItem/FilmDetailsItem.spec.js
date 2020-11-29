import React from 'react';
import { shallow } from '../../enzyme';
import FilmDetailsItem from './FilmDetailsItem';

describe('Test FilmDetailsItem:', () => {
    it('Test content', () => {
        const content = shallow(<FilmDetailsItem text="rating" clickAction={() => {}} select />);

        expect(content.find('.selected').exists()).toBe(false);
    });

    it('Test content', () => {
        const content = shallow(<FilmDetailsItem text="rating" clickAction={() => {}} />);

        expect(content.find('.selected').exists()).toBe(false);
    });

    it('Test content', () => {
        const content = shallow(<FilmDetailsItem text="rating" clickAction={() => {}} select={false} />);

        expect(content.find('.selected').exists()).toBe(false);
    });
});