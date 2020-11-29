import React from 'react';
import { shallow } from '../../enzyme';
import WrongPage from './WrongPage';

describe('Test WrongPage:', () => {
    it('Test content', () => {
        const content = shallow(<WrongPage />);

        expect(content.find('ErrorText').length).toEqual(1);
        expect(content.find('SearchButton').length).toEqual(1);
    });
});