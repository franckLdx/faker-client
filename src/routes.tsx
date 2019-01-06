import * as React from 'react';
import { Switch, Route } from 'react-router';
import { Login } from './login';

export const Routes: React.SFC<{}> = () => (
  <Switch>
    <Route component={Login} />
  </Switch>
);