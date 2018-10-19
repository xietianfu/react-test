export default (state = { user: {} }, action) => {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.data };
    case 'logout':
      return { ...state, user: action.data };
    default:
      return state;
  }
};
