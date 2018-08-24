import React, { Component } from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  render() {
    return (
      <div style={style}>
        <Counter caption="First" myProp="111"/>
        <Counter caption="Second" myProp="222"/>
        <Counter caption="Third" myProp="333"/>
        <hr/>
        <Summary />
      </div>
    );
  }
}

export default ControlPanel;

