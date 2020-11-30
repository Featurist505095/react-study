import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from "../../store/store";
import SearchOptionsListView from './SearchOptionListView';

describe('Test SearchOptionsListView:', () => {
    const renderedValue = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route>
              <SearchOptionsListView searchOptionsList={['anyData']} selected="anyData" />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    ).toJSON();

    it('Check content length:', () => {
        expect(renderedValue.children.length).toBe(1);
    });
});