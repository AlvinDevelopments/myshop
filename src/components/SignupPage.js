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
      email:'',
      username:'',
      firstname:'',
      lastname:'',
      password:'',
      passwordretype:'',
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


    fetch('/api/register',{
      method: 'POST',
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        email:this.state.email,
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        username:this.state.username,
        password:this.state.password,
        passwordretype:this.state.passwordretype,
      }),
      })
    .then(response => response.json())
    .then(json => {
      console.log(json);
    });


  }


  render(){

        const actions = [
          <FlatButton
              label="Login"
              href="/login"
              primary={true}
              onClick={this.postClose}
            />,
            <FlatButton
                label="Sign Up"
                type="submit"
                primary={true}
                onClick={this.postClose}
              />
        ];

    return (

      <div>
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
      name="firstname"
      floatingLabelText="First Name"
      multiLine={false}
      rows={1}
      onChange={e => this.setState({ firstname: e.target.value })}
      /><br />

      <TextField type='text'
      name="lastname"
      floatingLabelText="Last Name"
      multiLine={false}
      rows={1}
      onChange={e => this.setState({ lastname: e.target.value })}
      /><br />

      <TextField type='text'
      name="email"
      floatingLabelText="Email address"
      multiLine={false}
      rows={1}
      onChange={e => this.setState({ email: e.target.value })}
      /><br />

      <TextField type='text'
      name="username"
      floatingLabelText="Username"
      multiLine={false}
      rows={1}
      onChange={e => this.setState({ username: e.target.value })}
      /><br />


        <TextField type='password'
        name="password"
        floatingLabelText="Password (at least 8 characters)"
        multiLine={false}
        rows={1}
        onChange={e => this.setState({ password: e.target.value })}
        /><br />

        <TextField type='password'
        name="passwordretype"
        floatingLabelText="Re-type password"
        multiLine={false}
        rows={1}
        onChange={e => this.setState({ passwordretype: e.target.value })}
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
