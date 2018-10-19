import {
  Button,
  Checkbox,
  Icon,
  Input,
  message,
  Modal,
  Pagination,
  Spin,
  Table,
} from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import empty from '../../assets/images/empty_pic.jpg';
import { MainWrap } from '../../components/Style/Wrap';
import { axios } from '../../services';
import { searchApi } from '../../services/search';
import PriceTable from './PriceTable';
import ViewHistoryPic from './ViewHistoryPic';

const { Search } = Input;

const Tool = styled.div`
  position: relative;
  padding: 1em;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
`;
const ModalTool = styled.div`
  margin-top: 1em;
  margin-right: 2em;
  float: right;
  &::after {
    content: '';
    clear: both; /*清除浮动*/
    display: block; /*确保该元素是一个块级元素*/
  }
  .ant-checkbox-wrapper {
    padding-right: 1em;
  }
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

const Control = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
`;

const Content = styled.div`
  position: relative;
  overflow: hidden;
  p {
    margin: 1em 0;
    margin-left: 0.7em;
    padding-left: 0.5em;
    border-left: 4px solid #3376ff;
    font-size: 16px;
    line-height: 1;
  }
  .ant-table-selection {
    .ant-checkbox {
      display: none;
    }
  }
  .fixHeader {
    .ant-table-content {
      .ant-table-header {
        height: 63px;
        overflow: auto;
      }
    }
  }

  .pagination {
    padding-top: 1em;
  }
  .table {
    min-height: 650px;
  }
`;

const SearchBox = styled.div`
  margin: 2em 14em;
  h3 {
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
  }
  .ant-input-search {
    display: inline-block;
    width: 500px;
  }
`;

const status = {
  loaded: false,
  loding: true,
};

@connect(state => ({
  car: state.persistedReducer.centerLayout.car,
}))
class VinPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableSource: [], // 价格详情列表数据
      partSource: [], // 搜索的配件数据
      selectedRows: [], // 选中的配件列表
      partsPic: '', // 添加配件弹窗中的图片
      partsVisible: false, // 图片弹窗的可见性
      page: 1,
      count: 10,
      total: 0,
      visible: false,
      isPush: true, // 是否接受市场价推送
      priceTableStatus: status.loaded, // 报价列表状态
      partTableStatus: status.loaded, // 添加配件状态
    };
  }

  componentDidMount() {
    this.fetch();
  }

  /**
   * 获取配件查询列表
   * @param {object} params 查询参数
   */
  fetch = (params = {}) => {
    const { page, count } = this.state;
    const { car } = this.props;
    const { historyId } = car;
    const searchParams = { historyId, page, count, ...params };
    this.setState({
      priceTableStatus: status.loding,
    });
    axios
      .get(searchApi.GetPartsHistory, {
        params: this.formatFetch(searchParams),
      })
      .then(res => {
        this.setState({
          tableSource: res.partsList,
          total: res.total,
          priceTableStatus: status.loaded,
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
        default:
          break;
      }
    });
    return result;
  };

  /**
   * 开关添加配件modal
   */
  toggleModal = () => {
    const { visible } = this.state;

    this.setState({
      visible: !visible,
      partSource: [],
    });
  };

  /**
   * 查询配件
   * @param {string} val 配件名称
   */
  hanlePartsSearch = val => {
    const { car } = this.props;
    this.setState({
      partTableStatus: status.loding,
    });
    axios
      .get(searchApi.partsSearch, {
        params: {
          keyword: val,
          vehicleId: car.vehicleId,
          brandCode: car.brandCode,
        },
      })
      .then(res => {
        if (res.partsList.length === 0) {
          message.warn('搜索结果为空');
        }
        this.setState({
          partSource: res.partsList,
          partTableStatus: status.loaded,
        });
      });
  };

  /**
   * 获取历史图片
   */
  fetchPartsPic = params => {
    const { brandCode, oeId, vehicleId } = params;
    axios
      .get(searchApi.PartsPic, {
        params: { brandCode, oeId, vehicleId },
      })
      .then(res => {
        this.setState({
          partsPic: res,
          partsVisible: true,
        });
      });
  };

  /**
   * 监听市场成交价选择框
   * @param {object} e 选择框的节点元素
   * @author xietf
   */
  onCheckchange = e => {
    const isPush = e.target.checked ? 1 : 0;
    console.log(e.target.checked);
    this.setState({
      isPush,
    });
  };

  /**
   * 添加配件查询历史
   */
  submitPartsHistory = () => {
    const { car } = this.props;
    const { selectedRows, isPush } = this.state;
    if (selectedRows.length > 0) {
      this.setState({
        partTableStatus: status.loding,
      });
      axios
        .post(searchApi.PartsHistory, {
          isPush,
          historyId: car.historyId,
          partsInfo: selectedRows.map(item => ({
            oe: item.oe,
            partsName: item.stdPartName,
            oeId: item.oeId,
          })),
        })
        .then(res => {
          this.setState({
            visible: false,
            partTableStatus: status.loaded,
          });
          this.fetch();
        })
        .catch(() => this.setState({ partTableStatus: status.loaded }));
    } else {
      message.warn('请选择配件');
    }
  };

  /**
   * 打开关闭添加配件中的查看图片modal
   */
  togglePicModal = () => {
    const { partsVisible } = this.state;
    this.setState({
      partsVisible: !partsVisible,
    });
  };

  /**
   * 获取配件图片
   * @param {object} params
   */
  fetchPartsPic = params => {
    const { brandCode, oeId, vehicleId } = params;

    axios
      .get(searchApi.PartsPic, {
        params: { brandCode, oeId, vehicleId },
      })
      .then(res => {
        this.setState({
          partsPic: res.pic,
        });
        this.togglePicModal();
      });
  };

  render() {
    const columns = [
      {
        title: '标准零件名称',
        dataIndex: 'oeName',
        width: 200,
        hideDefaultSelections: true,
      },
      {
        title: '原厂零件名称',
        dataIndex: 'stdPartName',
        width: 200,
      },
      {
        title: '备注',
        dataIndex: 'remark',
        width: 350,
      },
      {
        title: 'OE号',
        dataIndex: 'oe',
        width: 300,
      },
      {
        title: '图片',
        dataIndex: 'oePicNo',
        width: 100,
        align: 'center',
        render: (text, record) => (
          // eslint-disable-next-line
          <a
            style={{ paddingLeft: '20px' }}
            onClick={() => this.fetchPartsPic(record)}
          >
            <Icon type="picture" theme="twoTone" />
          </a>
        ),
      },
    ];

    const rowSelection = {
      /**
       * 监听列表选中
       */
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRows,
        });
      },
      hideDefaultSelections: false,
      // onSelectAll:
      // type: 'radio',
    };

    const {
      tableSource,
      partSource,
      page,
      total,
      count,
      visible,
      partsPic,
      partsVisible,
      partTableStatus,
      priceTableStatus,
      isPush,
    } = this.state;
    const { car } = this.props;
    return (
      <MainWrap>
        <div
          style={{ background: '#fff', minHeight: '850px', padding: '1em 0' }}
        >
          <Tool>
            <Car>
              <h1>{car.name}</h1>
              <p>
                vin码：
                {car.search}
              </p>
            </Car>
            <Control>
              <Button
                icon="plus"
                type="primary"
                // size="large"
                onClick={() => this.toggleModal()}
              >
                添加配件
              </Button>
            </Control>
          </Tool>
          <Content>
            <p>价格详情</p>
            <div className="table">
              <PriceTable
                tableSource={tableSource}
                type="vin"
                loading={priceTableStatus}
              />
            </div>
            <Pagination
              className="pagination"
              defaultCurrent={page}
              total={total}
              defaultPageSize={count}
              onChange={val => this.fetch({ page: val })}
              style={{ textAlign: 'center' }}
            />
          </Content>
        </div>
        <Modal
          // title="添加配件"
          visible={visible}
          onCancel={this.toggleModal}
          onOk={this.toggleModal}
          footer={null}
          bodyStyle={{ padding: '1em 0' }}
          width="1000px"
          destroyOnClose
          maskClosable={false}
        >
          <Content>
            <SearchBox>
              <h3>添加配件：</h3>
              <Search
                placeholder="输入零件名称或者别称"
                enterButton="搜索"
                size="large"
                onSearch={value => this.hanlePartsSearch(value)}
              />
            </SearchBox>
            <div style={{ height: '1px', background: '#E5E5E5' }} />
            <p style={{ fontSize: '16px' }}>自动匹配结果</p>
            <Spin spinning={partTableStatus}>
              <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={partSource}
                size="middle"
                hideDefaultSelections
                pagination={{ pageSize: 5000, hideOnSinglePage: true }}
                scroll={{ y: 440 }}
                style={{ minHeight: '400px', overflow: 'auto' }}
                className="fixHeader"
              />
            </Spin>
            <hr />
            <ModalTool>
              <Checkbox onChange={this.onCheckchange} defaultChecked>
                接受市场成交价推送
              </Checkbox>
              <Button type="primary" onClick={() => this.submitPartsHistory()}>
                &ensp;确定&ensp;
              </Button>
            </ModalTool>
          </Content>
        </Modal>
        <Modal
          title="配件图片"
          visible={partsVisible}
          onCancel={this.togglePicModal}
          onOk={this.togglePicModal}
          footer={null}
          bodyStyle={{ padding: '1em 0' }}
          width="750px"
        >
          <img src={partsPic || empty} width="750px" alt="配件图片" />
        </Modal>

        {/* 查看图片 */}
        <ViewHistoryPic />
      </MainWrap>
    );
  }
}

export default VinPrice;
