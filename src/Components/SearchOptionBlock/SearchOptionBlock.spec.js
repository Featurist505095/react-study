import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { SearchOptionBlock } from './SearchOptionBlock';

describe('Test options:', () => {
    render(<SearchOptionBlock options={['anyData', 'anyNewData']} />);

    it('Check content length:', () => {
        expect(screen.getAllByRole('button').length).toBe(2);
    });
});
