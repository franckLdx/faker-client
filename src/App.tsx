import { Box, Button, Collapsible, Grommet, Heading, ResponsiveContext } from 'grommet';
import React, { Component } from 'react';
import { AppBar } from './app-bar';
const { Notification } = require('grommet-icons');

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
                {size !== 'small' && this.getSidebar()}
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
      <Box flex width='medium' background='light-2' elevation='small' align='center' justify='center'>
        sidebar
      </Box>
    </Collapsible>;
}

export default App;
