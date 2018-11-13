import { Menu } from 'antd';
import React from 'react';
import { GridElementCTX } from '../index';
import Echart from '../../echart';

const menuList = [
  {
    name: '折线图',
    key: 'line',
  },
  {
    name: '柱状图',
    key: 'bar',
  },
  {
    name: '饼图',
    key: 'pie',
  },
];

const MenuBar = () => {
  return (
    <GridElementCTX.Consumer>
      {({ addEl, elements }) => {
        return (
          <Menu
            onClick={e => {
              return addEl({
                key: e.key,
                type: e.key,
                x: 0,
                y: 0,
                w: 4,
                h: 20,
                dom: <Echart id={e.key} />,
              });
            }}
            mode="inline"
          >
            {menuList.map(item => (
              <Menu.Item key={item.key}>{item.name}</Menu.Item>
            ))}
          </Menu>
        );
      }}
    </GridElementCTX.Consumer>
  );
};

export default MenuBar;
