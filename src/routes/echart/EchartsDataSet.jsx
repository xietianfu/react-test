import echarts from 'echarts';
import React, { Component } from 'react';
import './macarons';
import './wonderland';

function buildDatasetSeries(type, source) {
  // 判断type传入的类型
  if (typeof type === 'string') {
    let series = source[0].map(() => ({ type }));
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
    const { height = '400px', width = '400px' } = this.props;
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
    const { height = '400px', width = '400px' } = this.props;
    this.setOption();
    this.myChart.resize({ width, height });
  }

  componentWillUnmount() {
    this.myChart = null;
  }

  shouldHideCoord = chartType => {
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
      source = [],
      xAxis = { type: 'category', gridIndex: 0 },
      yAxis = { gridIndex: 0 },
      baseOption,
      config,
    } = this.props;
    console.log(config);
    const { title } = baseOption;
    const commonConfig = {
      title: { text: title || 'ECharts 入门示例' },
      dataset: {
        source,
      },
      legend: config.legend,
      series: buildDatasetSeries(chartType, source),
    };
    if (this.shouldHideCoord(chartType)) {
      // 绘制图表
      this.myChart.setOption({
        ...commonConfig,
        xAxis: null,
        yAxis: null,
      });
    } else {
      // 绘制图表
      this.myChart.setOption({
        ...commonConfig,
        xAxis,
        yAxis,
      });
    }
  };

  render() {
    return <div id={this.random} style={{ maxWidth: '100%' }} />;
  }
}

export default Echart;
