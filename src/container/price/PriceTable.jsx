import React from 'react';
import { Table, Icon, Button } from 'antd';
import { connect } from 'react-redux';
import GetOfferDetail from './GetOfferDetail';
import { fetchHistoryPic } from '../../redux/action/vin';
import { fetchOfferDetailQR } from '../../redux/action/oe';

/**
 * 展示价格详情的表格
 * @param {array} tableSource - 表格数据
 * @param {string} type - 切换表格展示的列
 * @param {function} getHistoryPic - 获取点击的配件图片，传递出去
 * @param {function} openModal - 打开查看报价的modal
 * @param {bool} loading - 加载的状态
 * @author xietf
 */
const PriceTable = ({
  tableSource = [],
  type = 'vin',
  getHistoryPic,
  openModal,
  loading,
}) => {
  const columns = [
    {
      title: '标准零件名称',
      dataIndex: type === 'vin' ? 'partsName' : 'stdPartName',
      width: 210,
      render: text => <span>{text || '暂无名称'}</span>,
    },
    {
      title: '原厂零件名称',
      dataIndex: 'oeName',
      width: 210,
    },
    {
      title: '备注',
      dataIndex: 'remark',
      width: 300,
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
      render: (text, record) => (
        // eslint-disable-next-line
        <a onClick={() => getHistoryPic(record.partsHistoryId)}>
          <Icon type="picture" theme="twoTone" />
        </a>
      ),
    },
    {
      title: '4S店参考价',
      dataIndex: 'guidePrice',
      width: 200,
      render: text => (
        <span>
          ￥&nbsp;
          {text}
        </span>
      ),
    },
    {
      title: '厂商指导价',
      dataIndex: 'marketPrice',
      width: 200,
      render: text => (
        <span>
          ￥&nbsp;
          {text}
        </span>
      ),
    },
    {
      title: '经销商报价',
      dataIndex: 'agency',
      width: 300,
      align: 'right',
      render: (text, record) => {
        if (text) {
          return (
            <span>
              {text}
              个报价&nbsp;
              <span>{`(最低￥ ${record.offer})`}</span>
            </span>
          );
        }
        return <span>暂无报价</span>;
      },
    },
    {
      title: '操作',
      dataIndex: 'operation',
      width: 150,
      render: (text, record) => (
        <Button
          onClick={() => openModal(record.inquiryId)}
          type="primary"
          ghost
          disabled={record.inquiryId ? false : true} // eslint-disable-line
        >
          查看报价
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={
          type === 'oe'
            ? columns.filter(item => item.dataIndex !== 'oePicNo')
            : columns
        }
        dataSource={tableSource}
        pagination={false}
        loading={loading}
      />
      <GetOfferDetail />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    // 获取图片id
    getHistoryPic: id => {
      dispatch(fetchHistoryPic(id));
    },
    openModal: inquiryId => {
      dispatch(fetchOfferDetailQR(inquiryId));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(PriceTable);
