import React, { Component } from 'react';
import { Box, Button, Collapsible, Heading, Grommet } from 'grommet';
import { Hpe, Notification } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#FFFFFF'
    },
    font: {
      family: 'Noto Serif',
      size: '14px',
      height: '20px',
    },
  },
};


const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    {...props}
  />
);

class App extends Component {
  state = {
    showSidebar: false,
  }
  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <Box fill>
          <AppBar>
            <Heading level='3' margin='none'> Sudden Impact </Heading>

            <Button
              icon={<Notification />}
              onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))}
            />
          </AppBar>
          <Box Direction='row' flex overflow={{ horizontal: 'hidden' }}>
            <Box flex align='center' justify='center'>
              Some text here
         </Box>

            <Collapsible direction="horizontal" open={showSidebar}>
              <Box
                flex
                width='medium'
                background='light-2'
                elevation='small'
                align='center'
                justify='center'
              >
                sidebar
          </Box>
          </Collapsible>
           
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default App;