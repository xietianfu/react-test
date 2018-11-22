import { Button, Row, Col, Steps } from 'antd';
import React from 'react';
import Menu from './Menu';
import { Route } from 'react-router-dom';
import { GridElementCTX } from '../index';
import AddChart from './AddChart';
import ChoiceChart from './ChoiceChart';
import style from '../style.less';

export const path = {
  addChart: '/mixin/mix1',
  choiceChart: '/mixin/mix1/choice',
  choiceDataBase: '/mixin/mix1/choice-data-base',
  settingChart: '/mixin/mix1/setting-chart',
};

const Header = () => {
  // console.log('header');
  return (
    <div className={style.header}>
      <Row>
        <Route path={path.addChart} component={AddChart} exact />
        <Route path={path.choiceChart} component={ChoiceChart} exact />
        {/* <Col span={8}><Menu /></Col> */}
      </Row>
    </div>
  );
};

export default Header;
