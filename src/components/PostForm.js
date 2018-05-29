import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';


import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import cookie from 'react-cookie';


class PostForm extends Component{

  constructor(props){
    super(props);

    this.state = {
      open: this.props.open,
      categories: [(<MenuItem value='0' key='0' primaryText="Buy and Sell" />)],
      value: 0,
      postname: '',
      price: '',
      category: '',
      description: '',
      user:''
    };

  }

  // componentDidMount(){
  //   var token = 'Bearer '+cookie.load('token').token;
  //
  //   fetch('/api/profile',{
  //     method: 'GET',
  //     headers: {
  //       "Accept": "application/json",
  //       'Content-Type': 'application/json',
  //       'Authorization': token
  //     },
  //     })
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json.firstname);
  //       this.setState({user:json});
  //     });
  // }

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

      var token = "Bearer "+cookie.load('token').token;
      console.log(token);

      if(isNaN(this.state.price)){
        console.log('invalid price');
      }
      else if(this.state.postname === ''){
        console.log('must contain title');
      }
      else{

        // console.log('attempting to post');
        // console.log('the token is');
        // console.log(cookie.load('token'));

        fetch('/api/postitem', {
          method: "POST",
          headers: {
            'mode': 'no-cors',
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Authorization': token
          },
          body:JSON.stringify({
            postname:this.state.postname,
            price:this.state.price,
            category:this.state.category,
            description:this.state.description,
          }),
        }).
        then((response) => {
          if(response.ok){
            console.log('response ok');
          }
        });

        this.setState({
          postname:'',
          price:0,
          category:'',
          description:'',
          open:false
        });
      }



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
      title="Post an item"
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

        <input type="file" onChange={this.fileChangedHandler}/>

        {actions}

      </form>

    </Dialog>
    )
  }


}

export default PostForm;
