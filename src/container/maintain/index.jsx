import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { MainWrap } from '../../components/Style/Wrap';
import AutoSettingModal from './AutoSettingModal';
import MaintainProject from './MaintainProject';
import SelectSetting from './SelectSetting';
import { maintainApi } from '../../services/maintain';
import { axios } from '../../services';

const Wrap = styled(MainWrap)`
  background: #fff;
  min-height: '850px';
  padding: 1em 23px;

  h3 {
    padding-left: 8px;
    border-left: 4px solid #3376ff;
    font-weight: 600;
    font-size: 18px;
  }

  table,
  td {
    border: 1px solid #e5e5e5;
  }
  td,
  th {
    padding: 5px 1em;
  }
  table {
    border-collapse: collapse;
    font-size: 14px;
    width: 100%;

    tr {
      height: 43px;
      .rowTitle {
        background: #f2f2f2;
        color: #666666;
        width: 130px;
        text-align: center;
      }
    }
  }

  .title {
    margin: 23px 0;
  }

  .btnClick {
    /* 解决antd的focus问题 */
    color: #40a9ff !important;
    border-color: #40a9ff !important;
  }

  .recommend {
    margin: 0 42em 0 4px;
    border-bottom: 1px solid #1199e7;
    cursor: pointer;
    color: #1199e7;
  }

  .viewBtn {
    width: 188px;
  }

  .ant-btn {
    margin: 4px 8px;
    &:active,
    &:focus {
      color: rgba(0, 0, 0, 0.65);
      border-color: #d9d9d9;
    }
  }
  .ant-btn-primary {
    &:focus {
      color: white;
      border-color: #d9d9d9;
    }
  }
`;

const Header = styled.div`
  margin-bottom: 15px;
  border-bottom: 1px solid #e5e5e5;
`;

const Car = styled.div`
  h1 {
    font-size: 18px;
  }
  p {
    margin: 12px 0;
    font-size: 16px;
  }
`;

@connect(state => ({
  car: state.persistedReducer.centerLayout.car,
}))
class Maintain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maintList: [],
    };
  }

  componentDidMount() {
    const { car } = this.props;
    axios
      .get(maintainApi.getMainList, {
        params: {
          vehicleId: car.vehicleId,
        },
      })
      .then(res => {
        this.setState({
          maintList: res.maintList,
        });
      });
  }

  render() {
    const { maintList } = this.state;
    const { car } = this.props;
    return (
      <Wrap>
        <Header>
          <Car>
            <h1>{car.name}</h1>
            <p>
              vin码：
              {car.search}
            </p>
          </Car>
        </Header>
        <SelectSetting maintList={maintList} />
        <h3 className="title">保养方案</h3>
        <MaintainProject />
        <AutoSettingModal />
      </Wrap>
    );
  }
}

export default Maintain;
