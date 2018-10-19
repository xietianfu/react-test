import { Pagination, Table } from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addOeId } from '../../redux/action/oe';
import { addCar } from '../../redux/action/vin';
import { axios } from '../../services';
import { offerApi } from '../../services/search';
import FilterDate from './FilterDate';
import FilterType from './FilterType';
import { ROUTE_PATH_LIST } from '../../constants/menu';
import tableMaintain from '../../assets/images/table_maintain.png';
import tablePrice from '../../assets/images/table_price.png';

const Wrap = styled.div`
  margin: 0 auto;
  width: 1152px;
  overflow: hidden;
  /* padding: 1em; */
  /* padding: 0em calc(50% - 650px); */
`;

const Tool = styled.div`
  position: relative;
  padding: 2em 14px;
  background: #fff;
  height: 100px;
  h3 {
    padding-left: 8px;
    border-left: 4px solid #3376ff;
    font-weight: 600;
    font-size: 18px;
  }
`;

const Main = styled.div`
  padding-bottom: 1em;
  background: white;
  .pagination {
    margin: 1em 0;
    text-align: center;
  }
`;

const Pointer = styled.i`
  display: inline-block;
  background: #f50505;
  width: 8px;
  height: 8px;
  border-radius: 1000px;
  vertical-align: top;
`;

class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: 0,
      source: 0,
      endTime: 0,
      count: 10,
      page: 1,
      total: 0,
      tableSource: [],
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch = (params = {}) => {
    const { page, count, startTime, endTime, source } = this.state;
    const formatParams = this.formatFetch(params);
    axios
      .get(offerApi.record, {
        params: {
          page,
          count,
          startTime,
          endTime,
          source,
          ...formatParams,
        },
      })
      .then(res => {
        this.setState({
          ...formatParams,
          tableSource: res.results,
          total: res.total,
        });
      });
  };

  /**
   * 处理请求参数
   * @param {object} params -参数对象
   */
  formatFetch = params => {
    const paramsArr = Object.keys(params);
    let result = {};
    paramsArr.forEach(item => {
      switch (item) {
        case 'page':
          result = { ...params, ...result };
          break;
        case 'startTime':
        case 'endTime':
        case 'source':
          result = { ...params, ...result, page: 1 };
          break;
        default:
          break;
      }
    });
    return result;
  };

  getTimes = times => {
    const startTime = times.startTime === 0 ? 0 : Date.parse(times.startTime);
    const endTime = times.endTime === 0 ? 0 : Date.parse(times.endTime);
    this.setState({
      startTime,
      endTime,
    });
    this.fetch({ startTime, endTime, page: 1 });
  };

  onPagination = (page, pageSize) => {
    this.setState({
      page,
    });
    this.fetch({ page });
  };

  getFilterType = source => {
    this.setState({
      source,
    });
    this.fetch({ source });
  };

  render() {
    const { pushCar, history } = this.props;
    const columns = [
      {
        title: '车型配件',
        dataIndex: 'vehicleName',
        render: (text, record) => (
          <span>
            <img
              src={tablePrice}
              alt=""
              style={{ verticalAlign: 'text-top' }}
            />
            &nbsp;
            {text || record.oeName}
          </span>
        ),
      },
      {
        title: 'VIN码',
        dataIndex: 'search',
        render: (text, record) => (
          <span>{record.source === 0 ? text : ''}</span>
        ),
      },
      {
        title: '查询时间',
        dataIndex: 'time',
        render: text => <span>{moment(text).format('YYYY-MM-DD HH:mm')}</span>,
      },
      {
        title: '查询类别',
        dataIndex: 'class',
        render: (text, record) => (
          <span>{record.source === 1 ? '价格' : '保养'}</span>
        ),
      },
      {
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) => (
          <a onClick={() => pushCar(record, history)}>
            查看详情
            {record.newOffer ? <Pointer /> : ''}
          </a>
        ),
      },
    ];

    const { tableSource, count, total, page } = this.state;
    return (
      <Wrap>
        <Tool>
          <h3>报价记录</h3>
          <FilterType getData={this.getFilterType} />
          <FilterDate pushTimes={this.getTimes} />
        </Tool>
        <Main>
          <Table
            columns={columns}
            dataSource={tableSource}
            pagination={false}
            style={{ minHeight: '650px' }}
          />
          <Pagination
            defaultCurrent={page}
            current={page}
            defaultPageSize={count}
            total={total}
            onChange={this.onPagination}
            className="pagination"
          />
        </Main>
      </Wrap>
    );
  }
}

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
          pageGoto(source, history);
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
)(Record);
