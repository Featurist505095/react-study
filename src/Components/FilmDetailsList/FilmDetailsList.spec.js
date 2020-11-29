import React from 'react';
import { shallow } from '../../enzyme';
import FilmDetailsList from './FilmDetailsList';

describe('Test FilmDetailsList:', () => {
    it('Test content', () => {
        const content = shallow(<FilmDetailsList selected="rating" clickAction={() => {}} />);

        expect(content.find('InformationItem').exists()).toBe(true);
        expect(content.exists('SortList')).toBe(false);
    });
});