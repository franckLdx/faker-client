import * as React from 'react';
import { Switch, Route, RouteComponentProps, Redirect } from 'react-router';
import { Login } from './login';
import { useLoginToken } from './data/data';
import { Home } from './home';

export const Routes: React.SFC<{}> = () => (
  <Switch>
    <Route exact path="/Home" render={PrivateHome} />
    <Route exact path="/Login" component={Login} />
    <Route exact path="/" render={toDefaultage} />
  </Switch>
);

const PrivateHome = makeComponentPrivate(Home);

function makeComponentPrivate(Component: React.ComponentType) {
  return (props: RouteComponentProps<any>): React.ReactNode => {
    const [token] = useLoginToken();
    return token === null ? <Redirect to={"/Login"} /> : <Component />;
  }
}

function toDefaultage(props: RouteComponentProps<any>): React.ReactNode {
  const [token] = useLoginToken();
  const to = token === null ? "/Login" : "/Home";
  return <Redirect to={to} />
}