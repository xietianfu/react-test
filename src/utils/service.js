import fetch from '../services/fetch';
import { ERROR_CODE, ERROR_MSG } from '../constants/errCode';
import { notification } from 'antd';

/* eslint-disable */
/**
 * 构建请求对象
 * @param {Array} apiArr 待处理的api数组
 * @param {string} method 指定默认的请求方式
 * @returns {object} object
 * @author xietf
 * ## 说明
 * 当apiArr为一个简单数组时，命名方式就为getStr
 * 当apiArr为一个对象数组时，命名就为对象的method的值结合api最后节点
 */
export function makeApiService(apiArr, method = 'get') {
  const apiService = {};
  // 当api第一个字符不是'/'为其添加
  const newApiArr = apiArr.map(item => {
    if (typeof item === 'object') {
      if (item.api[0] !== '/') {
        item.api = '/' + item.api;
      }
      return item;
    }
    if (item[0] !== '/') {
      item = '/' + item;
    }
    return item;
  });
  for (const item of newApiArr) {
    let name;
    if (typeof item === 'object') {
      // 取得api最后的字符串
      name = item.api.split('/').pop();
      // 首字母大写
      name = name.replace(/( |^)[a-z]/, char => char.toUpperCase());
      // 字符串驼峰化
      name = name.replace(
        /[-_\s]+(.)?/g,
        (match, c) => (c ? c.toUpperCase() : ''),
      );
      apiService[`${item.method}${name}`] = fetch(item.api, item.method);
    } else {
      // 取得api最后的字符串
      name = item.split('/').pop();
      // 首字母大写
      name = name.replace(/( |^)[a-z]/, char => char.toUpperCase());
      // 字符串驼峰化
      name = name.replace(
        /[-_\s]+(.)?/g,
        (match, c) => (c ? c.toUpperCase() : ''),
      );
      apiService[`${method}${name}`] = fetch(item, method);
    }
  }
  return apiService;
}

/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

/**
 * 判断字符串是否为有效地址
 * @param {String} path 地址
 * @author xietf
 */
export function isUrl(path) {
  return reg.test(path);
}
