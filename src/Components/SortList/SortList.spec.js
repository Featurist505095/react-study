import React from 'react';
import { shallow } from '../../enzyme';
import SortListView from './SortListView';

describe('Test SortList:', () => {
    it('Test content', () => {
        const content = shallow(<SortListView sortOptionList={['rating', 'release date']} clickAction={() => {}} sortBy="rating" />);

        expect(content.find('FilmDetailsItem').length).toEqual(2);
    });
});