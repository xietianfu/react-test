import axios from 'axios'; // https://github.com/mzabriskie/axios
import ERROR_CODE, {
  SUCCESS_CODE,
  ERROR_MSG,
  EXTAR_ERROE_CODE,
} from '../constants/error_code';
import { message } from 'antd';
// import { ROUTES } from 'CONSTANTS';

const EXTREME_ERR_MSG = {
  INTERNET_ERR: '网络异常，请稍候重试',
  SYESTEM_ERROR: '服务器开小差了，请稍后进行操作',
  NO_MATCH: '网络错误',
  OFFLINE_ERR: '网络异常，请稍候重试',
  AUTH_FAIL: '非权限访问',
};

/*eslint-disable*/
const interNetErrCodeArr = [50000];
const NO_AUTH_CODE = 10001;
const NO_SIGNIN = 10002;
const errorCodes = Object.values(ERROR_CODE);
const extraErrorCodes = Object.values(EXTAR_ERROE_CODE);
const PARAMS_ERROR = 12000;
/**
 * 拉取网络请求
 * @param  {[type]} url    [description]
 * @param  {[type]} method [description]
 * @return {[type]}        [description]
 */
export default function fetch(url, method) {
  return data => {
    let params;

    switch (method) {
      case 'POST':
      case 'PUT':
      case 'DELETE':
        params = {
          method,
          url,
          data,
        };
        break;
      case 'GET':
        params = {
          method,
          url,
          params: data,
        };
        break;
    }

    // 如果是同域,则添加去缓存的header,阻止ie缓存机制
    // if (url.indexOf('http') === -1) {
    //   params.headers = {
    //     // no-store: 缓存不应存储有关客户端请求或服务器响应的任何内容。
    //     'Cache-control': 'no-cache, no-store, must-revalidate',
    //     Pragma: 'no-cache',
    //     Expires: 0,
    //   };
    // }

    return new Promise((resolve, reject) => {
      axios(params).then(
        response => {
          let responseCode = response.data.code;
          if (responseCode === SUCCESS_CODE) {
            resolve(response.data.data);
          } else if (interNetErrCodeArr.indexOf(responseCode) !== -1) {
            message.error(EXTREME_ERR_MSG.OFFLINE_ERR);
            reject(response.data);
          } else if (extraErrorCodes.indexOf(responseCode) !== -1) {
            reject(response.data);
          } else if (errorCodes.indexOf(responseCode) !== -1) {
            message.error(
              ERROR_MSG[
                Object.keys(ERROR_CODE)[errorCodes.indexOf(responseCode)]
              ],
            );
            reject(response.data);
          } else {
            if (responseCode === NO_AUTH_CODE) {
              //window.location.href = '/signin';
              return;
            }
            if (responseCode === NO_SIGNIN) {
              window.location.href = '/signin';
              return;
            }
            /*
              编辑客户时，导入的客户信息可能没有地址信息的省市区，无法回填
            */
            if (url === '/api/get_address' && responseCode === PARAMS_ERROR) {
              reject(response.data);
              return;
            }
            let msg =
              response.data.msg ||
              EXTREME_ERR_MSG.NO_MATCH + (responseCode ? responseCode : '');
            reject(response.data);
            message.error(msg);
          }
        },
        err => {
          message.error(EXTREME_ERR_MSG.INTERNET_ERR);
        },
      );
    });
  };
}
