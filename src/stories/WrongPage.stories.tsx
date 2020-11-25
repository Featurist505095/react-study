/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WrongPage from '../Components/WrongPage';


export default {
  title: 'Main/WrongPage',
  component: WrongPage,
} as Meta;

const Template: Story = () => (
  <BrowserRouter>
    <Switch>
      <Route>
        <WrongPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};