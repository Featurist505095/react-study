import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import store from "../../store/store";
import SearchFormView from './SearchFormView';
import SearchForm from './SearchForm';

global.fetch = require("node-fetch");

describe('Test SearchFormView:', () => {
    it('Check content length by SearchFormView:', () => {
        render(
            <Provider store={store}>
              <BrowserRouter>
                <Switch>
                  <Route>
                    <SearchFormView options={['anyData', 'anyNewData']} />
                  </Route>
                </Switch>
              </BrowserRouter>
            </Provider>
        );
        
        expect(screen.getAllByRole('button').length).toBe(3);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('Check content length by SearchForm:', () => {
        render(
            <Provider store={store}>
              <BrowserRouter>
                <Switch>
                  <Route>
                    <SearchForm />
                  </Route>
                </Switch>
              </BrowserRouter>
            </Provider>
          );

        expect(screen.getAllByRole('button').length).toBe(3);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
});