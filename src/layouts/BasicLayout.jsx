import React, { PureComponent } from 'react';
import { Menu, Icon } from 'antd';

import { getMenuData } from '../constants/menu';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function formatterMenu(menuData) {
  console.log(menuData);
}

class BasicLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    formatterMenu(getMenuData());
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}

export default BasicLayout;
