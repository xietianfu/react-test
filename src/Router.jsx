import { hot } from 'react-hot-loader';
import React from 'react';
import { LocaleProvider } from 'antd';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
// 按路由拆分代码
import Loadable from 'react-loadable';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import LoadingComponent from './components/Load';

import { store } from './redux/store';

import BasicLayout from './layouts/BasicLayout';
import UserLayout from './layouts/UserLayout';

const history = createHistory();

const AsyncHome = Loadable({
  loader: () => import('./layouts/BasicLayout'),
  loading: LoadingComponent,
});

const AsyncLogin = Loadable({
  loader: () => import('./layouts/UserLayout'),
  loading: LoadingComponent,
});

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(Router, store);

// 路由配置
// 说明
// empty Route
// https://github.com/ReactTraining/react-router/issues/1982  解决人：PFight
// 解决react-router v4改变查询参数并不会刷新或者说重载组件的问题
const RouteMap = () => (
  <LocaleProvider locale={zhCN}>
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/home" component={AsyncHome} />
          <Route path="/login" component={AsyncLogin} />
        </Switch>
      </Router>
    </Provider>
  </LocaleProvider>
);

// 打开热更新
export default hot(module)(RouteMap);
