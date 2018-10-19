import axios from 'axios';
import { notification } from 'antd';
import { ERROR_MSG } from '../constants/errCode';
import { resolve } from 'uri-js';
import { rejects } from 'assert';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 过滤错误码
 * @param {function} reject promis的错误回调函数
 */
function filterCode(res) {
  // response 返回的状态码和数据
  const { code, data = {} } = res;
  switch (code) {
    // case 20012: // 没有注册的
    //   notification.error({
    //     message: ERROR_MSG.authority.name,
    //     description: ERROR_MSG.authority.msg.register,
    //   });
    //   return { code, data };
    case 10003:
      window.location.href = '/login';
      break;
    default:
      return { res };
  }
}

// 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let pending = [];
const { CancelToken } = axios;
let cancel; // eslint-disable-line

const removePending = config => {
  pending = pending.filter(item => {
    if (item.u === `${config.url}&&${config.method}`) {
      item.f(config.url);
      return false;
    }
    return true;
  });
};

// 默认配置
// axios.defaults.baseURL = '/api';

// 请求处理
axios.interceptors.request.use(config => {
  // 手动取消请求
  // eslint-disable-next-line
  removePending(config);
  config.cancelToken = new CancelToken(c => {
    pending.push({ u: `${config.url}&&${config.method}`, f: c });
  });
  return config;
});

// 响应过滤
axios.interceptors.response.use(
  response => {
    const { config } = response;
    removePending(config);
    // 只有code码为10000时返回数据，其他都抛出错误
    if (response.data.code === 10000) {
      return response.data.data;
    }
    filterCode(response.data);
    return Promise.reject(response.data);
  },
  error => {
    // 是否有'/'，确定是否被取消请求
    if (error.message[0] !== '/') {
      const { data, status, config } = error.response;
      const errortext = codeMessage[status] || status;
      removePending(config);
      notification.error({
        message: errortext,
        description: `请求错误 ${status}: ${data}`,
      });
      throw error;
    } else {
      // notification.warning({
      //   message: '请求已被取消',
      //   description: `该"/api${
      //     error.message
      //   }"请求，可能由于再次被发送而被取消。`,
      // });
    }
  },
);

export { axios, cancel };
