import { Modal } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { closeOfferDetail } from '../../redux/action/oe';

const Wrap = styled.div`
  margin: 2em 0;
  text-align: center;
  p {
    margin: 1em;
    font-size: 1.3em;
  }
`;

/**
 * 价格详情modal，展示后端传递的二维码
 * @param {bool} visible - modal可见性
 * @param {function} toggleModal - 开关modal
 * @param {string} img - base64化的图片
 */
const GetOfferDetail = ({ visible, toggleModal, img }) => {
  return (
    <Modal
      title="查看市场价"
      visible={visible}
      onCancel={toggleModal}
      onOk={toggleModal}
      footer={null}
      bodyStyle={{ padding: '1em 0' }}
      width="500px"
    >
      <Wrap>
        <img src={img} alt="查看市场价" />
        <p>打开微信扫一扫获取最新市场报价！</p>
      </Wrap>
    </Modal>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => {
      dispatch(closeOfferDetail());
    },
  };
};

export default connect(
  state => {
    const { offerDatail = {} } = state.persistedReducer.centerLayout;
    const { visible = false, QR = '' } = offerDatail;
    return {
      visible,
      img: QR,
    };
  },
  mapDispatchToProps,
)(GetOfferDetail);
