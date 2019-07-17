import React, { Component } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
} from 'grommet';
import { FormClose, Home } from 'grommet-icons';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {FulfillingBouncingCircleSpinner} from 'react-epic-spinners';




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
    button: {
      border: {
        width: '1px',
        radius: '4px',
      },
      padding: {
        vertical: '8px',
        horizontal: '16px',
      },
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
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Heading margin="none">Sudden Impact</Heading>
                <Button
                  icon={<Home />}
                  onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))}
                />
              </AppBar>
              <Box Direction='row' flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align='center' justify='center'>
                  <FulfillingBouncingCircleSpinner color="black">
                  </FulfillingBouncingCircleSpinner>
                </Box>
              </Box>
              <Box>
                {(!showSidebar || size !== 'small') ? (
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

                ) : (
                    <Layer>
                      <Box
                        background='light-2'
                        tag='header'
                        justify='end'
                        align='center'
                        direction='row'
                      >
                        <Button
                          icon={<FormClose />}
                          onClick={() => this.setState({ showSidebar: false })}
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
                  )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;