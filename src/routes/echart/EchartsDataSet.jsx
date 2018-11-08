import React, { Component } from 'react';
import echarts from 'echarts';
import { Button } from 'antd';
import './wonderland';
import './macarons';
import { buildSeries } from '../../utils/chart';

function buildDatasetSeries(type, source) {
  // 判断type传入的类型
  if (typeof type === 'string') {
    const series = source[0].map(() => ({ type }));
    series.pop();
    return series;
  }
  if (Array.isArray(type)) {
    return type;
  }
  if (typeof type === 'object') {
    if (type.seriesLayoutBy === 'row') {
      const series = source.map(() => type);
      series.pop();
      return series;
    }
    return source[0].map(() => type);
  }
  return null;
}

class Echart extends Component {
  constructor(props) {
    super(props);
    this.random = Math.random() * 100000;
    this.random = this.random.toFixed(0).toString();
    this.state = {};
  }

  componentDidMount() {
    const {
      chartType,
      dimension = [],
      source = [],
      xAxis = { type: 'category', gridIndex: 0 },
      yAxis = { gridIndex: 0 },
      height = '400px',
      width = '400px',
    } = this.props;
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(
      document.getElementById(this.random),
      'macarons',
      {
        // 在数据量比较少的情况下使用svg，减少内存调用
        renderer: 'svg',
        height,
        width,
      },
    );
    // 绘制图表
    this.myChart.setOption({
      title: { text: 'ECharts 入门示例' },
      dataset: {
        dimension,
        source,
      },
      tooltip: {},
      xAxis,
      yAxis,
      series: buildDatasetSeries(chartType, source),
    });
  }

  render() {
    const { width, height } = this.props;
    return (
      <div>
        <Button
          onClick={() => {
            console.log('click');
            this.myChart.resize({ width, height });
          }}
        >
          Resize
        </Button>
        <div id={this.random} style={{ maxWidth: '100%' }} />
      </div>
    );
  }
}

export default Echart;
