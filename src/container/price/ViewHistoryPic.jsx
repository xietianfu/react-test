import React from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';
import { closePicModal } from '../../redux/action/vin';
import empty from '../../assets/images/empty_pic.jpg';

/**
 * 查看配件图片
 */
const ViewHistoryPic = ({ visible, historyPic, toggleModal }) => {
  return (
    <Modal
      title="配件图片"
      visible={visible}
      onCancel={toggleModal}
      onOk={toggleModal}
      footer={null}
      bodyStyle={{ padding: '1em 0' }}
      width="750px"
    >
      <img src={historyPic || empty} width="750px" alt="配件图片" />
    </Modal>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => {
      dispatch(closePicModal());
    },
  };
};

export default connect(
  state => {
    const { picModal = {} } = state.persistedReducer.centerLayout;
    const { visible = false, historyPic } = picModal;
    return {
      visible,
      historyPic,
    };
  },
  mapDispatchToProps,
)(ViewHistoryPic);
