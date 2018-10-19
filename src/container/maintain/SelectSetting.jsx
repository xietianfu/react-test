import React, { Component } from 'react';
import styled from 'styled-components';
import CheckListModal from './CheckListModal';
import { Button } from 'antd';

class SelectSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectList: [],
    };
  }

  handleClick = id => {
    const { selectList } = this.state;
    if (selectList.some(item => item === id)) {
      this.setState({
        selectList: selectList.filter(item => item !== id),
      });
    } else {
      this.setState({
        selectList: [...selectList, id],
      });
    }
  };

  getCheckListData = params => {
    this.setState({});
  };

  render() {
    const { selectList } = this.state;
    const { maintList } = this.props;
    const commonList = maintList.filter(item => item.maintType === '0');
    const conserveList = maintList.filter(item => item.maintType === '1');
    const examine = maintList.filter(item => item.maintType === '2');

    return (
      <table>
        <tbody>
          <tr>
            <td className="rowTitle">常规保养</td>
            <td>
              {commonList.map(item => (
                <Button
                  className={
                    selectList.some(val => val === item.baseItemId)
                      ? 'btnClick'
                      : ''
                  }
                  key={item.baseItemId}
                  onClick={() => this.handleClick(item.baseItemId)}
                >
                  {item.baseItemName}
                </Button>
              ))}
            </td>
          </tr>
          <tr>
            <td className="rowTitle">清洁养护</td>
            <td>
              {conserveList.map(item => (
                <Button
                  className={
                    selectList.some(val => val === item.baseItemId)
                      ? 'btnClick'
                      : ''
                  }
                  key={item.baseItemId}
                  onClick={() => this.handleClick(item.baseItemId)}
                >
                  {item.baseItemName}
                </Button>
              ))}
            </td>
          </tr>
          <tr>
            <td className="rowTitle">检查/更换</td>
            <td>
              {examine.map(item => (
                <Button
                  className={
                    selectList.some(val => val === item.baseItemId)
                      ? 'btnClick'
                      : ''
                  }
                  key={item.baseItemId}
                  onClick={() => this.handleClick(item.baseItemId)}
                >
                  {item.baseItemName} ghost{' '}
                </Button>
              ))}
            </td>
          </tr>
          <tr>
            <td className="rowTitle">工时</td>
            <td>
              <Button>工时费用</Button>
            </td>
          </tr>
          <tr>
            <td className="rowTitle">里程及时间</td>
            <td>
              <a className="recommend">按行驶公里数推荐项目</a>
              <CheckListModal />
              <Button className="viewBtn" type="primary">
                查看保养方案
              </Button>{' '}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default SelectSetting;
