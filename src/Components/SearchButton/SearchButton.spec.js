import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { SearchButton } from './SearchButton';

describe('Test options:', () => {
    render(<SearchButton size="small" />);

    it('Check button size:', () => {
        expect(screen.getByRole('button')).toHaveClass('small');
    });
});
