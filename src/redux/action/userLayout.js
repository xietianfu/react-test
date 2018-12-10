import { actionType } from './actionType';

export const addUser = userInfo => ({
  type: actionType.userLayout.user.add,
  data: userInfo,
});

export const removeUser = () => ({
  type: actionType.userLayout.user.remove,
});
