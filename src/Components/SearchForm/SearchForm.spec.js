import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { SearchForm } from './SearchForm';

describe('Test options:', () => {
    render(<SearchForm options={['anyData', 'anyNewData']} />);

    it('Check content length:', () => {
        expect(screen.getAllByRole('button').length).toBe(3);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
});
