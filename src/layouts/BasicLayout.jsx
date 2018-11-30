import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Layout, Icon, Button } from 'antd';
import { Route } from 'react-router-dom';
import Load from '../components/Load';
import SiderBar from '../components/SiderBar';
import { getMenuData } from '../constants/menu';
import { AddStatementContainer } from '../components/Modal';

const { Header, Sider, Content, Footer } = Layout;

/**
 * 通过权限数组过滤菜单
 * @param {Array} menuData 菜单数据
 * @param {Array} authorityArr 权限数组
 * @returns {Array} 过滤后的菜单
 * @author xietf
 */
function filterMenuData(menuData, authorityArr = ['01', '02']) {
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
          children: _filterMenuData(item.children, _authorityArr),
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

class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false, // 侧边栏状态
      setamentVisible: false, // 添加面板modal状态
    };
  }

  componentDidMount() {
    const loginStauts = true;
    const { history } = this.props;
    if (!loginStauts) {
      history.push('/login');
    }
  }

  componentWillUpdate(nextProps) {
    console.log(nextProps);
  }

  /**
   * 修改侧边栏状态
   */
  toggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  /**
   * @param {Array} menuData 菜单数据
   * @returns {Array} 路由数组
   * @author xietf
   */
  buildRoute = menuData => {
    let cashArr = []; // eslint-disable-line
    if (Array.isArray(menuData)) {
      menuData.forEach(item => {
        let result = [];
        if (item.children) {
          result = this.buildRoute(item.children); // eslint-disable-line
          cashArr = [...cashArr, ...result];
        }
        if (!item.children) {
          // 获取地址最后一位
          let path = item.path.split('/').pop();
          // 由于url地址不建议驼峰命名，使用的为下划线命名词组，所有字符串驼峰化
          path = path.replace(/[-_\s]+(.)?/g, (match, c) =>
            c ? c.toUpperCase() : '',
          );
          cashArr = [
            ...cashArr,
            ...result,
            <Route
              key={item.name}
              path={item.path}
              component={Loadable({
                loader: () => import(`../routes/${path}`),
                loading: Load,
              })}
            />,
          ];
        }
      });
      return cashArr;
    }
    return Error('出错了');
  };

  render() {
    const { collapsed } = this.state;
    return (
      <div>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{
              minHeight: '100vh',
              padding: '1em 0',
              boxShadow: '2px 0 6px rgba(0, 21, 41, 0.35)',
            }}
          >
            <h2
              style={{
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.65)',
                lineHeight: '1.5',
              }}
            >
              logo
            </h2>
            <SiderBar menuData={filterMenuData(getMenuData())} />
          </Sider>
          <Layout>
            <Header
              style={{
                background: '#fff',
                padding: '0 1em',
                boxShadow: '2px 0 6px rgba(0, 21, 41, 0.35)',
                zIndex: '1000',
              }}
            >
              <Icon
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
                style={{ fontSize: '1.5em' }}
              />
              <Button
                type="primary"
                onClick={() => {
                  this.setState({
                    setamentVisible: true,
                  });
                }}
              >
                添加图表面板
              </Button>
              <AddStatementContainer
                visible={this.state.setamentVisible}
                toggleModal={() => {
                  this.setState({
                    setamentVisible: !this.state.setamentVisible,
                  });
                }}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >
              {this.buildRoute(getMenuData())}
            </Content>
            <Footer style={{ textAlign: 'center', padding: '1em' }}>
              卧龙大数据
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default BasicLayout;
