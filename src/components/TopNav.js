import React, { Component } from 'react';
import logo from './logo.svg';
import SearchInput from './SearchInput.js'
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';


class TopNav extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn:false,
      style:{
        'align':'right'
      }
    };
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

    console.log(this.state);
    return (
      <div style={this.state.style}>
      </div>
    )

  }


}

export default TopNav;
