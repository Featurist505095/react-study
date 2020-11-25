import React from 'react';
import renderer from 'react-test-renderer';
import { SearchOptionsList } from './SearchOptionsList';

describe('Test options:', () => {
    const renderedValue = renderer.create(<SearchOptionsList options={['anyData']} selected="anyData" />).toJSON();

    it('Check content length:', () => {
        expect(renderedValue.children.length).toBe(1);
    });
});
