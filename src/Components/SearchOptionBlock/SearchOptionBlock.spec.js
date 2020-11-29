import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import store from "../../store/store";
import SearchOptionBlock from './SearchOptionBlock';

describe('Test options:', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route>
              <SearchOptionBlock />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );

    it('Check content length:', () => {
        expect(screen.getAllByRole('button').length).toBe(2);
    });
});