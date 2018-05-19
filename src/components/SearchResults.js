import { BrowserRouter } from 'react-router-dom';
import  React, {Component} from 'react';
import './main.css';
import Item from './Item.js';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import Divider from 'material-ui/Divider';



class SearchResults extends Component {


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
    console.log('MOUNTED');
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
    console.log('received props.');
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
      <div className="body2">
              {
                this.state.items.reverse().map((item)=>
                  <div>
                    <Item style={{float:'left'}}
                      name={item.name}
                      price={item.price}
                      description={item.description}
                      size={item.size}
                    />
                    <Divider/>
                  </div>

                )
              }
        </div>

    )
  }


}

export default SearchResults;
