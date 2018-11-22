import { Button, Tabs } from 'antd';
import React, { Component } from 'react';
import { ChartSetting } from '../index';

const { TabPane } = Tabs;

const tabList = [
  {
    name: 'line',
    title: '折线图',
    children: [
      {
        name: 'baseLine',
        title: '基本折线图',
      },
      {
        name: 'areaLine',
        title: '面积折线图',
      },
    ],
  },
  {
    name: 'bar',
    title: '柱状图',
    children: [
      {
        name: 'baseBar',
        title: '基本柱状图',
      },
    ],
  },
  {
    name: 'pie',
    title: '饼图',
    children: [
      {
        name: 'basePie',
        title: '基本饼图',
      },
    ],
  },
];

class ChoiceChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ChartSetting.Consumer>
        {({ addConfig, toggleVisible }) => (
          <Tabs>
            {tabList.map(item => (
              <TabPane tab={item.title} key={item.name}>
                {item.children.map(val => (
                  <Button
                    key={val.name}
                    onClick={() => {
                      addConfig({
                        title: val.title, // 图表标题
                        type: item.name, // 图表类型
                      });
                      toggleVisible();
                    }}
                  >
                    {val.title}
                  </Button>
                ))}
              </TabPane>
            ))}
          </Tabs>
        )}
      </ChartSetting.Consumer>
    );
  }
}

export default ChoiceChart;
