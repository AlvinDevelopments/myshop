import React, {Component} from 'react';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import Divider from 'material-ui/Divider';

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
      // sidebar div
      <div className="side-bar">

        // Categories
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

      <Divider/>
      Location

      <Divider/>
      Distance


    </div>
    );
  }
}

export default Sidebar;
