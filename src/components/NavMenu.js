import  React, {Component} from 'react';
import './main.css';

class NavMenu extends Component {

  constructor(props){
    super(props);
    this.state={
      yo:true,
      // categories:props.categories,
      categories:[
        {name:'New Arrivals',link:'#'},
        {name:'Tops',link:'#'},
        {name:'Bottoms',link:'#'},
        {name:'Jeans',link:'#'},
        {name:'Outerwear',link:'#'},
        {name:'Footwear',link:'#'},
        {name:'Accessories',link:'#'},
        {name:'Grooming',link:'#'},
        {name:'Home',link:'#'},
        {name:'Gift Certificate',link:'#'},
        {name:'Sale',link:'#'}],
      designers:props.designers,
    }
    // console.log(props.style);
    const style=props.style;
  }

  componentDidMount(){

  }

  render(){


    return (
      <div style={this.style} className="body rent">
        <div className="row">
          <div className="column">
            <ul>
              {
                this.state.categories.map((item)=><li style={{linkDecoration:'none',listStyleType:'none'}}><a href={item.link}>{item.name}</a></li>)
              }
            </ul>
          </div>

          <div className="column">
            <ul>
              {
                this.state.designers.map((item)=><li style={{linkDecoration:'none',listStyleType:'none'}}><a href={item.link}>{item.name}</a></li>)
              }
            </ul>
          </div>
        </div>

      </div>
    )
  }

}

export default NavMenu;
