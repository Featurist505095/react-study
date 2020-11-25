import React from 'react';
import renderer from 'react-test-renderer';
import { MovieList } from './MovieList';
import { MovieData } from '../../entity';

describe('Test data:', () => {
    const renderedValue = renderer.create(<MovieList MovieData={MovieData} />).toJSON();

    it('Check content length:', () => {
        expect(renderedValue.children.length).toBe(10);
    });
});
