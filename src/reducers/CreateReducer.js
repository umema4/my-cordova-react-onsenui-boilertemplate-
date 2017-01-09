import _ from 'lodash';

const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (_.has(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
};

export { createReducer as default };
