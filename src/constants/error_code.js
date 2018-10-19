const ERROR_CODE = {
  /* 注释掉的错误码全局提醒其msg, 其余通过组件内部catch处理 */

  // NO_PERMISSION: 10001,
  // INVALID_PARAMS: 12000,
  // NOT_EXIST: 20001,
  CHECK_FAILED: 20002,
  USED_PHONE: 20003,
  WRONG_PASSWORD_OR_PHONE: 20004,
  SEND_SMS_ERROR: 20005,
  WRONG_CODE: 20006,
  CODE_EXPIRED: 20007,
  PASSWORD_NOT_SAME: 20008,
  WRONG_PASSWORD: 20009,
  NEED_REVIEW: 40006,
  // WRONG_VIN: 20010,
  // STORE_PART_NOT_EXIST: 20011,
  // DUPLICATE_SHOP: 20012,
  // SHOP_NOT_EXIST: 20013,
  // SEARCH_NOT_IN_BRANDS: 20014,
  // IGNORED: 30000,
  // INQUIRY_NOT_EXIST: 30001,
  // PART_NOT_EXIST: 30002,
  // GARAGE_NOT_EXIST: 30003,
  // FILE_NOT_FOUND: 40001,
  // DOWNLOAD_FAIL: 40002,
  // UPLOAD_FAILED: 40003,
  // INVALID_FORMAT: 40004,
};

export const ERROR_MSG = {
  // SUCCESS: "成功",
  // NO_PERMISSION: "无权限",
  // NOT_EXIST: "用户不存在",
  CHECK_FAILED: '校验失败',
  USED_PHONE: '手机号已注册',
  WRONG_PASSWORD_OR_PHONE: '密码错误或手机号未注册',
  SEND_SMS_ERROR: '发送短信失败',
  WRONG_CODE: '验证码错误',
  CODE_EXPIRED: '验证码过期',
  PASSWORD_NOT_SAME: '两次密码不相同',
  WRONG_PASSWORD: '密码错误',
  // WRONG_VIN: "VIN 错误",
  // STORE_PART_NOT_EXIST: "库存不存在",
  // IGNORED: "已忽略",
  // INQUIRY_NOT_EXIST: "询价单不存在",
  // PART_NOT_EXIST: "配件不存在",
  // DUPLICATE_SHOP: "重复商家",
  // SHOP_NOT_EXIST: "商家不存在",
  // GARAGE_NOT_EXIST: "客户不存在",
  // INVALID_PARAMS: "参数错误",
  // FILE_NOT_FOUND: "文件未找到",
  // DOWNLOAD_FAIL: "下载失败",
  // UPLOAD_FAILED: "上传失败",
  // INVALID_FORMAT: "文件不支持",
  // SEARCH_NOT_IN_BRANDS: "不是主营品牌 VIN 码",
  NEED_REVIEW: '注册后需要审查'
}
// 组件内部自行处理，不显示message.error
export const EXTAR_ERROE_CODE = {
  NO_TAX: 40007,
  CANNOT_OFFER: 30006
}

export const SUCCESS_CODE = 10000;
export default ERROR_CODE;
