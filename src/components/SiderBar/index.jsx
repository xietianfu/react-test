import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { axios } from '../../services';
import { api } from '../../constants/api';

const { SubMenu } = Menu;

class SiderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboardList: [],
    };
  }

  componentDidMount() {
    axios.get(api.dashboardManage).then(res => {
      this.setState({
        dashboardList: res.data.dashboardList,
      });
    });
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
                    <span>{item.title ? item.title : item.name}</span>
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
          <Link to={menuData.path}>
            {menuData.title ? menuData.title : menuData.name}
          </Link>
        </Menu.Item>
      );
    }
  };

  render() {
    const { menuData } = this.props;
    return (
      <Menu mode="inline" theme="dark">
        {this.formatterMenu(menuData)}
        <SubMenu title="图表面板">
          {this.state.dashboardList.map(item => (
            <Menu.Item key={item.dashboardId}>
              <Link to={`/mixin/mix1?id=${item.dashboardId}`}>
                {item.config.name}
              </Link>
            </Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    );
  }
}

export default SiderBar;
