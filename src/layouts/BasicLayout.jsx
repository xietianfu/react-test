import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Layout, Icon } from 'antd';
import { Route } from 'react-router-dom';
import Load from '../components/Load';
import SiderBar from '../components/SiderBar';
import { getMenuData } from '../constants/menu';
import { filterMenuData } from '../utils/data';

const { Header, Sider, Content, Footer } = Layout;

class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false, // 侧边栏状态
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
          path = path.replace(
            /[-_\s]+(.)?/g,
            (match, c) => (c ? c.toUpperCase() : ''),
          );
          cashArr = [
            ...cashArr,
            ...result,
            <Route
              key={item.name}
              path={item.path}
              component={Loadable({
                loader: () => import(`../container/${path}`),
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
