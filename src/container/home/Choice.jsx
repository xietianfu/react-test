import queryString from 'query-string';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BreadcrumbTool from '../../components/Header/BreadcrumbTool';
import { MainWrap } from '../../components/Style/Wrap';
import { addCar } from '../../redux/action/vin';
import { axios } from '../../services';
import { ROUTE_PATH_LIST } from '../../constants/menu';
import { vinApi } from '../../services/vin';
import { searchTypeList } from './constants';

const routeList = [
  {
    name: '首页',
    to: ROUTE_PATH_LIST.home.path,
  },
  '选择车型',
];

const Main = styled.div`
  height: 85vh;
  overflow: hidden;
  background: white;
  h1 {
    margin: 1.5em 0;
    text-align: center;
    /* text-align: 1.5; */
  }
`;

const Cell = styled.p`
  margin: 0.5em 2em;
  padding: 0 2em;
  background: #f6f6f6;
  cursor: pointer;
  transition: box-shadow 0.5s;
  font-size: 14px;
  line-height: 2.5;
  &:hover {
    box-shadow: 0 2px 10px 2px rgba(33, 53, 95, 0.13);
    background: white;
  }
`;

/**
 * 选择车型，跳转到价格详情页面
 * @param {Array} vinList - 车型列表
 * @param {object} history - 历史
 * @param {function} pushCar - 添加汽车到reducer中
 * @author xietf
 */
const Choice = ({ vinList, history, pushCar }) => {
  /**
   * 获取车型的historyId,name，添加到reducer中，然后跳转到价格详情或者保养选择
   * @param {object} item - 一条车型数据
   * @author xietf
   */
  function gotoPrice(item) {
    const parsed = queryString.parse(location.search); // eslint-disable-line
    axios
      .get(vinApi.vehicleById, {
        params: {
          vin: parsed.vin,
          id: item.id,
          flag: 1, // 后端辨识用
        },
      })
      .then(res => {
        pushCar({
          ...item,
          historyId: res.historyId,
          name: res.name,
          vehicleId: item.id,
        });
        // 进行不同页面跳转
        switch (parsed.type) {
          case searchTypeList[0].id:
            history.push(ROUTE_PATH_LIST.price.vin.path);
            break;
          case searchTypeList[1].id:
            history.push(ROUTE_PATH_LIST.maintain.path);
            break;
          default:
            break;
        }
      });
  }
  // 当只有一条车型列表时，直接跳转
  if (vinList.length === 1) {
    gotoPrice(vinList[0]);
  }
  return (
    <MainWrap>
      <BreadcrumbTool routeList={routeList} />
      <Main>
        <h1>请选择车型</h1>
        {vinList.map(item => (
          <Cell key={item.id} onClick={() => gotoPrice(item)}>
            {item.name}
          </Cell>
        ))}
      </Main>
    </MainWrap>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    pushCar: data => {
      dispatch(addCar(data));
    },
  };
};

export default connect(
  state => ({
    vinList: state.persistedReducer.centerLayout.vinList,
  }),
  mapDispatchToProps,
)(Choice);
