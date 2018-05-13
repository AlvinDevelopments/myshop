import React, { Component } from 'react';
import logo from './logo.svg';
import './main.css';



import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';



class SearchInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      isEmpty:true,
      term:'Search'
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

  onSubmit(){

  }


  render(){

    return (
      <div>
          <form style={{align: 'right', position: 'relative', display: 'inline-block'}}>
            <TextField
              hintText="Search"
              icon
            />

            <IconButton style={{position: 'absolute', right: 0}} disabled={false}>
              <ActionSearch />
            </IconButton>
          </form>
      </div>


    )

  }


}

export default SearchInput;
