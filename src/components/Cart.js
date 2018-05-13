import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';

import React, {Component} from 'react';


import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import cookie from 'react-cookie';

import Item from './Item';

import './main.css';


class Cart extends Component {

  constructor(props){
    super(props);
    this.state={
      items: cookie.load('items') || [],
      total: 0,
      open: false,
    };
    console.log(this.state.items);
  }


  componentDidMount(){

    fetch('/',{
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


  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
      items: cookie.load('items') || []
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>



        <IconButton
          onClick={this.handleClick}
          label="Click me"
        >
          <ActionShoppingCart/>
        </IconButton>


        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <div className="cart-window">
            {
              this.state.items.map((item)=>
                <Item state={item} />
              )
            }
          </div>
        </Popover>
      </div>
    );
  }
}

export default Cart;
