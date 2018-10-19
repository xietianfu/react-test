import React from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';
import stepOne from '../../assets/images/1step.png';
import stepTwo from '../../assets/images/2step.png';

// 通过负margin的方式调整布局位置
const Step = styled.div`
  margin: 1em 0;
  padding-left: 2em;
  overflow: hidden;
  p {
    margin-top: -1.5em;
    width: 250px;
  }
  img {
    position: relative;
    left: 60%;
    top: -30px;
  }
`;

const Lable = styled.span`
  margin-left: -2em;
  display: inline-block;
  background: #3376ff;
  border-radius: 100px;
  color: white;
  width: 1.5em;
  height: 1.5em;

  text-align: center;
`;

const LoginModal = ({ visible, toggleModal }) => {
  return (
    <div>
      <Modal
        title="小程序登录授权"
        visible={visible}
        onCancel={toggleModal}
        onOk={toggleModal}
        footer={null}
      >
        <Step>
          <Lable>1</Lable>
          <p>第一步：微信扫码关注“知配”公众号</p>
          <img src={stepOne} alt="二维码" />
        </Step>
        <Step>
          <Lable>2</Lable>
          <p>第二步：点击“查价格”，登录“超级报价员”小程序并授权！</p>
          <img src={stepTwo} alt="操作指南" />
        </Step>
      </Modal>
    </div>
  );
};

export default LoginModal;
