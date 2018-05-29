import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';


import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {PrivateRoute, auth} from './PrivateRoute';

import { withRouter } from "react-router-dom";

import cookie from 'react-cookie';

import './main.css';
class LoginPage extends Component{


  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      email:'',
      usererror:false,
      passworderror:false,
      loginerror:false,
      errormsg:'',
    }
  }


  handleSubmit = (event) => {


    event.preventDefault();

    if(this.state.email===''){
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


    fetch('/api/login',{
      method: 'POST',
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        email:this.state.email,
        password:this.state.password
      }),
      })
    .then((response)=>{
      if(response.ok){
        let json = response.json();
        json.then(function(result){
          // console.log(result);
          cookie.save('token',result,{path:'/'});
        });
        cookie.save('auth',true,{path:'/'});
        auth.authenticate();
        this.props.history.push('/');
      }
      else{
        this.setState({loginerror:true, errormsg:'failed'});
      }
    });
  };


  render(){

    let userError = <p></p>;
    let passwordError = <p></p>;
    let loginError = <p></p>;

    if(this.state.usererror===true){
      userError = <p>ERROR</p>;
    }

    if(this.state.passworderror===true){
      passwordError = <p>ERROR</p>;
    }

    if(this.state.loginerror===true){
      loginError = <p>{this.state.errormsg}</p>;
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
          name="email"
          floatingLabelText="Email address"
          multiLine={false}
          rows={1}
          onChange={e => this.setState({ email: e.target.value })}
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

          {loginError}
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
