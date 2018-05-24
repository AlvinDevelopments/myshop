import React, { Component } from 'react';
import logo from './logo.svg';
import SearchInput from './SearchInput.js';
import TopNav from './TopNav.js';
import MainNav from './MainNav.js';

import AppBar from 'material-ui/AppBar';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';


import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import CurrencySelector from './CurrencySelector.js';
import Body from './Body';


import Cart from './Cart';

import PostForm from './PostForm';

import { BrowserRouter } from 'react-router-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {PrivateRoute, auth} from './PrivateRoute';


import {
  cyan500, cyan700,
  pinkA200, black,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

import {fade} from 'material-ui/utils/colorManipulator';



const stylesTab = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};


const leftButtons = (
  <div style={{display:'inline'}}>
    <CurrencySelector />
  </div>
);



const styles= {
  title: {
    cursor: 'pointer',
  },
};


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

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}



class Header extends Component {

  constructor(){
    super();
    this.state = {
      buttons: [],
      value: 3,
      postBox: false,
    };
  }

  componentDidMount(){

  }

  handleClick() {
    alert('onClick triggered on the title component');
  }

  postOpen = () =>{
    this.setState({postBox:true});
    console.log('state changed');
  };


    postClose = () =>{
      this.setState({postBox:false});
      console.log('state changed');
    };



  rightButtons = (
    <div>
    </div>
  );


  render(){

    let rightLinks = (

      <div>
        <FlatButton label="Home" href="/"/>
        <FlatButton label="Buy and Sell" href="posts"/>
        <FlatButton label="login" href="/login" />
      </div>
  );

    if(auth.isAuthenticated){
      rightLinks = (  <div>
          <FlatButton label="Home" href="/"/>
          <FlatButton label="Buy and Sell" href="posts"/>
          <FlatButton label="post" onClick={this.postOpen} />
        </div>);
    }
    else{
      rightLinks = (<div>
        <FlatButton label="Home" href="/"/>
        <FlatButton label="Buy and Sell" href="posts"/>
        <FlatButton label="login" href="/login" />
      </div>);
    }



    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.postClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.state.open}
      />,
    ];

    return (
      <div className="header">
        <AppBar
          iconElementLeft={<div/>}
          iconElementRight={rightLinks}
        >
        </AppBar>
      <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
          <AppBar className="top-bar"
          iconElementLeft={leftButtons}
          iconElementRight={this.rightButtons}
          icon={(<SearchInput/>)}
          >
          </AppBar>

          <PostForm open={this.state.postBox} />


      </MuiThemeProvider>
      </div>


    );

  }
}

export default Header;
