//store 中使用了reducer
//reducer返回了新state

import * as ActionTypes from './ActionTypes.js';

//action就是Actions.js 中return的值
export default (state, action) => {
  const {counterCaption} = action;

  switch (action.type) {
    case ActionTypes.INCREMENT:
      console.log(state, counterCaption,  {...state, [counterCaption]: state[counterCaption] + 1})
      return {...state, [counterCaption]: state[counterCaption] + 1};
    case ActionTypes.DECREMENT:
      return {...state, [counterCaption]: state[counterCaption] - 1};
    default:
      return state
  }
}
