import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO}from './actionTypes.js';


// 这里的state并不是全局的state  只是当前组件的state
// 全局的state可以在 CombineReducer里
// var previousStateForKey = state[_key]; 找到
export default (state = [], action) => {

  console.log('todos reducer:::', state, action)
  switch(action.type) {
    case ADD_TODO: {
      return [
        {
          id: action.id,
          text: action.text,
          completed: false
        },
        ...state
      ]
    }
    case TOGGLE_TODO: {
      return state.map((todoItem) => {
        if (todoItem.id === action.id) {
           return {...todoItem, completed: !todoItem.completed};
        } else {
          return todoItem;
        }
      })
    }
    case REMOVE_TODO: {
      return state.filter((todoItem) => {
        return todoItem.id !== action.id;
      })
    }
    default: {
      return state;
    }
  }
}
