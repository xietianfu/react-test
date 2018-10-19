import React, { Component } from 'react';
import styled from 'styled-components';
import { Modal, Input, DatePicker, Button } from 'antd';
const Wrap = styled.div`
  p {
    margin: 25px 0 10px 0;
    &:first-of-type {
      margin-top: 0;
    }
  }
  .ant-btn {
    margin-top: 50px;
  }
  /* 输入框样式 */
  .ant-input,
  .ant-cascader-picker,
  .ant-input-group-addon {
    border: none;
    background: #f5f5f5;
    &:hover {
      .anticon {
        background: #f5f5f5;
      }
    }
  }
`;

class AutoSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Modal title="里程及时间" visible={false} footer={null} width="360px">
        <Wrap>
          <p>行驶里程：</p>
          <Input type="text" addonAfter="公里" />
          <p>新车上路时间：</p>
          <DatePicker style={{ width: '100%' }} />
          <Button type="primary" block size="large">
            推荐项目
          </Button>
        </Wrap>
      </Modal>
    );
  }
}

export default AutoSetting;
