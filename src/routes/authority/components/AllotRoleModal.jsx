import React, { Component } from 'react';
import {
  Modal,
  TreeSelect,
  Input,
  Divider,
  Row,
  Col,
  Checkbox,
  Radio,
} from 'antd';
import { axios } from '../../../services';
import { api } from '../../../constants/api';

const RadioGroup = Radio.Group;

class AllotRole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: '',
    };
  }

  onChange = e => {
    console.log(e);
    this.setState({
      select: e.target.value,
    });
  };

  onSumbit = () => {
    axios.put(api.user, {
      userId: this.props.userId,
      roles: [this.state.select],
    });
  };

  render() {
    return (
      <Modal
        visible={this.props.visible}
        title="分配角色"
        onOk={() => this.onSumbit()}
        onCancel={() => this.props.toggleVisible()}
      >
        <RadioGroup onChange={this.onChange}>
          {this.props.roleList.map(item => (
            <Radio value={item.id} key={item.id}>
              {item.name}
            </Radio>
          ))}
        </RadioGroup>
      </Modal>
    );
  }
}

export default AllotRole;
