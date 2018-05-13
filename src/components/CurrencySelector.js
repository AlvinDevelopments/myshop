import React, {Component} from 'react';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


class CurrencySelector extends Component{


  constructor(props){
    super(props);
    this.state = {
      value: 1,
    }
  }


  handleChange = (event, index, value) => this.setState({value});


  render(){

    return (
      <div>
        SELECT CURRENCY
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="USD" />
          <MenuItem value={2} primaryText="CAD" />
          <MenuItem value={3} primaryText="EUR" />
          <MenuItem value={4} primaryText="GBP" />
          <MenuItem value={5} primaryText="AUD" />
        </DropDownMenu>
      </div>
    )
  }

}


export default CurrencySelector;
