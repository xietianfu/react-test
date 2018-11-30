import echarts from 'echarts';
import React, { Component } from 'react';
import { Input, Button } from 'antd';
import '@components/Charts/thems/macarons';
import '@components/Charts/thems/wonderland';
import { axios } from '../../../services';

/**
 * 根据图表数据和图表类型构建出serise的数据结构
 * @param {mix} type 图表的类型
 * @param {Array} source 图表数据
 * @description 当type为字符串时，整个图表都是一种类型
 * @description 当type为数组时，依照数组类型构建出混合图表
 * @description 当type为对象时，依照对象参数构建出多个图表或者自定义相关的参数
 */
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
    this.state = {
      filterList: [],
      args: [],
      sql: '',
    };
  }

  componentDidMount() {
    const { id } = this.props;
    // 获取组件的大小，这是图表的宽高
    // const fatherDom = document.querySelector(`#${id}`);
    // const width = fatherDom.offsetWidth;
    // const height = fatherDom.offsetHeight;

    axios
      .get('/chart/detail', {
        params: {
          chartId: id,
        },
      })
      .then(res => {
        const { config, sql } = res.data;
        const filterRegex = /({(\w+)})/g;
        const filterList = sql.match(filterRegex);
        this.setState({
          sql,
          config,
          filterList,
          args: filterList.map(item => ''),
        });

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
          .post('/sql_result', {
            sql,
          })
          .then(res => {
            this.setState({
              source: res.data,
            });
            this.setOption();
          });
      });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { height = '600px', width = '100px', source } = this.state;
    const { editKey, removeEditKey, id } = this.props;
    if (editKey) {
      axios
        .get('/chart/detail', {
          params: {
            chartId: id,
          },
        })
        .then(res => {
          const { config, sql } = res.data;
          this.setState({
            config,
          });

          return sql;
        })
        .then(sql => {
          axios
            .post('/sql_result', {
              sql,
            })
            .then(res => {
              this.setState({
                source: res.data,
              });
            })
            .then(() => {
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
    const { config, source, args } = this.state;
    const commonConfig = {
      title: { text: config.title.text },
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

  changeFilter = (index, val) => {
    console.log(index, val);
    const { args } = this.state;
    args[index] = val;
    this.setState({
      args,
    });
  };

  filterSumbit = () => {
    const { sql, args } = this.state;
    axios
      .post('/sql_result', {
        sql,
        args,
      })
      .then(res => {
        this.setState({
          source: res.data,
        });
      })
      .then(() => {
        this.setOption();
      });
  };

  render() {
    const { filterList, args } = this.state;
    return (
      <div>
        {filterList.map((item, index) => {
          return (
            <div key={item}>
              <p>{item}</p>
              <Input
                value={args[index]}
                onChange={e => this.changeFilter(index, e.target.value)}
              />
            </div>
          );
        })}
        {filterList.length > 0 && (
          <Button type="primary" block onClick={() => this.filterSumbit()}>
            修改条件
          </Button>
        )}
        <div id={this.random} style={{ maxWidth: '100%' }} />
      </div>
    );
  }
}

export default Echart;
