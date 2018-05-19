import React, { Component } from 'react';
import logo from './logo.svg';
import SearchInput from './SearchInput.js';


import AppBar from 'material-ui/AppBar';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500, grey700,
  white, darkBlack, fullBlack, darkGrey
} from 'material-ui/styles/colors';

import {fade} from 'material-ui/utils/colorManipulator';


import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';


import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import NavMenu from './NavMenu.js';


import Body from './Body.js';

import './main.css';


const navTheme = getMuiTheme({
  palette: {
    primary1Color: white,
    primary2Color: white,
    primary3Color: white,
    accent1Color: white,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: grey700,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
});

const menuStyle = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};



class MainNav extends Component {

  constructor(props){
    super(props);
    this.state = {
      term:'',
      isLoggedIn:false,
      items:[
        {
          hover: false,
          display:'none',
          postion: 'absolute'
        },
        {
          hover: false,
          display:'none',
          postion: 'absolute'
        },
        {
          hover: false,
          display:'none',
          postion: 'absolute'
        },
        {
          hover: false,
          display:'none',
          postion: 'absolute'
        },
        {
          hover: false,
          display:'none',
          postion: 'absolute'
        }],
      style:{
        'backgroundColor':'white',
      },
      currentBody:(<Body category="mens" color="white" />),
    };
  }

  handleMouseEnter = (num, event) => {
    let styles = this.state.items.slice();

    styles.forEach(function(element){
      if(styles.indexOf(element)!==num){
        styles[styles.indexOf(element)] = {
          zIndex: 0,
          display:'none',
          position: 'absolute',
          width: '100%'
        };
      }
      else{
        styles[styles.indexOf(element)] = {
        zIndex: 1,
        display:'block',
        position: 'absolute',
        width: '100%'
        };
      }
    });

    // event.target.style = style;
    // this.setState({items:styles});

  }

  handleMouseLeave = (num, event) => {
    // console.log('num '+num+' leaving.');
    let styles = this.state.items.slice();
    styles[num] = {
      display:'none',
      position: 'block'
    };
    this.setState({items:styles});
    // let style = {display:'none'};
    // event.target.style = style;
  }

  closeAll = (event)=>{
    let styles = this.state.items.slice();
    styles.forEach(function(element){
        styles[styles.indexOf(element)] = {
          display:'none',
          position: 'block',
          width: '100%'
        };
    });

    this.setState({items:styles});

  }


  componentDidMount(){

  }

  onChange = (event)=>{
    var status = false
    event.target.value !== '' ? status=false : status=true;

    this.setState({term:event.target.value, isEmpty:status});
  }

  onClick = (event) => {
    if(this.state.isEmpty){
      this.setState({term:''});
    }
  }

  onSubmit(){

  }


  render(){
    return (

      <MuiThemeProvider muiTheme={getMuiTheme(navTheme)}>

        <Body category="mens"/>

      </MuiThemeProvider>

    )

  }


}

export default MainNav;
