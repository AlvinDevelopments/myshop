import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


import TextField from 'material-ui/TextField';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class PostForm extends Component{

  constructor(props){
    super(props);

    this.state = {
      open: this.props.open,
      categories: [(<MenuItem value='0' key='0' primaryText="Buy and Sell" />)],
      value: 0,
      postname: '',
      price: 0,
      category: '',
      description: ''
    };

  }


  postOpen = () =>{
    this.setState({open:true});
    console.log('state changed');
  };


    postClose = () =>{
      this.setState({open:false});
      console.log('state changed');
    };


    componentWillReceiveProps(nextProps){
      this.setState({open:nextProps.open});
    };

    handleChange = (event, index, value) => {
      console.log(this.state.categories[0].props.primaryText);
      this.setState({value,category:this.state.categories[0].props.primaryText});
    };


    handleSubmit = (event) => {
      event.preventDefault();



      fetch('/postitem', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          postname:this.state.postname,
          price:this.state.price,
          category:this.state.category,
          description:this.state.description
        }),
      });

      this.setState({
        postname:'',
        price:0,
        category:'',
        description:'',
        open:false
      });

    };



  render(){

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.postClose}
      />,
      <FlatButton
        type="submit"
        label="Submit"
        primary={true}
        />,
    ];


    return (
      <Dialog
      title="Dialog With Actions"
      modal={true}
      open={this.state.open}
      >

      <form onSubmit={this.handleSubmit}>

        <TextField type='text'
        name="postname"
        floatingLabelText="What are you selling?"
        multiLine={false}
        rows={1}
        onChange={e => this.setState({ postname: e.target.value })}
        /><br />

        <TextField type='text'
        name="postprice"
        floatingLabelText="Price"
        multiLine={false}
        rows={1}
        onChange={e => this.setState({ price: e.target.value })}
        /><br />

        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          maxHeight={200}
        >
          {this.state.categories}
        </SelectField><br/>

        <TextField
        name="postdescription"
        floatingLabelText="Describe your item (optional)"
        multiLine={false}
        rows={1}
        onChange={e => this.setState({ description: e.target.value })}
        /><br />

        {actions}

      </form>


    </Dialog>
    )
  }


}

export default PostForm;
