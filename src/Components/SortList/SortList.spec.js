import React from 'react';
import { shallow } from '../../enzyme';
import { SortList } from './SortList';
import { FilmDetailsItem } from '../FilmDetailsItem/FilmDetailsItem';

describe ('Test SortList:', () => {
    it('Test content', () => {
        const content = shallow(<SortList criteria={["rating", "release date"]} clickAction={()=>{}} selected={"rating"} />);

        expect(content.find('FilmDetailsItem').length).toEqual(2);
    });
})