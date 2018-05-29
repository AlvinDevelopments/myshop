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
      searchTerm:this.props.location.search.split('?')[1],
      backgroundColor:this.props.color,
      items: [],
      category: this.props.category,
  }
}

  componentDidMount(){
    // console.log(this.state.items);
    // console.log(this.props.location.searchTerm);
    if(this.props.location.searchTerm!==''){
      fetch('/search?query='+this.props.location.searchTerm,{
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
    else{
      fetch('/all',{
        method: 'GET',
        headers: {
          "Accept": "application/json"
        }
      })
      .then(response => response.json())
      .then(json => {
        this.setState({items:json});
        console.log(json);
      });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    // console.log(this.state);
  }

  componentWillReceiveProps(nextProps){
    // console.log('received props.');
    this.setState({items:[], searchTerm:nextProps.location.search.split('?')[1]});

    if(nextProps.location.search.split('?')[1]===undefined){
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
    else{
      fetch('/search?query='+nextProps.location.search.split('?')[1],{
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
  }

  render(){

    return (
      <div className="body2">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
              {
                this.state.items.reverse().map((item)=>
                  <div>
                    <Item style={{float:'left'}}
                      name={item.name}
                      sellerid= 'bob'
                      sellername = {item.user}
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
