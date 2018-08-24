import {SET_FILTER} from './actionTypes.js';
import {FilterTypes} from '../constants.js'

export default (state = FilterTypes.ALL, action) => {
  console.log('filter reducer:::', state, action)
  switch(action.type) {
    case SET_FILTER: {
      return action.filter; //return一个字串

      //下一步 CombineReducer
      // nextState[_key] = nextStateForKey;
      // _key: filter nextStateForKey:已完成 也就是上面的action.filter
      // CombineReducer中的这个逻辑会改变state中filter这个属性的值
      // 这个filter从哪里来的？ 在Store里面combineReducers 中处理了这个
      // 因为这里return的是一个字符串 并没有直接返回一个完整的state对象
    }

    default:
      return state;
  }
}
