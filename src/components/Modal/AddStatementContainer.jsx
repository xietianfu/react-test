import React, { Component } from 'react';
import { Modal, Input, message } from 'antd';
import { axios } from '../../services';
import { api } from '../../constants/api';

class StatementModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  onName = val => {
    this.setState({
      name: val,
    });
  };

  onSumbit = () => {
    axios
      .post(api.dashboardManage, {
        config: {
          name: this.state.name,
        },
      })
      .then(res => {
        if (code === 10000) {
          message.success('添加面板成功');
          this.props.toggleModal();
        }
      });
  };

  render() {
    const { visible, toggleModal } = this.props;
    const { name } = this.state;
    return (
      <Modal visible={visible} onCancel={toggleModal} onOk={this.onSumbit}>
        <p>面板名称</p>
        <Input value={name} onChange={e => this.onName(e.target.value)} />
      </Modal>
    );
  }
}

export default StatementModal;
