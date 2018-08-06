import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Button, Menu, Icon } from 'antd';
import axios from 'axios';
import { getMenuData } from '../../constants/menu';

import styles from './app.less';
import myPhoto from '../../assets/images/1.jpg';

const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;

// TODO:通过是否菜单还有子元素进行递归，构建出菜单
function filterMenuData(menuData, authorityArr = ['0101', '0102', '02']) {
  if (!menuData.children) {
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(getMenuData());
    axios.get('api/name').then(res => console.log(res));
  }

  /**
   * 将菜单数据构建为ant的菜单
   * @param {Array} menuData 菜单数据
   */
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
    } else {
      if (!menuData.hideInMenu) {
        return (
          <Menu.Item key={menuData.name} disabled={menuData.disabled}>
            {menuData.name}
          </Menu.Item>
        );
      }
    }
  };

  render() {
    return (
      <div>
        <Menu mode="inline" style={{ width: 256 }}>
          {this.formatterMenu(getMenuData())}
        </Menu>
      </div>
    );
  }
}

export default hot(module)(App);
// export default App;
