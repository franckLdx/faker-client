import * as React from 'react';
import { Routes } from './routes';
import { ServiceProvider, server } from './data/graphql';
import Container from 'reactstrap/lib/Container';

export const App: React.SFC<{}> = () => (
  <>
    <ServiceProvider value={server}>
      <Routes />
    </ServiceProvider>
  </>
);