import React from 'react';
import renderer from 'react-test-renderer';
import { SearchForm } from './SearchForm';
import { render, screen } from '@testing-library/react';

describe('Test options:', () => {
    render(<SearchForm options={["anyData", "anyNewData"]}/>);
    
    it ('Check content length:', () => {
        expect(screen.getAllByRole('button').length).toBe(3);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
});