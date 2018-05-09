import  React, {Component} from 'react';
import './main.css';

class Body extends Component {

  constructor(props){
    super(props);
    this.state={
      yo:true,
      // categories:props.categories,
    // console.log(props.style);
  }
}

  componentDidMount(){

  }

  render(){


    return (
      <div className="body2">
        <img style={{width:'50%'}} src={require('./image.jpg')}/>
      </div>
    )
  }

}

export default Body;
