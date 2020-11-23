import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import { Movie } from '../pages/movie';
import Home from '../pages/home';
import { ErrorText } from "../Components/ErrorText";

export const App = () => (
    <Switch>
      <Redirect exact from="/" to="/search" />
      <Route path='/search' component={Home}/>
      <Route path="/film/:id" component={Movie}/>
      <Route component={ErrorText} />
    </Switch>
);