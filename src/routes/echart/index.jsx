import React, { Component } from 'react';
import Chart from './Echarts';

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

class Echarts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Chart chartType="bar" xAxis={axis} series={series} height="400px" />
        <Chart chartType="line" xAxis={axis} series={series} height="400px" />
      </div>
    );
  }
}

export default Echarts;
