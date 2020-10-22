import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Movie from '../pages/movie';
import Home from '../pages/home';

export const App = () => (
  <>
    <ul>
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/'>Movie</Link></li>
    </ul>
    <Switch>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/' component={Movie}/>
    </Switch>
  </>
);