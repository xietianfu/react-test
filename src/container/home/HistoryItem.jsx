import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import moment from 'moment';
import { axios } from '../../services';
import { searchApi } from '../../services/search';
import { connect } from 'react-redux';
import { addCar } from '../../redux/action/vin';
import { addOeId } from '../../redux/action/oe';
import { ROUTE_PATH_LIST } from '../../constants/menu';

const Wrap = styled.div`
  position: relative;
  margin: 1em 0;
  padding: 2em 4em;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  cursor: pointer;
  transition: box-shadow 0.5s;

  h4 {
    margin-bottom: 1em;
    font-size: 1.5em;
    font-weight: 500;
  }
  p {
    padding: 0.5em 0;
    color: #666666;
  }
  .goto {
    position: absolute;
    right: 5%;
    top: 50%;
    font-size: 2em;
    transform: translateY(-50%);
    transition: right 0.5s;
    color: #cecece;
  }

  &:hover {
    box-shadow: 0 2px 10px 2px rgba(33, 53, 95, 0.13);
    .goto {
      right: 4%;
      color: #333;
      /* color: red; */
    }
  }
`;

const NewOffer = styled.span`
  position: absolute;
  color: #ff7200;
  font-size: 16px;
  right: 83px;
  top: 57px;
  .new {
    display: inline-block;
    background: #ff7200;
    width: 12px;
    height: 12px;
    border-radius: 1000px;
  }
`;

/**
 * 查询历史结构
 * @param {object} data - 车型数据
 * @param {function} pushCar - 添加车型数据到reducer
 * @param {object} history
 */
const HistoryItem = ({ data, pushCar, history }) => (
  <Wrap onClick={() => pushCar(data, history)}>
    <h4>{data.oeName === '' ? data.vehicleName : data.oeName}</h4>
    <p>
      {data.source === 0 ? 'VIN码：' : 'OE号：'}
      {data.search || ''}
    </p>
    <p>
      查询时间：
      {moment(data.time).format('YYYY-MM-DD HH:mm') || '暂无时间'}
    </p>
    {data.newOffer ? (
      <NewOffer>
        <i className="new" /> 最新经销商报价
      </NewOffer>
    ) : (
      ''
    )}
    <Icon className="goto" type="right" theme="outlined" />
  </Wrap>
);

function pageGoto(source, history) {
  switch (source) {
    case 1:
      history.push(ROUTE_PATH_LIST.price.vin.path);
      break;
    case 2:
      history.push(ROUTE_PATH_LIST.maintain.path);
      break;
    default:
      break;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    pushCar: (data, history) => {
      const { source, id, vehicleName, oeName } = data;
      switch (oeName) {
        case '':
          dispatch(addCar({ ...data, historyId: id, name: vehicleName }));
          // 跳转价格或者保养页
          pageGoto(source, history);
          break;
        case 1:
          dispatch(addCar({ ...data }));
          dispatch(addOeId(id));
          history.push(ROUTE_PATH_LIST.price.oe.path);
          break;
        default:
          dispatch(addCar({ ...data }));
          dispatch(addOeId(id));
          history.push(ROUTE_PATH_LIST.price.oe.path);
          break;
      }
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(HistoryItem);
