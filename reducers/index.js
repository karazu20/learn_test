

const initialState = {
  count: 10
};

export default function reducer(state = initialState, action) {
  //console.log(state.count)
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}
