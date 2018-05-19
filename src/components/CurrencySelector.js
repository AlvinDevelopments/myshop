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
      <div style={{display:'inline'}}>
        PROVINCE
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="AB" />
          <MenuItem value={2} primaryText="BC" />
          <MenuItem value={3} primaryText="MB" />
          <MenuItem value={4} primaryText="SK" />
          <MenuItem value={5} primaryText="ON" />
        </DropDownMenu>

        AREA
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="AB" />
          <MenuItem value={2} primaryText="BC" />
          <MenuItem value={3} primaryText="MB" />
          <MenuItem value={4} primaryText="SK" />
          <MenuItem value={5} primaryText="ON" />
        </DropDownMenu>

        CATEGORY
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="AB" />
          <MenuItem value={2} primaryText="BC" />
          <MenuItem value={3} primaryText="MB" />
          <MenuItem value={4} primaryText="SK" />
          <MenuItem value={5} primaryText="ON" />
        </DropDownMenu>


      </div>
    )
  }

}


export default CurrencySelector;
