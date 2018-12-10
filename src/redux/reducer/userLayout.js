import { actionType } from '../action/actionType';
export default (state = {}, action) => {
  const { data, type } = action;

  switch (type) {
    case actionType.userLayout.user.add:
      return { ...state, user: data };
    case actionType.userLayout.user.remove:
      return { ...state, user: {} };
    default:
      return state;
  }
};
