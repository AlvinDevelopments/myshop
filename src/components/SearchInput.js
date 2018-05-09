import React, { Component } from 'react';
import logo from './logo.svg';
import './main.css';


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

    console.log(this.state);
    return (
        <form onSubmit={this.onSubmit}>
          <div className="search-box">
            <input value={this.state.term} onClick={this.onClick} onChange={this.onChange} />
            <button>Search</button>
          </div>
        </form>


    )

  }


}

export default SearchInput;
