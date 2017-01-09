import Promise from 'bluebird';

export const INCREMENT = 'count/INCREMENT';

export function increment() {
  return {
    type: INCREMENT,
    count: 1,
  };
}

export function incrementAsync() {
  return (dispatch) => {
    return new Promise((resolve) => {
      resolve(dispatch(increment()));
    });
  };
}
