import createReducer from './CreateReducer';
import {
  INCREMENT,
} from '../actions/Count';

const count = createReducer(0, {
  [INCREMENT](state, action) {
    return state + action.count;
  },
});

export {
  count as default,
};
