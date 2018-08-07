import React from 'react';
import { LocaleProvider } from 'antd';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
// 按路由拆分代码
import Loadable from 'react-loadable';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import LoadingComponent from './components/loading';

const history = createHistory();

const AsyncHome = Loadable({
  loader: () => import('./layouts/BasicLayout'),
  loading: LoadingComponent
});

const AsyncLogin = Loadable({
  loader: () => import('./layouts/UserLayout'),
  loading: LoadingComponent
});

// 路由配置
// 说明
// empty Route
// https://github.com/ReactTraining/react-router/issues/1982  解决人：PFight
// 解决react-router v4改变查询参数并不会刷新或者说重载组件的问题
export default () => (
  <LocaleProvider locale={zhCN}>
    <Router history={history}>
      <Switch>
        <Route path="/home" exact component={AsyncHome} />
        <Route path="/login" exact component={AsyncLogin} />
      </Switch>
    </Router>
  </LocaleProvider>
);
