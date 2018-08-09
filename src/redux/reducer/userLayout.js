export default (state = {}, action) => {
  const { counterCaption } = action;
  console.log(action);

  switch (action.type) {
    case 'increment':
      return { ...state, count: counterCaption };
    case 'decrement':
      return { ...state, [counterCaption]: state[counterCaption] - 1 };
    default:
      return state;
  }
};
