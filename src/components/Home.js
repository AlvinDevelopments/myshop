import { BrowserRouter } from 'react-router-dom';
import  React, {Component} from 'react';
import './main.css';
import Item from './Item.js';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import Divider from 'material-ui/Divider';



class Home extends Component {


  constructor(props){
    // console.log('CONSTRUCTED!!');
    super(props);
    this.state={
      yo:true,
      searchTerm:this.props.location.search.split('?')[1],
      backgroundColor:this.props.color,
      items: [],
      category: this.props.category,
  }
}

  componentDidMount(){
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
            welcome to homepage

        </div>

    )
  }


}

export default Home;
