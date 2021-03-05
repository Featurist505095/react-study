import React from 'react';
import renderer from 'react-test-renderer';
import SearchFormInput from './SearchFormInput';

describe('Test SearchFormInput:', () => {
    const renderedValue = renderer.create(<SearchFormInput changeAction={() => {}} />).toJSON();

    it('Check content :', () => {
        expect(renderedValue.children.length).toBe(2);
    });
});