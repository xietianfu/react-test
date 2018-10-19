import { Button, Checkbox, message, Modal, Spin, Table } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ROUTE_PATH_LIST } from '../../constants/menu';
import { addOeId, addOeList } from '../../redux/action/oe';
import { axios } from '../../services';
import { searchApi } from '../../services/search';

const Wrap = styled.div`
  overflow: hidden;
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

  hr {
    margin: 1.5em 0;
    color: #e5e5e5;
    border-top: 1px solid #e5e5e5;
  }
  p {
    margin-left: 1.5em;
    margin-bottom: 0.5em;
    padding-left: 0.5em;
    border-left: 4px solid #3376ff;
    line-height: 1;
  }
`;

const Tool = styled.div`
  margin-right: 2em;
  float: right;
  &::after {
    content: '';
    clear: both; /*清除浮动*/
    display: block; /*确保该元素是一个块级元素*/
  }
`;

const columns = [
  {
    title: '标准零件名称',
    dataIndex: 'oeName',
    width: 200,
  },
  {
    title: '原厂零件名称',
    dataIndex: 'stdPartName',
    width: 200,
  },
  {
    title: '车型品牌',
    width: 200,
    dataIndex: 'brandName',
  },
  {
    title: 'OE号',
    dataIndex: 'oe',
    width: 200,
  },
];

let isPush = 1;
let partsList = [];

function onCheckchange(e) {
  isPush = e.target.checked ? 1 : 0;
}

const OEModal = ({
  visible,
  toggleModal,
  oeSource = [],
  pushOeList,
  pushOeId,
  history,
  loding,
}) => {
  const rowSelection = {
    /**
     * 监听列表选中
     */
    onChange: (selectedRowKeys, selectedRows) => {
      pushOeList(selectedRows);
      partsList = selectedRows;
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  function sumbitOeHistory() {
    if (partsList.length > 0) {
      axios
        .post(searchApi.addoeHistory, {
          isPush,
          partsList,
        })
        .then(res => {
          pushOeId(res.id);
          toggleModal();
          history.push(ROUTE_PATH_LIST.price.oe.path);
        });
    } else {
      message.warn('请勾选配件');
    }
  }
  return (
    <Modal
      title="OE号查配件"
      visible={visible}
      onCancel={toggleModal}
      onOk={toggleModal}
      footer={null}
      bodyStyle={{ padding: '1em 0' }}
      width="600px"
      destroyOnClose
      maskClosable={false}
    >
      <Wrap>
        <p>自动匹配结果</p>

        <Spin spinning={loding}>
          <Table
            // rowSelection={rowSelection}
            columns={columns}
            dataSource={oeSource}
            pagination={false}
            size="middle"
            scroll={{ y: 440 }}
            rowSelection={rowSelection}
            maskClosable={false}
            className="fixHeader"
          />
        </Spin>
        <hr />
        <Tool>
          <Checkbox onChange={onCheckchange} defaultChecked>
            接受市场成交价推送
          </Checkbox>
          <Button onClick={() => sumbitOeHistory()} type="primary">
            &ensp;确定&ensp;
          </Button>
        </Tool>
      </Wrap>
    </Modal>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    pushOeList: selectedRows => {
      dispatch(addOeList(selectedRows));
    },
    pushOeId: id => {
      dispatch(addOeId(id));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(OEModal);
