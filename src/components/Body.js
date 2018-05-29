import  React, {Component} from 'react';
import './main.css';
import Item from './Item.js';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import Divider from 'material-ui/Divider';

import SearchResults from './SearchResults';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from'./SignupPage';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Profile from './Profile';


class Body extends Component {

  constructor(props){
    // console.log('CONSTRUCTED!!');
    super(props);
    this.state={
      yo:true,
      backgroundColor:this.props.color,
      items: [],
      category: this.props.category,
  }
}

  componentDidMount(){
    // console.log('MOUNTED');
    // console.log(this.state.items);
    fetch('/all',{
      method: 'GET',
      headers: {
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(json => {
      this.setState({items:json});
      // console.log(json);
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot){
  }

  componentWillReceiveProps(nextProps){
    // console.log('received props.');
    this.setState({items:[]});
    fetch('/'+nextProps.category,{
      method: 'GET',
      headers: {
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(json => {
      this.setState({items:json});
      // console.log(json);
    });
  }

  render(){
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <PrivateRoute exact path='/profile' component={Profile}/>
        <Route path='/posts' component={SearchResults}/>
        <Route path='/login' component={LoginPage}/>
        <Route exact path='/signup' component={SignupPage}/>
      </Switch>
    )
  }

}

export default Body;
