import React, { Component } from 'react';
import Chart from './Echarts';
import EchartsDataSet from './EchartsDataSet';
import styles from '../../assets/styles/index.less';
import { GridElementCTX } from '../mix1/index';
import axios from 'axios';

const dimension = ['product', '2012', '2013', '2014', '2015'];
const source = [
  ['product', '2012', '2013', '2014', '2015'],
  ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
  ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
  ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4],
];

class Echarts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { id } = this.props;
    axios
      .get('/api/chart/detail', {
        params: {
          chartId: id,
        },
      })
      .then(res => {
        console.log(res);
      });
  }

  render() {
    const { id } = this.props;

    return (
      <GridElementCTX.Consumer>
        {({ elements }) => {
          const el = elements.find(item => item.key === id);
          console.log('el:', el);
          return (
            <EchartsDataSet
              chartType={el.type} // 图表类型
              source={el.data} // 图表数据
              width={el.w ? `${el.w * 120}px` : undefined} // 图表宽度
              height={el.h ? `${el.h * 15}px` : undefined} // 图表高度
              baseOption={{
                title: el.title,
              }}
              config={el.config}
            />
          );
        }}
      </GridElementCTX.Consumer>
    );
  }
}

export default Echarts;
