/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import MovieCard from './MovieCard';
import MovieData from '../../entity';

export default {
  title: 'Main/MovieCard',
  component: MovieCard,
} as Meta;

const Film = MovieData[0];
const Template: Story = () => (
  <BrowserRouter>
    <Switch>
      <Route>
        <MovieCard {...Film} />
      </Route>
    </Switch>
  </BrowserRouter>    
);

export const Default = Template.bind({});
Default.args = {};