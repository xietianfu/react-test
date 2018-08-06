import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: 'dashboard',
    icon: 'dashboard',
    path: 'dashboard',
    authority: '01',
    children: [
      {
        name: '分析页',
        path: 'analysis',
        icon: 'dashboard',
        authority: '01',
        disabled: true,
        children: [
          {
            name: '三级'
          }
        ]
      },
      {
        name: '监控页',
        path: 'monitor',
        authority: '02'
      },
      {
        name: '工作台',
        path: 'workplace',
        hideInMenu: true
      }
    ]
  },
  {
    name: '菜单2',
    path: 'menuTow',
    authority: '02',
    children: [
      {
        name: '菜单2-1',
        path: 'one',
        authority: '01'
      },
      {
        name: '菜单2-2',
        path: 'two'
      }
    ]
  }
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
    authority = authority || '00';

    const result = {
      ...item,
      path,
      authority: Boolean(parentAuthority) // eslint-disable-line
        ? parentAuthority + authority
        : authority
    };
    if (item.children) {
      result.children = formatter(
        item.children,
        `${parentPath}${item.path}/`,
        authority
      );
    }
    return result;
  });
}

// eslint-disable-next-line
export const getMenuData = () => formatter(menuData);
