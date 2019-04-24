import { isUrl } from '../utils/utils';

// 侧边栏菜单
const menuData = [
  // demo
  {
    name: '基础包', // 侧边栏名称
    icon: 'code', // 侧边栏图标
    path: 'package', // 路由地址
    authority: '01', // 权限ID
    children: [
      // 子节点
      {
        title: '测试', // 子级菜单展示名称，如果不写名称为name字段
        name: 'Demo', // container目录的名称
        path: 'demo', // 路由地址
        icon: 'dashboard',
        authority: '01',
      },
      {
        title: 'anime',
        name: 'Anime',
        path: 'anime',
        icon: 'dashboard',
        authority: '01',
      },
      {
        title: 'hooks',
        name: 'Hooks',
        path: 'hooks',
        icon: 'dashboard',
        authority: '01',
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
