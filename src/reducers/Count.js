import {
  INCREMENT,
} from '../actions/Count';

const initialState = 0;
function count(state = initialState, action) {
  switch (action.type) {
  case INCREMENT:
    return state + action.count;
  default:
    return state;
  }
}

export {
  count as default,
};
