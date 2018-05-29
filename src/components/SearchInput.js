import React, { Component } from 'react';
import logo from './logo.svg';
import './main.css';



import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';


import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router-dom";

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';



class SearchInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      isEmpty:true,
      term:'',
      valueOfArea: 1,
      valueOfProvince: 1,
      valueOfCategory: 1,
    };
  }

  componentDidMount(){

  }

  handleChangeArea = (event, index, value) => this.setState({valueOfArea:value});
  handleChangeCategory = (event, index, value) => this.setState({valueOfCategory:value});
  handleChangeProvince = (event, index, value) => this.setState({valueOfProvince:value});


  onChange = (event)=>{
    var status = false
    event.target.value !== '' ? status=false : status=true;
    this.setState({term:event.target.value, isEmpty:status});

  }

  onClick = (event) => {
    if(this.state.isEmpty){
      this.setState({term:''});
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted');
    this.props.history.push("/posts/"+"search?"+this.state.term);
    // this.props.history.push("/foo");

  }


  render(){

    return (
      <div>

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



          <form onSubmit={this.handleSubmit} style={{align: 'right', position: 'relative', display: 'inline-block'}}>
            <TextField
            defaultValue = {this.props.location.search.split('?')[1]}
            hintText = 'Search'
            onChange={e => this.setState({ term: e.target.value })}
            />

            <IconButton style={{position: 'absolute', right: 0}} disabled={false}>
              <ActionSearch
              onClick={this.handleSubmit} />
            </IconButton>
          </form>
      </div>


    )

  }


}

export default withRouter(SearchInput);
