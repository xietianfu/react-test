import { Pagination } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { MainWrap } from '../../components/Style/Wrap';
import { axios } from '../../services';
import { searchApi } from '../../services/search';
import PriceTable from './PriceTable';

const Content = styled.div`
  padding: 2em 0;
  background: white;
  min-height: 800px;
  h3 {
    padding-left: 8px;
    padding-left: 0.5em;
    border-left: 4px solid #3376ff;
    font-weight: 600;
    font-size: 18px;
  }
  div {
    min-height: 750px;
  }
`;

const status = {
  loaded: false,
  loding: true,
};

@connect(state => ({
  oeId: state.persistedReducer.centerLayout.oeList.id,
}))
class OePrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableSource: [], // oe价格列表
      page: 1,
      count: 10,
      total: 0,
      priceTableStatus: status.loaded, // 报价列表状态
    };
  }

  componentDidMount() {
    const { oeId: id } = this.props;
    const { page, count } = this.state;
    axios
      .get(searchApi.GetOeHistory, {
        params: {
          id,
          count,
          page,
        },
      })
      .then(res => {
        this.setState({
          tableSource: res.results,
          total: res.total,
        });
      });
  }

  fetch = (params = {}) => {
    const { page, count } = this.state;
    const { oeId: id } = this.props;
    const searchParams = { id, page, count, ...params };
    this.setState({
      priceTableStatus: status.loding,
    });
    axios
      .get(searchApi.GetOeHistory, {
        params: this.formatFetch(searchParams),
      })
      .then(res => {
        this.setState({
          tableSource: res.results,
          total: res.total,
          priceTableStatus: status.loaded,
        });
      });
  };

  formatFetch = params => {
    const paramsArr = Object.keys(params);
    let result = {};
    paramsArr.forEach(item => {
      switch (item) {
        case 'page':
          result = { ...params, ...result };
          break;
        default:
          break;
      }
    });
    return result;
  };

  render() {
    const { tableSource, count, total, page, priceTableStatus } = this.state;
    return (
      <MainWrap>
        <Content>
          <h3>价格详情</h3>
          <PriceTable tableSource={tableSource} type="oe" />
          {/* <Spin spinning={priceTableStatus}>
          </Spin> */}
          <Pagination
            defaultPageSize={count}
            defaultCurrent={page}
            total={total}
            // onChange={val => this.({ page: val })}
            style={{ textAlign: 'center' }}
            onChange={val => this.fetch({ page: val })}
          />
        </Content>
      </MainWrap>
    );
  }
}

export default OePrice;
