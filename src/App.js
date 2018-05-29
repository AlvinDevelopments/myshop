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


class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
            <Header/>
          <div className="body">
            <Body/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
