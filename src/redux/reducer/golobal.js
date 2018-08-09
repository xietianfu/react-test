export default (state = { loginStatus: false }, action) => {
  switch (action.type) {
    case 'changeLogin':
      return { ...state, loginStatus: action.data };
    default:
      return state;
  }
};
