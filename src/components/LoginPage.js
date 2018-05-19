import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';


import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';



class LoginPage extends Component{


  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',

    }
  }


  render(){


        const actions = [

          <a href='/signup'> <FlatButton
            label="Sign Up"
            primary={true}
            onClick={this.postClose}
          /></a>,
          <FlatButton
            type="submit"
            label="Login"
            primary={true}
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
        name="postname"
        floatingLabelText="Email address or username"
        multiLine={false}
        rows={1}
        onChange={e => this.setState({ postname: e.target.value })}
        /><br />

        <TextField type='password'
        name="postprice"
        floatingLabelText="Password"
        multiLine={false}
        rows={1}
        onChange={e => this.setState({ price: e.target.value })}
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

export default LoginPage;
