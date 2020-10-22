import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Movie from '../pages/movie';
import Home from '../pages/home';

export const App = () => (
  <>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/movie'>Movie</Link></li>
    </ul>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/movie' component={Movie}/>
    </Switch>
  </>
);