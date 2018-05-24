import React, {Component} from 'react';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


class CurrencySelector extends Component{


  constructor(props){
    super(props);
    this.state = {
      valueOfArea: 1,
      valueOfProvince: 1,
      valueOfCategory: 1,
    }
  }

  handleChangeArea = (event, index, value) => this.setState({valueOfArea:value});
  handleChangeCategory = (event, index, value) => this.setState({valueOfCategory:value});
  handleChangeProvince = (event, index, value) => this.setState({valueOfProvince:value});


  render(){

    return (
      <div style={{display:'inline'}}>
        PROVINCE
        <DropDownMenu value={this.state.valueOfProvince} onChange={this.handleChangeProv}>
          <MenuItem value={1} primaryText="AB" />
          <MenuItem value={2} primaryText="BC" />
          <MenuItem value={3} primaryText="MB" />
          <MenuItem value={4} primaryText="SK" />
          <MenuItem value={5} primaryText="ON" />
        </DropDownMenu>

        CATEGORY
        <DropDownMenu value={this.state.valueOfCategory} onChange={this.handleChangeCategory}>
          <MenuItem value={1} primaryText="All Ads" />
          <MenuItem value={2} primaryText="Buy and Sell" />
          <MenuItem value={3} primaryText="Services" />
          <MenuItem value={4} primaryText="Cars" />
          <MenuItem value={5} primaryText="Jobs" />
        </DropDownMenu>


      </div>
    )
  }

}


export default CurrencySelector;
