import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  Modal,
  Button,
  Checkbox,
  Divider,
  Table,
  message,
  Spin,
  Cascader,
  Input,
  Form,
} from 'antd';
import { closeShopFormModal } from '../../redux/action/index';

const FormItem = Form.Item;

const Wrap = styled.div`
  button {
    margin: 0.5em 0;
  }
  .btnTool {
    margin-bottom: 0;
  }

  /* 输入框样式 */
  .ant-input,
  .ant-cascader-picker {
    border: none;
    background: #f5f5f5;
    &:hover {
      .anticon {
        background: #f5f5f5;
      }
    }
  }
`;

const mapDispatchToProps = dispatch => {
  return {
    onOk: () => {
      dispatch(closeShopFormModal());
    },
    onCancel: () => {
      dispatch(closeShopFormModal());
    },
  };
};

@connect(
  state => {
    const { modal = {} } = state.persistedReducer.centerLayout;
    const { shopForm = {} } = modal;
    const { visible = false } = shopForm;
    return {
      visible,
    };
  },
  mapDispatchToProps,
)
class ShopForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: [
        {
          value: 'zhejiang',
          label: '浙江',
          isLeaf: false,
        },
        {
          value: 'jiangsu',
          label: '江苏',
          isLeaf: false,
        },
      ],
    };
  }

  render() {
    const { form, visible, onOk, onCancel } = this.props;
    const { getFieldDecorator } = form;
    const { region } = this.state;
    // const { onOk, onCancel } = modal;
    return (
      <Modal
        title="补充基本资料"
        visible={visible}
        footer={null}
        closable={false}
        destroyOnClose
        maskClosable={false}
      >
        <Wrap>
          <Form layout="vertical">
            <FormItem label="姓名：">
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: '请输入姓名',
                  },
                ],
              })(<Input placeholder="请输入姓名" />)}
            </FormItem>
            <FormItem label="手机号码：">
              {getFieldDecorator('phone', {
                rules: [
                  {
                    required: true,
                    message: '请输入手机号码',
                  },
                  {
                    pattern: /^1[34578]\d{9}$/,
                    message: '请输入正确手机号码',
                  },
                ],
              })(<Input placeholder="请输入手机号码" />)}
            </FormItem>
            <FormItem label="门店名称：">
              {getFieldDecorator('shopName', {
                rules: [
                  {
                    required: true,
                    message: '请输入门店名称',
                  },
                ],
              })(<Input placeholder="请输入门店名称" />)}
            </FormItem>
            <FormItem label="所在地区：">
              {getFieldDecorator('shopName', {
                rules: [
                  {
                    required: true,
                    message: '请选择所在省/市/区',
                  },
                ],
              })(
                <Cascader
                  options={region}
                  // loadData={this.loadData}
                  // onChange={this.onChange}
                  // changeOnSelect
                  placeholder="请选择所在省/市/区"
                />,
              )}
            </FormItem>
            <FormItem label="详细地址：">
              {getFieldDecorator('location', {
                rules: [
                  {
                    required: true,
                    message: '请输入详细地址',
                  },
                ],
              })(<Input placeholder="请输入详细地址" />)}
            </FormItem>
            <FormItem className="btnTool">
              <Button type="primary" size="large" block>
                保存
              </Button>
              <Button block size="large" onClick={() => onCancel.call(this)}>
                取消
              </Button>
            </FormItem>
          </Form>
        </Wrap>
      </Modal>
    );
  }
}

const ShopFormWrap = Form.create()(ShopForm);

export default ShopFormWrap;
