import React, { Component } from 'react';
import Chart from './Echarts';
import EchartsDataSet from './EchartsDataSet';

const axis = ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'];
const series = [
  {
    name: '日销量',
    data: [5, 20, 36, 10, 10, 20],
  },
  {
    name: '月销量',
    data: [15, 200, 66, 40, 10, 20],
  },
];

const dimension = ['product', '2012', '2013', '2014', '2015'];
const source = [
  // ['product', '2012', '2013', '2014', '2015'],
  ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
  ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
  ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4],
];

class Echarts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Chart chartType="bar" xAxis={axis} series={series} height="400px" />
        <EchartsDataSet
          chartType={{ type: 'line', seriesLayoutBy: 'row' }}
          dimension={dimension}
          source={source}
          height="400px"
        />
      </div>
    );
  }
}

export default Echarts;
