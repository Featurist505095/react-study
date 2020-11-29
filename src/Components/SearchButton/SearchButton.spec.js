import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import SearchButton from './SearchButton';

describe('Test options:', () => {
    render(
        <BrowserRouter>
          <Switch>
            <Route>
              <SearchButton size="small" />
            </Route>
          </Switch>
        </BrowserRouter>
    );
        

    it('Check button size:', () => {
        expect(screen.getByRole('button')).toHaveClass('small');
    });
});