import echarts from 'echarts';
import React, { Component } from 'react';
import './macarons';
import './wonderland';

function buildDatasetSeries(type, source) {
  console.log(type);
  // 判断type传入的类型
  if (typeof type === 'string') {
    let series = source[0].map(() => ({ type }));
    series.pop();
    console.log(series);
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

    this.setOption();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const {
      chartType,
      dimension = [],
      source = [],
      xAxis = { type: 'category', gridIndex: 0 },
      yAxis = { gridIndex: 0 },
      height = '400px',
      width = '400px',
    } = this.props;
    console.log('getSnapshotBeforeUpdate');
    this.setOption();
    this.myChart.resize({ width, height });
  }

  componentWillUnmount() {
    this.myChart = null;
  }

  shouldHideCoord = chartType => {
    console.log(chartType);

    switch (chartType) {
      case 'pie':
        return true;
      default:
        return false;
    }
  };

  setOption = () => {
    const {
      chartType,
      dimension = [],
      source = [],
      xAxis = { type: 'category', gridIndex: 0 },
      yAxis = { gridIndex: 0 },
      height = '400px',
      width = '400px',
      baseOption,
    } = this.props;
    const { title } = baseOption;
    console.log(title);
    if (this.shouldHideCoord(chartType)) {
      // 绘制图表
      this.myChart.setOption({
        title: { text: title || 'ECharts 入门示例' },
        dataset: {
          // dimension,
          source,
        },
        xAxis: null,
        yAxis: null,
        tooltip: {},
        series: buildDatasetSeries(chartType, source),
      });
    } else {
      // 绘制图表
      this.myChart.setOption({
        title: { text: title || 'ECharts 入门示例' },
        dataset: {
          // dimension,
          source,
        },
        tooltip: {},
        xAxis,
        yAxis,
        series: buildDatasetSeries(chartType, source),
        // series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
      });
    }
  };

  render() {
    return <div id={this.random} style={{ maxWidth: '100%' }} />;
  }
}

export default Echart;
