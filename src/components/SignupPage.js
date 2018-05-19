import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';


import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';



class SignupPage extends Component{


  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',

    }
  }


  render(){


        const actions = [

          <FlatButton
            label="Sign Up"
            primary={true}
            onClick={this.postClose}
          />,
        ];

    return (

      <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <form onSubmit={this.handleSubmit}>

      <TextField type='text'
      name="email"
      floatingLabelText="Email address"
      multiLine={false}
      rows={1}
      onChange={e => this.setState({ postname: e.target.value })}
      /><br />

      <TextField type='text'
      name="username"
      floatingLabelText="Username"
      multiLine={false}
      rows={1}
      onChange={e => this.setState({ postname: e.target.value })}
      /><br />


        <TextField type='password'
        name="password"
        floatingLabelText="Password (at least 8 characters)"
        multiLine={false}
        rows={1}
        onChange={e => this.setState({ price: e.target.value })}
        /><br />

        <TextField type='password'
        name="password-retype"
        floatingLabelText="Re-type password"
        multiLine={false}
        rows={1}
        onChange={e => this.setState({ postname: e.target.value })}
        /><br />

        {actions}
        <br/>
        <FlatButton
          label="Forgot Password?"
          primary={true}
          onClick={this.postClose}
        />
        <br/>


      </form>
      </div>
    );
  }
}

export default SignupPage;
