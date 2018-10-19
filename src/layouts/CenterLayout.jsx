import { Avatar } from 'antd';
import classnames from 'classnames';
import React, { PureComponent } from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import '../assets/less/main.less';
import Load from '../components/Load';
import { getMenuData, ROUTE_PATH_LIST } from '../constants/menu';
import { logout } from '../redux/action/user';
import SearchFullModal from '../components/Input/SearchFullModal';
import ShopFormModal from '../components/Input/ShopFormModal';

const Wrap = styled.div`
  position: relative;
  min-width: 1300px;
  background: #eff1f8;
`;

const Header = styled.div`
  overflow: hidden;
  padding: 1em;
  padding: 0em calc(50% - 620px);
  background: #20222f;

  .left,
  .right {
    display: inline-block;
    color: #fff;
    line-height: 60px;
    font-size: 1.12rem;
  }
  .right {
    float: right;
    clear: both;
    font-size: 0;
    nav {
      display: inline-block;
      margin-right: 90px;
      a {
        font-size: 16px;
        padding: 0 1em;
        color: #a9a9ac;
        &:active {
          text-decoration: none;
          color: #fff;
        }
      }
      .actived {
        background: #1b1c22;
        text-decoration: none;
        color: #fff;

        &:before {
          content: '';
          position: absolute;
          z-index: 10;
          top: 0;
          left: 0;
          right: 0;
          background: #305fff;
          height: 4px;
        }
      }
    }
    .userbox {
      font-size: 0;
      display: inline;
      .account,
      .exit {
        padding-left: 0.5rem;
        font-size: 0.8rem;
        vertical-align: middle;
      }
      .account {
        margin-right: 20px;
      }
      .exit {
        color: #a9a9ac;
      }
    }
  }
`;

const Content = styled.div`
  /* overflow: hidden;
  padding: 1em;
  padding: 0em calc(50% - 650px); */
`;

const LoginOut = styled.span`
  cursor: pointer;
  color: #eeeeee;
`;

const activedNav = {
  home: 1,
  record: 2,
};

@connect(state => ({ reduxState: state.persistedReducer.golobal }))
class CenterLayout extends PureComponent {
  constructor(props) {
    super(props);

    const { reduxState, history } = this.props;

    if (!reduxState.user) {
      history.push(ROUTE_PATH_LIST.login.path);
    }
    this.state = {
      actived: activedNav.home,
    };
  }

  componentDidMount() {
    let { actived } = this.state;
    const { history } = this.props;
    // 地址重定向
    const { pathname } = history.location;
    pathname === '/' && history.push(ROUTE_PATH_LIST.home.path); // eslint-disable-line
    // 设定激活的menu
    const pathArr = pathname.split('/');
    switch (pathArr[1]) {
      case 'home':
      case 'selectCar':
        actived = activedNav.home;
        break;
      case 'record':
        actived = activedNav.record;
        break;
      default:
        break;
    }
    this.setState({
      actived,
    });
  }

  componentWillUpdate() {
    const { reduxState, history } = this.props;

    let { actived } = this.state;
    if (!reduxState.user) {
      history.push(ROUTE_PATH_LIST.login.path);
    }
    // 地址重定向
    const { pathname } = history.location;
    pathname === '/' && history.push(ROUTE_PATH_LIST.home.path); // eslint-disable-line
    // 设定激活的menu
    const pathArr = pathname.split('/');
    switch (pathArr[1]) {
      case 'home':
      case 'selectCar':
        actived = activedNav.home;
        break;
      case 'record':
        actived = activedNav.record;
        break;
      default:
        break;
    }
    this.setState({
      actived,
    });
  }

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
              exact
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

  changeActive = val => {
    this.setState({
      actived: val,
    });
  };

  handleLoginOut = () => {
    const { history, dispatch } = this.props;
    dispatch(logout());
    history.push(ROUTE_PATH_LIST.login.path);
  };

  render() {
    const { actived } = this.state;
    const { reduxState = {} } = this.props;
    return (
      <Wrap>
        <Header>
          <div className="left">
            <span>
              <img src={logo} alt="网站标题" />
            </span>
          </div>
          <div className="right">
            <nav>
              <Link
                to="/home"
                className={classnames('hvr-overline-from-center', {
                  actived: actived === activedNav.home,
                })}
                onClick={() => this.changeActive(activedNav.home)}
              >
                首页
              </Link>
              <Link
                to="/record"
                className={classnames('hvr-overline-from-center', {
                  actived: actived === activedNav.record,
                })}
                onClick={() => this.changeActive(activedNav.record)}
              >
                报价记录
              </Link>
            </nav>
            <div className="userbox">
              <Avatar size={32} icon="user" />
              <span className="account">
                {reduxState.user.phone || '未登陆用户'}
              </span>
              <LoginOut className="exit" onClick={() => this.handleLoginOut()}>
                退出
              </LoginOut>
            </div>
          </div>
        </Header>
        <Content>
          {this.buildRoute(getMenuData())}
          <Route
            path={ROUTE_PATH_LIST.home.choice.path}
            exact
            component={Loadable({
              loader: () => import('../container/home/Choice'),
              loading: Load,
            })}
          />
          <Route
            path={ROUTE_PATH_LIST.price.oe.path}
            exact
            component={Loadable({
              loader: () => import('../container/price/OePrice'),
              loading: Load,
            })}
          />
          <Route
            path={ROUTE_PATH_LIST.price.vin.path}
            exact
            component={Loadable({
              loader: () => import('../container/price/VinPrice'),
              loading: Load,
            })}
          />
        </Content>
        <SearchFullModal />
        <ShopFormModal />
      </Wrap>
    );
  }
}

export default CenterLayout;
