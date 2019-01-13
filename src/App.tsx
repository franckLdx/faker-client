import * as React from 'react';
import { Routes } from './routes';
import { Grommet } from 'grommet/components/Grommet';
import { Box } from 'grommet/components/Box';
import { ServiceProvider, server } from './api/graphql';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    }
  },
};

export const App: React.SFC<{}> = () => (
  <Grommet theme={theme} full>
    <ServiceProvider value={server}>
      <Box fill>
        <Routes />
      </Box>
    </ServiceProvider>
  </Grommet >
);