import React, { Component } from 'react';
import { Box, Button, Collapsible, Grommet, Heading, ResponsiveContext, Layer } from 'grommet';
import { AppBar } from './app-bar';
const { Notification, FormClose } = require('grommet-icons');

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

interface AppState {
  showSidebar: boolean;
}

class App extends Component<{}> {
  state = {
    showSidebar: false
  }

  render() {
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            < Box fill>
              {this.getAppBar()}
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                {this.getBody()}
                {this.state.showSidebar && size !== 'small' && this.getSidebar()}
                {this.state.showSidebar && size === 'small' && this.getLayerSideBar()}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet >
    );
  }

  private toggleSidebar = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  }

  private getAppBar = () =>
    <AppBar>
      <Heading level='3' margin='none'>My App</Heading>
      <Button icon={<Notification />} onClick={this.toggleSidebar} />
    </AppBar>;

  private getBody = () =>
    <Box flex align='center' justify='center'>
      app body
    </Box>;

  private getSidebar = (): React.ReactNode =>
    <Collapsible direction="horizontal" open={this.state.showSidebar}>
      <Box flex width='small' background='light-2' elevation='small' align='center' justify='center'>
        sidebar
      </Box>
    </Collapsible>;

  private getLayerSideBar = (): React.ReactNode =>
    <Layer
      onEsc={this.toggleSidebar}>
      <Box
        background='light-2'
        tag='header'
        justify='end'
        align='center'
        direction='row'
      >
        <Button
          icon={<FormClose />}
          onClick={this.toggleSidebar}
        />
      </Box>
      <Box
        fill
        background='light-2'
        align='center'
        justify='center'
      >
        sidebar
      </Box>
    </Layer>
}

export default App;
