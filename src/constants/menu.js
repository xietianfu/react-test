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
        path: 'axios',
        authority: '02',
      },
      {
        name: 'immutable',
        path: 'immutable',
        authority: '03',
      },
      {
        name: 'react-loadable',
        path: 'react-loadable',
        authority: '04',
      },
    ],
  },
  // {
  //   name: '基础练习',
  //   path: 'basic',
  //   authority: '02',
  //   children: [
  //     {
  //       name: '修饰器',
  //       path: 'decorator',
  //       authority: '01',
  //     },
  //   ],
  // },
  // {
  //   name: '自定义组件',
  //   path: 'custom',
  //   authority: '03',
  //   children: [
  //     {
  //       name: 'echart',
  //       path: 'echart',
  //       authority: '01',
  //     },
  //     {
  //       name: 'gridLayout',
  //       path: 'grid-layout',
  //       authority: '02',
  //     },
  //     {
  //       name: 'intro',
  //       path: 'intro',
  //       authority: '03',
  //     },
  //   ],
  // },
  {
    name: '数据可视化',
    path: 'mixin',
    authority: '04',
    children: [
      {
        title: '图表-拖动',
        name: 'mix1',
        path: 'mix1',
        authority: '01',
      },
      {
        title: '数据表管理',
        name: 'tableManage',
        path: 'table-manage',
        authority: '02',
      },
    ],
  },
  {
    name: '权限管理',
    path: 'auth',
    authority: '05',
    children: [
      {
        title: '权限配置',
        name: 'authority',
        path: 'authority',
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
export const getMenuData = () => formatter(menuData);
