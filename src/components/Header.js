import React, { Component } from 'react';
import logo from './logo.svg';
import SearchInput from './SearchInput.js';
import TopNav from './TopNav.js';
import MainNav from './MainNav.js';

import AppBar from 'material-ui/AppBar';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';


import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';



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



const rightButtons = (
  <div>
      <FlatButton label="About" />
      <FlatButton label="Home" />
      <br/>
      <form style={{align: 'right', position: 'relative', display: 'inline-block'}}>
        <TextField
          hintText="Search"
          icon
        />

        <IconButton style={{position: 'absolute', right: 0}} disabled={false}>
          <ActionSearch />
        </IconButton>
      </form>
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
      value: 1,

    };

    this.leftButtons = (
      <div>
        SELECT CURRENCY
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="USD" />
          <MenuItem value={2} primaryText="CAD" />
          <MenuItem value={3} primaryText="EUR" />
          <MenuItem value={4} primaryText="GBP" />
          <MenuItem value={5} primaryText="AUD" />
        </DropDownMenu>
      </div>
    );

  }

  componentDidMount(){

  }

  handleClick() {
    alert('onClick triggered on the title component');
  }




  render(){

    return (
      <MuiThemeProvider  muiTheme={getMuiTheme(myTheme)}>

          <AppBar className="top-bar"
          iconElementLeft={this.leftButtons}
          iconElementRight={rightButtons}

          />

          <MainNav
          title={<img src={logo} className="App-logo" alt="logo" />}
          titleStyle={
            {height:'100'}
          }/>

      </MuiThemeProvider>


    )

  }


}

export default Header;
