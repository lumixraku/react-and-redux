import React, { PropTypes } from 'react';
import * as Actions from '../Actions.js';
import {connect} from 'react-redux';

const buttonStyle = {
  margin: '10px'
};

//构造函数里的参数是props 和下面Counter.propTypes对应
function Counter({caption, onIncrement, onDecrement, value}) {
  return (
    <div>
      <button style={buttonStyle} onClick={onIncrement}>+</button>
      <button style={buttonStyle} onClick={onDecrement}>-</button>
      <span>{caption} count: {value}</span>
    </div>
  );
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

//原本在ControlPanel中定义的时候prop只有caption 一个
//但是上面定义的propTypes却有4个  其他props怎么来的？
//从下面的函数名可以知道 将states中的一个值赋值到了props上
function mapStateToProps(state, ownProps) {
  return {
    value: state[ownProps.caption]
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  // ownProps 是当前组件的所有Props 可以在 ControlPanel中看到
  //console.log("own props", ownProps)
  // {caption: "First"}
  // {caption: "Second"}
  // {caption: "Third"}
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.caption));
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption));
    }
  }
}
//connect 所做的事情
// _this.store = props[storeKey] || context[storeKey];

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

