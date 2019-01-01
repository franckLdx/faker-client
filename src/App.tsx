import React, { Component } from 'react';
import { Grommet } from 'grommet';
import logo from './logo.svg';
import { AppBar } from './app-bar';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

class App extends Component {
  render() {
    return (
      <Grommet theme={theme}>
        <AppBar>Hello Grommet!</AppBar>
      </Grommet>
    );
  }
}

export default App;
