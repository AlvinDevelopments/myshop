import React, {Component} from 'react';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class Sidebar extends Component{

  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){

        const styles = {
      block: {
        maxWidth: 250,
      },
      radioButton: {
        marginBottom: 16,
      },
    };


    return (
      <div className="side-bar">

        Category
        <RadioButtonGroup name="shipSpeed" defaultSelected="electronics">
          <RadioButton
            value="clothing"
            label="Clothing"
            style={styles.radioButton}
          />
          <RadioButton
            value="furniture"
            label="Furniture"
            style={styles.radioButton}
          />
          <RadioButton
            value="electronics"
            label="Electronics"
            style={styles.radioButton}
          />
      </RadioButtonGroup>

      Location

      Distance

    </div>
    );
  }
}

export default Sidebar;
