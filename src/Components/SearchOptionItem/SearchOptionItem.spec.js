import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { SearchOptionItem } from './SearchOptionItem';

describe('Test options:', () => {
    render(<SearchOptionItem option={['anyData']} select clickAction={() => {}} />);

    it('Check selection:', () => {
        expect(screen.getByText('anyData')).toHaveClass('selected');
        expect(screen.getAllByRole('button').length).toEqual(1);
    });
});
