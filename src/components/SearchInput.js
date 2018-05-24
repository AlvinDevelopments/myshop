import React, { Component } from 'react';
import logo from './logo.svg';
import './main.css';



import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';


import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router-dom";



class SearchInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      isEmpty:true,
      term:''
    };
  }

  componentDidMount(){

  }

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
          <form onSubmit={this.handleSubmit} style={{align: 'right', position: 'relative', display: 'inline-block'}}>
            <TextField
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
