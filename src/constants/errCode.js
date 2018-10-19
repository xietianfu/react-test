export const ERROR_CODE = {
  /* 注释掉的错误码全局提醒其msg, 其余通过组件内部catch处理 */

  SUCCESS: 10000, // 成功
  LOGIN_REQUIRED: 10001, // 需要登录
  PARAM_ERROR: 10002, // 参数错误
  NO_LOGIN: 10003, // no login
  NOT_EXIST: 20001, // 不存在
  CHECK_FAILED: 20002, // 检查失败
  USED_PHONE: 20003, // 手机号已使用
  WRONG_PASSWORD_OR_PHONE: 20004, // 错误的密码或电话
  SEND_SMS_ERROR: 20005, // 短信验证码错误
  WRONG_CODE: 20006, // 验证码错误
  CODE_EXPIRED: 20007, // 验证码过期
  PASSWORD_NOT_SAME: 20008, // 密码不能相同
  WRONG_PASSWORD: 20009, // 密码错误
  WRONG_IMAGE_CODE: 20010, // 图片验证码错误
  ALREADY_FOLLOWED: 20011, // 已经是好友了
  NOT_REGISTER: 20012, // 没有注册的
  CANT_REMIND_DELIVERY: 20013, // 不能提醒发货
  OFFER_NOT_PAID: 20014, // 订单未付款
  OFFER_ALREADY_PAID: 20015, // 订单已付款
  INVALID_COUPON: 20016, // 无效的优惠券
  CODE_TO_MORE: 20017, // 验证码获取次数过多
  QUERY_FULL: 20018, // 查询次数达到上限

  QUERY_FAILED: 30001, // 查询失败

  SYSTEM_ERROR: 50000, // 系统错误
};

export const ERROR_MSG = {
  verify: {
    name: '验证错误',
    msg: {
      used: (val = '') => `${val}已经使用，请换一个试试`,
      expired: (val = '') => `${val}已经过期啦，请重新请求所需验证码`,
      same: (val = '') => `${val}相同，请换一个试试`,
      err: (val = '') => `${val}错误，请检查所输是否正确`,
    },
  },
  authority: {
    name: '权限错误',
    msg: {
      login: '该操作需要登录，请登录后继续',
      exist: '退出失败，请重试',
      register: '还没有注册，请注册后继续',
    },
  },
  system: {
    name: '系统错误',
    msg: {
      diagnose: '为了更好的您更好的体验，我们正在维护系统',
      network: '网络可能出现了问题，请稍后再试',
    },
  },
};
