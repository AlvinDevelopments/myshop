import { BrowserRouter } from 'react-router-dom';
import  React, {Component} from 'react';
import './main.css';
import Item from './Item.js';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import Divider from 'material-ui/Divider';

import cookie from 'react-cookie';


class Profile extends Component {


  constructor(props){
    // console.log('CONSTRUCTED!!');
    super(props);
    this.state={
      yo:true,
      searchTerm:this.props.location.search.split('?')[1],
      backgroundColor:this.props.color,
      items: [],
      category: this.props.category,
      user:''
  }
}

  componentDidMount(){

    var token = 'Bearer '+cookie.load('token').token;
    console.log(token);
    fetch('/api/profile',{
      method: 'GET',
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
        'Authorization': token
      },
      })
      .then(response => response.json())
      .then(json => {
        console.log(json.firstname);
        this.setState({user:json});
      });
  }

  componentDidUpdate(prevProps, prevState, snapshot){
  }

  componentWillReceiveProps(nextProps){
  }

  render(){


    return (
      <div className="">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
            Welcome, {this.state.user.firstname}
        </div>

    )
  }


}

export default Profile;
