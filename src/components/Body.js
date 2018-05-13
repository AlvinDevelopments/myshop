import  React, {Component} from 'react';
import './main.css';
import Item from './Item.js';


class Body extends Component {

  constructor(props){
    // console.log('CONSTRUCTED!!');
    super(props);
    this.state={
      yo:true,
      backgroundColor:this.props.color,
      items: [],
      category: this.props.category,
  }
}

  componentDidMount(){
    console.log('MOUNTED');
    // console.log(this.state.items);
    fetch('/'+this.props.category,{
      method: 'GET',
      headers: {
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(json => {
      this.setState({items:json});
      // console.log(json);
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot){
  }

  componentWillReceiveProps(nextProps){
    console.log('received props.');
    this.setState({items:[]});
    fetch('/'+nextProps.category,{
      method: 'GET',
      headers: {
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(json => {
      this.setState({items:json});
      // console.log(json);
    });
  }

  render(){

    return (

      <div style={{backgroundColor:this.props.color}} className="body2">
        <div className="row">
          {
            this.state.items.map((item)=>
            <div className="column">
              <Item
                name={item.name}
                price={item.price}
                description={item.description}
                size={item.size}
              />
            </div>
            )
          }
        </div>


      </div>
    )
  }

}

export default Body;
