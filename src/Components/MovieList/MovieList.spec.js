import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './MovieList';
import MovieData from '../../entity';

describe('Test data:', () => {
    const renderedValue = renderer.create(
      <BrowserRouter>
        <Switch>
          <Route>
            <MovieList MovieData={MovieData} />
          </Route>
        </Switch>
      </BrowserRouter>
    ).toJSON();

    it('Check content length:', () => {
        expect(renderedValue.children.length).toBe(10);
    });
});