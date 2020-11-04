import React from 'react';
import renderer from 'react-test-renderer';
import { SearchOptionItem } from './SearchOptionItem';
import { render, screen } from '@testing-library/react';

describe('Test options:', () => {
    render(<SearchOptionItem option={["anyData"]} select={true} clickAction={()=>{}}/>)

    it ('Check selection:', () => {
        expect(screen.getByText('anyData')).toHaveClass('selected');
        expect(screen.getAllByRole('button').length).toEqual(1);
    });
});