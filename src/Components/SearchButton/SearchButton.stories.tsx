/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchButton from './SearchButton';


export default {
  title: 'Header/SearchButton',
  component: SearchButton,
} as Meta;

const Template: Story = (args) => (
  <BrowserRouter>
    <Switch>
      <Route>
        <SearchButton {...args} />
      </Route>
    </Switch>
  </BrowserRouter>

);

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};
