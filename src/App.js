import React, { Component } from 'react';
import {
  Box,
  Button,
  Grommet,
  Layer,
  Tabs,
  Grid,
  Text,
  TextArea,
  ResponsiveContext,
  Heading,
  Collapsible
} from 'grommet';
import { FormClose, Home, UserSettings } from 'grommet-icons';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { FulfillingBouncingCircleSpinner } from 'react-epic-spinners';
import { push as Menu } from 'react-burger-menu'
import SideBar from './sidebar';
import { storiesOf } from "@storybook/react";
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { grommet } from "grommet/themes";
import { Form, Col, Row } from 'react-bootstrap';


const theme = {
  global: {
    colors: {
      brand: '#FFFFFF'
    },
    font: {
      family: 'Lato',
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

  // class Example extends React.Component {
  // showSettings(event) {
  //   event.preventDefault();



  // }


  //   render() {
  //     return (
  //       <Box>

  //         <div id="outer-container">

  //           <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
  //           <div class="container">

  //             <header>
  //               <h1>SuddenImpact</h1>
  //             </header>

  //             <nav>
  //               dddd
  //             </nav>

  //             <main>
  //               <div class="w3-container">
  //                 <h2>With a Container</h2>
  //                 <p>The w3-container class is one of the most important W3.CSS classes.</p>
  //                 <p>It provides correct margins, padding, alignments, and more, to most HTML elements.</p>
  //               </div>
  //             </main>

  //             <aside>
  //               Sidebar / Ads
  //   </aside>

  //             <footer>
  //               Footer content
  //   </footer>
  //           </div>

  //         </div>
  //       </Box>


  //     );
  //   }
  // }
  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Heading margin="none">Sudden Impact</Heading>
                <h3>John Doe </h3>
                <Button
                  icon={<Home />}
                  
                  onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))}
                />
                
              </AppBar>
              <Box Direction='row' flex overflow={{ horizontal: 'hidden' }}>
               
                  <div>
                    <Nav tabs>
                      <NavItem>
                        <NavLink href="#" active>Link</NavLink>
                      </NavItem>
                      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle nav caret>
                          Dropdown
            </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                      <NavItem>
                        <NavLink href="#">Link</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">Another Link</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink disabled href="#">Disabled Link</NavLink>
                      </NavItem>
                    </Nav>

                  </div>

              


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
// function Example() {
//   const [value, setValue] = React.useState('');
// }

// class AppGrid extends Component {
//   state = { sidebar: true };

//   render() {
//     const { sidebar } = this.state;
//     return (
//       <Grommet full theme={grommet}>
//         <Grid
//           fill
//           rows={["auto", "flex"]}
//           columns={["auto", "flex"]}
//           areas={[
//             { name: "header", start: [0, 0], end: [1, 0] },
//             { name: "sidebar", start: [0, 1], end: [0, 1] },
//             { name: "main", start: [1, 1], end: [1, 1] }
//           ]}
//         >
//           <Box
//             gridArea="header"
//             direction="row"
//             align="center"
//             justify="between"
//             pad={{ horizontal: "medium", vertical: "medium" }}
//             background="neutral-4"
//           >
//             <Button onClick={() => this.setState({ sidebar: !sidebar })}>
//               <Text size="xlarge">SuddenImpact</Text>
//             </Button>

//             <Button
//               icon={<UserSettings />}
//               Text=""
//             />
//             <Text>John, Doe</Text>
//           </Box>
//           {sidebar && (
//             <Box
//               gridArea="sidebar"
//               background="light-1"
//               width="medium"
//               animation={[
//                 { type: "fadeIn", duration: 300 },
//                 { type: "slideRight", size: "xlarge", duration: 150 }
//               ]}
//             >
//               {["First", "Second", "Third"].map(name => (
//                 <Button key={name} href="#" hoverIndicator>
//                   <Box pad={{ horizontal: "medium", vertical: "small" }}>
//                     <Text>{name}</Text>
//                   </Box>
//                 </Button>
//               ))}
//             </Box>
//           )}
//           <Box gridArea="main" justify="start" align="stretch">

//             <div class="container">


//               <Form>
//                 <Form.Group as={Row} controlId="formPlaintextEmail">
//                   <Form.Label column sm="2">
//                     Email
//     </Form.Label>
//                   <Col sm="10">
//                     <Form.Control plaintext readOnly defaultValue="email@example.com" />
//                   </Col>
//                 </Form.Group>

//                 <Form.Group as={Row} controlId="formPlaintextPassword">
//                   <Form.Label column sm="2">
//                     P/W
//     </Form.Label>
//                   <Col sm="10">
//                     <Form.Control type="password" placeholder="Password" />
//                   </Col>
//                 </Form.Group>
//               </Form>
//               <div class="content">
//                 Test
//               <TextArea></TextArea></div>

//             </div>




//           </Box>
//         </Grid>
//       </Grommet>
//     );
//   }
// }



export default App;