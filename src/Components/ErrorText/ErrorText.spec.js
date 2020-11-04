import React from 'react';
import { shallow } from '../../enzyme';
import { ErrorText } from './ErrorText';

describe ('Test error text:', () => {
    it('Test content', () => {
        const content = shallow(<ErrorText />);

        expect(content.find('.error-text').exists()).toBe(true);
    });
})