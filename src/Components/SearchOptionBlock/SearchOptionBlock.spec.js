import React from 'react';
import renderer from 'react-test-renderer';
import { SearchOptionBlock } from './SearchOptionBlock';
import { render, screen } from '@testing-library/react';

describe('Test options:', () => {
    render(<SearchOptionBlock options={["anyData", "anyNewData"]}/>);
    
    it ('Check content length:', () => {
        expect(screen.getAllByRole('button').length).toBe(2);
    });
});