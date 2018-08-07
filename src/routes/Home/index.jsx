import React, { Component } from 'react';
// import { hot } from 'react-hot-loader';
import { Button, Menu, Icon } from 'antd';
import axios from 'axios';
import { getMenuData } from '../../constants/menu';
import { Link } from 'react-router-dom';
import RouterMap from '../index';

import styles from './app.less';

const { SubMenu } = Menu;

/**
 * 通过权限数组过滤菜单
 * @param {Array} menuData 菜单数据
 * @param {Array} authorityArr 权限数组
 * @returns {Array} 过滤后的菜单
 * @author xietf
 */
function filterMenuData(menuData, authorityArr = ['010101', '0201']) {
  /**
   * 生成带有undifind的菜单数组
   * @param {Array} _menuData 菜单数组
   * @param {Array} _authorityArr 权限数组
   * @returns {Array}
   * @author xietf
   */
  function _filterMenuData(_menuData, _authorityArr) {
    return _menuData.map(item => {
      // 当层级能匹配，后续所有层级都通过
      if (_authorityArr.some(val => val === item.authority)) {
        return item;
      }
      if (item.children) {
        return {
          ...item,
          children: _filterMenuData(item.children, _authorityArr)
        };
      }
      return undefined;
    });
  }
  /**
   * 去除菜单中的undifind
   * @param {Array} inputData 带有undifind的菜单数组
   * @returns {Array}
   * @author xietf
   */
  function _removeUndifind(inputData) {
    let result = []; // eslint-disable-line
    if (Array.isArray(inputData)) {
      inputData.forEach(item => {
        // 判断是否为空
        if (item) {
          // 判断是否有子元素
          if (item.children) {
            // 如果所有子元素不全为undifind
            if (item.children.some(val => val)) {
              const cash = _removeUndifind(item.children);
              result.push({ ...item, children: cash });
            }
          } else {
            result.push(item);
          }
        }
      });
    }
    return result;
  }
  const result = _filterMenuData(menuData, authorityArr);
  return _removeUndifind(result);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('api/name').then(res => console.log(res));
  }

  /**
   * 将菜单数据构建为ant的菜单
   * @param {Array} menuData 菜单数据
   */
  // eslint-disable-next-line
  formatterMenu = menuData => {
    if (Array.isArray(menuData)) {
      return menuData.map(item => {
        if (item.children) {
          // 没有隐藏该层级
          if (!item.hideInMenu) {
            return (
              <SubMenu
                key={item.name}
                disabled={item.disabled}
                title={
                  <span>
                    <Icon type={item.icon} />
                    <span>{item.name}</span>
                  </span>
                }
              >
                {this.formatterMenu(item.children)}
              </SubMenu>
            );
          }
        }
        return this.formatterMenu(item);
      });
    }
    if (!menuData.hideInMenu) {
      return (
        <Menu.Item key={menuData.name} disabled={menuData.disabled}>
          <Link to={menuData.path}>{menuData.name}</Link>
        </Menu.Item>
      );
    }
  };

  render() {
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}

// export default hot(module)(App);
export default App;
