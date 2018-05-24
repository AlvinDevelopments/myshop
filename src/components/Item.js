import React, {Component} from 'react';

import { instanceOf } from 'prop-types';
import cookie from 'react-cookie';


import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import ActionMessage from 'material-ui/svg-icons/communication/message';



class Item extends Component{


  constructor(props){
    super(props);
    this.state= props.state || {
      name:props.name || 'no name',
      description:props.description || 'no description',
      price:props.price || '$0',
      images: props.images || [],
      province:'',
      area:'',
      category:'',
    };
  }


  handleMouseDown = () => {
    console.log('adding to cart');
    console.log(cookie);
    let oldCart = cookie.load('items') || [];
    console.log(oldCart);

    oldCart.push(this.state);
    console.log(oldCart);
    let str_oldCart = JSON.stringify(oldCart);
    console.log(str_oldCart);
    // cookie.save('items','test', {path:'/'});

    cookie.save('items', oldCart, {path:'/'});
    console.log(cookie.load('items'));
  }

  render(){

    return(
      <div style={this.props.style, {width:'100%'}} className="item-list">
        <h3>{this.state.name}</h3>
        <h4>{this.state.price}</h4>
        <h4>{this.state.description}</h4>
        <h4>{this.state.images}</h4>
        Message
        <IconButton style={{}} disabled={false}>
          <ActionMessage />
        </IconButton>
      </div>
    );
  }

}


export default Item;
