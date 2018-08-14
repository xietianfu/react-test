import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: '基础包',
    icon: 'code',
    path: 'package',
    authority: '01',
    children: [
      {
        name: 'redux',
        path: 'redux',
        icon: 'dashboard',
        authority: '01',
      },
      {
        name: 'axios',
        path: 'axios-dsaf',
        authority: '02',
      },
      {
        name: 'immutable',
        path: 'immutable',
      },
      {
        name: 'react-loadable',
        path: 'react-loadable',
      },
    ],
  },
  {
    name: '菜单2',
    path: 'menuTow',
    authority: '02',
    children: [
      {
        name: '菜单2-1',
        path: 'one',
        authority: '01',
      },
      {
        name: '菜单2-2',
        path: 'two',
      },
    ],
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

// eslint-disable-next-line
export const getMenuData = () => formatter(menuData, '/home/');
