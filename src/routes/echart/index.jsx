import React, { Component } from 'react';
import echarts from 'echarts';
import { Button } from 'antd';
import './wonderland';

class Echart extends Component {
  constructor(props) {
    super(props);
    this.random = Math.random() * 100000;
    this.random = this.random.toFixed(0).toString();
    this.state = {};
  }

  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(
      document.getElementById(this.random),
      'wonderland',
      {
        // 在数据量比较少的情况下使用svg，减少内存调用
        renderer: 'svg',
        height: '400px',
      },
    );
    // 绘制图表
    this.myChart.setOption({
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  }

  handleAddData = () => {
    this.myChart.setOption({
      xAxis: {
        data: ['羽绒服'],
      },
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [66],
        },
      ],
    });
  };

  render() {
    const { height = '400px' } = this.props;
    return (
      <div>
        <Button onClick={() => this.handleAddData()}>新增数据</Button>
        <div id={this.random} style={{ maxWidth: '100%', height }} />
      </div>
    );
  }
}

export default Echart;
