//关于react中的ref https://react-cn.github.io/react/docs/more-about-refs.html
//本例子中使用的是函数形式的ref
//

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../actions.js';

class AddTodo extends Component {

  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
    this.refInput = this.refInput.bind(this);
  }

  onSubmit(ev) {
    ev.preventDefault();

    const input = this.input;
    if (!input.value.trim()) {
      return;
    }

    this.props.onAdd(input.value);
    //点击submit的时候清空输入框  但是这是很传统的做法  获取到元素去清除内容
    input.value = '';

    //在 todo_comtrolled_compoent 中是数据驱动的方式
  }

  refInput(node) {
    //这里创建了一个ref  把当前元素给了组件的input属性
    this.input = node;
    console.log("this input", this.input)
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" ref={this.refInput} />
          <button className="add-btn" type="submit">
            添加
          </button>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text));
    }
  }
};

export default connect(null, mapDispatchToProps)(AddTodo);

