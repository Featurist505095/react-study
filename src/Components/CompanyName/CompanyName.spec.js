import React from 'react';
import { shallow } from '../../enzyme';
import { CompanyName } from './CompanyName';

describe('Test company name:', () => {
    it('Test content', () => {
        const content = shallow(<CompanyName />);

        expect(content.find('.company-name').exists()).toBe(true);
    });
});
