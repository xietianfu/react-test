import { isUrl } from '../utils/utils';

/** 路由列表 */
export const ROUTE_PATH_LIST = {
  login: {
    path: '/login',
  },
  home: {
    path: '/home', // 首页
    // 子路由
    choice: {
      path: '/home/choice', // 车型选择
    },
  },
  selectCar: {
    path: '/select-car', // 选择车型
  },
  record: {
    path: '/record', // 报价记录
  },
  price: {
    path: '/price', // 价格详情

    oe: {
      path: '/price/oe', // oe号价格详情
    },
    vin: {
      path: '/price/vin', // vin号价格详情
    },
  },
  maintain: {
    path: '/maintain',
  },
};

export const menuData = [
  {
    name: '首页',
    icon: 'code',
    path: 'home',
  },
  {
    name: '选择车型',
    path: 'select-car',
  },
  {
    name: '报价记录',
    path: 'record',
  },
  {
    name: '价格详情',
    path: 'price',
  },
  {
    name: '查保养详情',
    path: 'maintain',
  },
];

/**
 * 格式化菜单，为菜单添加出路由
 * @param {Array} data 菜单数据
 * @param {string} parentPath 父节点地址
 * @param {string} parentAuthority 权限
 */
function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path, authority } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    // 判断是否存在权限
    authority = authority || '00';
    // 权限拼接
    authority = Boolean(parentAuthority) // eslint-disable-line
      ? parentAuthority + authority
      : authority;
    const result = {
      ...item,
      path,
      authority,
    };
    if (item.children) {
      result.children = formatter(
        item.children,
        `${parentPath}${item.path}/`,
        authority,
      );
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
