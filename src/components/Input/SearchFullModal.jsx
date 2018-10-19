import { Button, Icon, Modal } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  openSearchFullModal,
  closeSearchFullModal,
  openShopFormModal,
} from '../../redux/action/index';

import store from 'store';

const Wrap = styled.div`
  text-align: center;
  color: #333333;

  .anticon {
    font-size: 76px;
    color: #00a2ff;
  }
  .hint {
    margin: 30px 0;
  }

  button {
    margin: 0.5em;
  }
`;

const mapDispatchToProps = dispatch => {
  return {
    onOk: () => {
      dispatch(closeSearchFullModal());
      dispatch(openShopFormModal());
    },
    onCancel: () => {
      dispatch(closeSearchFullModal());
    },
  };
};

@connect(
  state => {
    const { modal = { searchFull: {} } } = state.persistedReducer.centerLayout;
    const { searchFull } = modal;
    const { visible = false } = searchFull;
    return {
      visible,
    };
  },
  mapDispatchToProps,
)
class SearchFull extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { visible, onOk, onCancel } = this.props;
    // const { onOk, onCancel } = modal;
    return (
      <Modal
        visible={visible}
        footer={null}
        closable={false}
        destroyOnClose
        maskClosable={false}
        width="320px"
      >
        <Wrap>
          <Icon type="info-circle" theme="filled" />
          <div className="hint">
            <p>您的查询次数已达上限,</p>
            <p>补充基本信息后可继续使用！</p>
          </div>
          <Button type="primary" block onClick={() => onOk.call(this)}>
            补充信息
          </Button>
          <Button block onClick={() => onCancel.call(this)}>
            取消
          </Button>
        </Wrap>
      </Modal>
    );
  }
}

export default SearchFull;
