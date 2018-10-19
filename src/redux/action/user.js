import { notification } from 'antd';
import { axios } from '../../services';
import { userApi } from '../../services/user';

export const login = data => {
  return {
    type: 'login',
    data,
  };
};

export const logout = () => {
  return dispath => {
    return axios
      .post(userApi.signOut)
      .then(() => {
        dispath({
          type: 'logout',
          data: false,
        });
      })
      .catch(err => {
        notification.error({
          message: '退出失败',
          description: '可能由于你又重要资料未保存，请保存后退出！',
        });
      });
  };
};
