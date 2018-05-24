import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Body from './components/Body.js';
import Sidebar from './components/Sidebar.js';
import LoginPage from'./components/LoginPage';
import SignupPage from'./components/SignupPage';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { BrowserRouter } from 'react-router-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import {
  cyan500, cyan700,
  pinkA200, black,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

import {fade} from 'material-ui/utils/colorManipulator';

const myTheme = getMuiTheme({
  // palette: {
  //   primary1Color: white,
  //   primary2Color: white,
  //   primary3Color: white,
  //   accent1Color: white,
  //   accent2Color: grey100,
  //   accent3Color: grey500,
  //   textColor: darkBlack,
  //   alternateTextColor: black,
  //   canvasColor: white,
  //   borderColor: grey300,
  //   disabledColor: fade(darkBlack, 0.3),
  //   pickerHeaderColor: cyan500,
  //   clockCircleColor: fade(darkBlack, 0.07),
  //   shadowColor: fullBlack,
  // },
});


class App extends Component {

  componentDidMount() {
  }


  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
        <div className="App">
            <Header />
          <div className="body">
            <Switch>
                <Route path='/login' component={LoginPage}/>
                <Route path='/posts' component={Sidebar}/>
                <Route exact path='/signup' component={SignupPage}/>
            </Switch>
            <Body/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
