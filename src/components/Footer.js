import React, { Component } from 'react';
import logo from './logo.svg';
import SearchInput from './SearchInput.js';
import TopNav from './TopNav.js';
import './main.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
  cyan500, cyan700,
  pinkA200, black,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

import {fade} from 'material-ui/utils/colorManipulator';


const myTheme = getMuiTheme({
  palette: {
    primary1Color: white,
    primary2Color: white,
    primary3Color: white,
    accent1Color: white,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: black,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
});


class Footer extends Component {

  constructor(){
    super();
    this.state = {
      buttons: [],

    }
  }

  componentDidMount(){

  }


  render(){

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
        <footer className="footer"
        style={
          {
            textDecoration: 'none',
          }
        }
        >
        
          <a className="footer-links" href='#' >Hours</a><br/>
          <a className="footer-links" href='#' >About Us</a><br/>
          <a className="footer-links" href='#' >Contact</a><br/>
          <a className="footer-links" href='#' >Shipping</a><br/>

        </footer>
      </MuiThemeProvider>


    )

  }


}

export default Footer;
