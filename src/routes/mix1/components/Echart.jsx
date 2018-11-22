import echarts from 'echarts';
import React, { Component } from 'react';
import '@components/Charts/thems/macarons';
import '@components/Charts/thems/wonderland';
import axios from 'axios';

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
    const { height = '400px', width = '400px', id } = this.props;
    axios
      .get('/api/chart/detail', {
        params: {
          chartId: id,
        },
      })
      .then(res => {
        console.log('chartDetail', res.data.data);
        const { config, sql } = res.data.data;
        this.setState(
          {
            config,
          },
          () => console.log('config', config),
        );

        // 基于准备好的dom，初始化echarts实例
        this.myChart = echarts.init(
          document.getElementById(this.random),
          'macarons',
          {
            // 在数据量比较少的情况下使用svg，减少内存调用
            renderer: 'svg',
            height: '600px',
            width: '800px',
          },
        );
        return sql;
      })
      .then(sql => {
        axios
          .post('/api/sql_result', {
            sql,
          })
          .then(res => {
            this.setState({
              source: res.data.data,
            });
            this.setOption();
          });
      });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { height = '600px', width = '100px', source } = this.state;
    const { editKey, removeEditKey, id } = this.props;
    console.log('editKey', editKey);
    if (editKey) {
      console.log('should updata');
      axios
        .get('/api/chart/detail', {
          params: {
            chartId: id,
          },
        })
        .then(res => {
          const { config, sql } = res.data.data;
          this.setState({
            config,
          });

          return sql;
        })
        .then(sql => {
          axios
            .post('/api/sql_result', {
              sql,
            })
            .then(res => {
              this.setState({
                source: res.data.data,
              });
              this.setOption();
            });
        });
      this.myChart.resize({ width: null, height: null });
      removeEditKey();
    }
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
    const { config, source } = this.state;
    console.log('config', config);
    const commonConfig = {
      title: { text: config.title },
      dataset: {
        source,
      },
      legend: config.legend,
      series: buildDatasetSeries(config.type, source),
    };
    if (this.shouldHideCoord(config.type)) {
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
        xAxis: { type: 'category', gridIndex: 0 },
        yAxis: { gridIndex: 0 },
      });
    }
  };

  render() {
    return <div id={this.random} style={{ maxWidth: '100%' }} />;
  }
}

export default Echart;
