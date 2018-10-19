import { Button, DatePicker } from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
import styled from 'styled-components';

const { RangePicker } = DatePicker;

const Wrap = styled.div`
  position: absolute;
  right: 14px;
  top: 55px;
`;

const dateOptionList = [
  {
    key: 'all',
    name: '全部',
  },
  {
    key: 'day',
    name: '今天',
  },
  {
    key: 'week',
    name: '近7天',
  },
  {
    key: 'month',
    name: '近30天',
  },
];

class FilterDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: {
        startTime: 0,
        endTime: 0,
      },
      optioned: dateOptionList[0].key,
    };
  }

  /**
   * 修改时间跨度
   * @param {string} val 选中的按钮值
   * @author xietf
   */
  changeRadio = val => {
    let { times, optioned } = this.state; // eslint-disable-line
    const { pushTimes } = this.props;
    switch (val) {
      case 'all':
        times.startTime = 0;
        times.endTime = 0;
        break;
      case 'day':
        times.startTime = moment().startOf('day');
        times.endTime = moment().endOf('day');
        break;
      case 'week':
        times.startTime = moment().subtract(7, 'days');
        times.endTime = moment();
        break;
      case 'month':
        times.startTime = moment().subtract(30, 'days');
        times.endTime = moment();
        break;
      default:
        break;
    }
    this.setState({
      times,
      optioned: val,
    });
    pushTimes(times);
  };

  dateChange = (value, dateString) => {
    const { pushTimes } = this.props;
    const times = {
      startTime: value[0],
      endTime: value[1],
    };
    this.setState({
      optioned: 'null',
      times,
    });
    pushTimes({ startTime: value[0], endTime: value[1] });
  };

  render() {
    const { times, optioned } = this.state;
    return (
      <Wrap>
        <Button.Group>
          {dateOptionList.map(item => (
            <Button
              key={item.key}
              onClick={() => this.changeRadio(item.key)}
              type={item.key === optioned ? 'primary' : 'default'}
            >
              {item.name}
            </Button>
          ))}
        </Button.Group>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <RangePicker
          defaultValue={[times.startTime, times.endTime]}
          value={[times.startTime, times.endTime]}
          onChange={this.dateChange}
        />
      </Wrap>
    );
  }
}

export default FilterDate;
