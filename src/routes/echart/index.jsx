import React, { Component } from 'react';
import Chart from './Echarts';
import EchartsDataSet from './EchartsDataSet';
import styles from '../../assets/styles/index.less';
import { GridElementCTX } from '../mix1/index';

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

  render() {
    const { id } = this.props;

    return (
      <GridElementCTX.Consumer>
        {({ elements }) => {
          const el = elements.find(item => item.key === id);
          return (
            <EchartsDataSet
              chartType={el.type}
              dimension={dimension}
              source={source}
              width={el.w ? `${el.w * 120}px` : undefined}
              height={el.h ? `${el.h * 15}px` : undefined}
              baseOption={{
                title: el.title,
              }}
            />
          );
        }}
      </GridElementCTX.Consumer>
    );
  }
}

export default Echarts;
