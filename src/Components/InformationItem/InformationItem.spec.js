import React from 'react';
import { shallow } from '../../enzyme';
import { InformationItem } from './InformationItem';

describe ('Test InformationItem:', () => {
    it('Test content', () => {
        const content = shallow(<InformationItem text={'some_text'} />);

        expect(content.exists('h3')).toBe(true);
        expect(content.text()).toEqual('some_text');
    });
})