export const INCREMENT = 'count/INCREMENT';

export function increment() {
  return {
    type: INCREMENT,
    count: 1,
  };
}

export function incrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 3000);
  };
}
