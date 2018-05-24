import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';


import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {PrivateRoute, auth} from './PrivateRoute';

import { withRouter } from "react-router-dom";


import './main.css';
class LoginPage extends Component{


  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      usererror:false,
      passworderror:false,
    }
  }


  handleSubmit = (event) => {


    event.preventDefault();

    if(this.state.username===''){
      this.setState({usererror:true});
    }
    else{
      this.setState({usererror:false});
    }

    if(this.state.password===''){
      this.setState({passworderror:true});
    }
    else{
      this.setState({passworderror:false});
    }

    // if(this.state.usererror||this.state.passworderror){
    //   return;
    // }


    fetch('/login',{
      method: 'POST',
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        username:this.state.username,
        password:this.state.password
      }),
      })
    .then(response => response.json())
    .then(json => {
      console.log('authenticate');
      // auth.authenticate();
      // this.props.history.push('/');
      // console.log(json);
      // this.setState({
      //   username:'',
      //   password:'',
      //   usererror:false,
      //   passworderror:false,
      // });
    });

    auth.authenticate();
    this.props.history.push('/');



  };


  render(){

    let userError = <p></p>;
    let passwordError = <p></p>;

    if(this.state.usererror===true){
      userError = <p>ERROR</p>;
    }

    if(this.state.passworderror===true){
      passwordError = <p>ERROR</p>;
    }


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

      <div className="login">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <form onSubmit={this.handleSubmit}>

          <TextField type='text'
          name="username"
          floatingLabelText="Email address or username"
          multiLine={false}
          rows={1}
          onChange={e => this.setState({ username: e.target.value })}
          /><br />

          {userError}

          <TextField type='password'
          name="password"
          floatingLabelText="Password"
          multiLine={false}
          rows={1}
          onChange={e => this.setState({ password: e.target.value })}
          /><br />


          {passwordError}


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

export default withRouter(LoginPage);
