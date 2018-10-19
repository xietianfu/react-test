import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import createHistory from 'history/createBrowserHistory';
import React from 'react';
import { hot } from 'react-hot-loader';
// 按路由拆分代码
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import LoadingComponent from './components/Load';
import { persistor, store } from './redux/index';
import UserLayout from './layouts/UserLayout';

const history = createHistory();

const AsyncHome = Loadable({
  loader: () => import('./layouts/CenterLayout'),
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
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          {/* <Router> */}
          <Switch>
            {/* <Route path="/login" component={UserLayout} /> */}
            <Route exact path="/login" component={AsyncLogin} />
            <Route path="/" component={AsyncHome} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  </LocaleProvider>
);

// 打开热更新
export default hot(module)(RouteMap);
