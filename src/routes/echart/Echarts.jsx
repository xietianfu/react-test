import React, { Component } from 'react';
import echarts from 'echarts';
import { Button } from 'antd';
import './wonderland';
import './macarons';
import { buildSeries } from '../../utils/chart';

class Echart extends Component {
  constructor(props) {
    super(props);
    this.random = Math.random() * 100000;
    this.random = this.random.toFixed(0).toString();
    this.state = {};
  }

  componentDidMount() {
    const { chartType, xAxis, series, height } = this.props;
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(
      document.getElementById(this.random),
      'macarons',
      {
        // 在数据量比较少的情况下使用svg，减少内存调用
        renderer: 'svg',
        height,
      },
    );

    if (series.length < 1) {
      this.myChart.showLoading();
    } else {
      // 绘制图表
      this.myChart.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
          data: xAxis,
        },
        yAxis: {},
        series: buildSeries(chartType, series),
      });
    }
  }

  handleAddData = () => {
    const { chartType, xAxis, series } = this.props;
    series[0].data = [...series[0].data, 30];
    series[1].data = [...series[1].data, 60];

    this.myChart.setOption({
      xAxis: {
        data: [...xAxis, '羽绒服'],
      },
      series: buildSeries(chartType, series),
    });
  };

  handleResetLayout = () => {
    this.myChart.resize();
  };

  render() {
    window.onresize = () => {
      console.log(window.innerWidth);
      console.log(document.getElementById(this.random).offsetWidth);
      this.myChart.resize();
    };
    return (
      <div>
        <Button onClick={() => this.handleAddData()}>新增数据</Button>
        <Button onClick={() => this.handleResetLayout()}>重置布局</Button>
        <div id={this.random} style={{ maxWidth: '100%', margin: '100px' }} />
      </div>
    );
  }
}

export default Echart;
