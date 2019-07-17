import React, { Component } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  Grid,
  Text,
  ResponsiveContext,
} from 'grommet';
import { FormClose, Home } from 'grommet-icons';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { FulfillingBouncingCircleSpinner } from 'react-epic-spinners';
import { push as Menu } from 'react-burger-menu'
import SideBar from './sidebar';


import { storiesOf } from "@storybook/react";

import { grommet } from "grommet/themes";



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



// class App extends Component {
//   state = {
//     showSidebar: false,
//   }

//   // class Example extends React.Component {
//   //   showSettings(event) {
//   //     event.preventDefault();



//   //   }


//   // render() {
//   //   return (
//   //     <Box>

//   //       <div id="outer-container">

//   //         <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
//   //         <div class="container">

//   //           <header>
//   //             <h1>SuddenImpact</h1>
//   //           </header>

//   //           <nav>
//   //             dddd
//   //           </nav>

//   //           <main>
//   //             <div class="w3-container">
//   //               <h2>With a Container</h2>
//   //               <p>The w3-container class is one of the most important W3.CSS classes.</p>
//   //               <p>It provides correct margins, padding, alignments, and more, to most HTML elements.</p>
//   //             </div>
//   //           </main>

//   //           <aside>
//   //             Sidebar / Ads
//   // </aside>

//   //           <footer>
//   //             Footer content
//   // </footer>
//   //         </div>

//   //       </div>
//   //     </Box>


//   //   );
//   // }
//   //}
//   render() {
//     const { showSidebar } = this.state;
//     return (
//       <Grommet theme={theme} full>
//         <ResponsiveContext.Consumer>
//           {size => (
//             <Box fill>
//               <AppBar>
//                 <Heading margin="none">Sudden Impact</Heading>
//                 <Button
//                   icon={<Home />}
//                   onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))}
//                 />
//               </AppBar>
//               <Box Direction='row' flex overflow={{ horizontal: 'hidden' }}>
//                 <Box flex align='center' justify='center'>




//                 </Box>


//               </Box>
//               <Box>
//                 {(!showSidebar || size !== 'small') ? (
//                   <Collapsible direction="horizontal" open={showSidebar}>
//                     <Box
//                       flex
//                       width='medium'
//                       background='light-2'
//                       elevation='small'
//                       align='center'
//                       justify='center'
//                     >
//                       sidebar
//           </Box>
//                   </Collapsible>

//                 ) : (
//                     <Layer>
//                       <Box
//                         background='light-2'
//                         tag='header'
//                         justify='end'
//                         align='center'
//                         direction='row'
//                       >
//                         <Button
//                           icon={<FormClose />}
//                           onClick={() => this.setState({ showSidebar: false })}
//                         />
//                       </Box>

//                       <Box
//                         fill
//                         background='light-2'
//                         align='center'
//                         justify='center'
//                       >
//                         sidebar
//                 </Box>
//                     </Layer>
//                   )}
//               </Box>
//             </Box>
//           )}
//         </ResponsiveContext.Consumer>
//       </Grommet>
//     );
//   }
// }




class AppGrid extends Component {
  state = { sidebar: true };

  render() {
    const { sidebar } = this.state;
    return (
      <Grommet full theme={grommet}>
        <Grid
          fill
          rows={["auto", "flex"]}
          columns={["auto", "flex"]}
          areas={[
            { name: "header", start: [0, 0], end: [1, 0] },
            { name: "sidebar", start: [0, 1], end: [0, 1] },
            { name: "main", start: [1, 1], end: [1, 1] }
          ]}
        >
          <Box
            gridArea="header"
            direction="row"
            align="center"
            justify="between"
            pad={{ horizontal: "medium", vertical: "small" }}
            background="dark-2"
          >
            <Button onClick={() => this.setState({ sidebar: !sidebar })}>
              <Text size="large">SuddenImpact</Text>
            </Button>
            <Text>my@email</Text>
          </Box>
          {sidebar && (
            <Box
              gridArea="sidebar"
              background="dark-3"
              width="small"
              animation={[
                { type: "fadeIn", duration: 300 },
                { type: "slideRight", size: "xlarge", duration: 150 }
              ]}
            >
              {["First", "Second", "Third"].map(name => (
                <Button key={name} href="#" hoverIndicator>
                  <Box pad={{ horizontal: "medium", vertical: "small" }}>
                    <Text>{name}</Text>
                  </Box>
                </Button>
              ))}
            </Box>
          )}
          <Box gridArea="main" justify="center" align="center">
            <Text>main</Text>
          </Box>
        </Grid>
      </Grommet>
    );
  }
}



export default AppGrid;