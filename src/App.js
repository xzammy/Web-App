import React, { Component } from 'react';
import { Box, Button, Heading, Grommet } from 'grommet';
import { Hpe , Notification } from'grommet-icons';

const theme = {
  global:{
    colors:{
      brand:'#FFFFFF'
    },
    font:{
      family: 'Noto Serif',
      size: '14px',
      height: '20px',
    },
  },
};


const AppBar = (props) => (
  <Box
    tag= 'header'
    direction ='row'
    align= 'center'
    justify='between'
    background='brand'
    pad={{ left:'medium', right:'small', vertical: 'small'}}
    elevation='medium'
    {...props}
    />
);

class App extends Component {
  render() {
    return (
      <Grommet theme={theme}>
        <AppBar>
        
         <Heading level='3' margin='none'> Sudden Impact </Heading>
         <Hpe color='plain' />
         <Button icon={<Notification />} onClick={() =>{}}/>
        </AppBar>
      </Grommet>
    );
  }
}

export default App;