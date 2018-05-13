import React, {Component} from 'react';

import { instanceOf } from 'prop-types';
import cookie from 'react-cookie';

class Item extends Component{


  constructor(props){
    super(props);
    this.state= props.state || {
      name:props.name || 'no name',
      description:props.description || 'no description',
      price:props.price || '$0',
      images: props.images || []
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
      <div className="item-list">
        <h1>{this.state.name}</h1>
        <h2>{this.state.price}</h2>
        <h2>{this.state.description}</h2>
        <h2>{this.state.images}</h2>
        <button onMouseDown={this.handleMouseDown}>Add to cart</button>
      </div>
    );
  }

}


export default Item;
