import { Button, Icon, message, Modal } from 'antd';
import 'cropperjs/dist/cropper.css';
import React, { Component } from 'react';
import Cropper from 'react-cropper';
import { connect } from 'react-redux';
import {
  addImgtoImgDiscern,
  addVinList,
  addVINtoImgDiscern,
  closeImgDiscern,
  initImgDiscern,
} from '../../redux/action/vin';
import { axios } from '../../services';
import { vinApi } from '../../services/vin';
import { ROUTE_PATH_LIST } from '../../constants/menu';

class ImgDiscern extends Component {
  constructor(props) {
    super(props);
    this.cropper = undefined;
    this.state = {
      clipedImg: '',
      loding: false,
    };
  }

  /**
   * Cropper图片裁切的方法
   */
  _crop = () => {
    this.setState({
      clipedImg: this.cropper.getCroppedCanvas().toDataURL(),
    });
  };

  /**
   * 上传图片图片，识别vin码
   * @author xietf
   */
  sumbitImg = () => {
    const { addImg, addVin } = this.props;
    const { clipedImg } = this.state;
    this.setState({
      loding: true,
    });
    axios
      .post(vinApi.vin, {
        image: clipedImg,
      })
      .then(res => {
        addImg('');
        addVin(res.vin);
        this.setState({
          loding: false,
        });
      });
  };

  /**
   * 关闭modal，清除相关的历史
   * @author xietf
   */
  onCancel = () => {
    const { toggleModal, initDiscern } = this.props;
    toggleModal();
    initDiscern();
  };

  uploadImg = () => {
    document.querySelector('#upload').click();
  };

  /**
   * 提交vin，跳转到价格详情
   */
  sumbitVin = () => {
    const { history, vin, pushVinList, initDiscern, toggleModal } = this.props;

    axios
      .get(vinApi.vehicleByVin, {
        params: {
          vin,
        },
      })
      .then(res => {
        if (res.vehicleList.length > 0) {
          const list = res.vehicleList.map(item => ({ ...item, vin }));
          pushVinList(list);
          toggleModal();
          initDiscern();
          history.push(`${ROUTE_PATH_LIST.home.choice.path}?vin=${vin}`);
        } else {
          message.error('未找到与该vin码对应的车型!');
        }
      })
      .catch(err => {
        message.error('未找到与该vin码对应的车型');
      });
  };

  render() {
    const { visible, img, vin, addImg, initDiscern, addVin } = this.props;
    const { clipedImg, loding } = this.state;

    return (
      <Modal
        title={
          <div className="camera-resolve-title">
            VIN码图片识别&nbsp;&nbsp; &nbsp;
            <span>鼠标拖动框选图片中VIN码部分,框选越准确识别越精准哦!</span>
          </div>
        }
        visible={visible}
        onCancel={this.onCancel}
        width={866}
        footer={null}
        destroyOnClose
        maskClosable={false}
      >
        <div className="camera-resolve-box">
          <input
            style={{ display: 'none' }}
            type="file"
            // value={this.state.file}
            placeholder="选择图片"
            id="upload"
            onChange={e => {
              const file = e.target.files[0];
              const fr = new FileReader();
              fr.readAsDataURL(file);
              fr.addEventListener('load', () => {
                addImg(fr.result);
              });
              initDiscern();
            }}
          />
          {!vin && (
            <React.Fragment>
              <div className="img-box">
                {img === '' && (
                  <React.Fragment>
                    <Button
                      type="primary"
                      onClick={() => {
                        document.getElementById('upload').click();
                      }}
                    >
                      选择图片
                    </Button>
                  </React.Fragment>
                )}
                {img !== '' && (
                  <React.Fragment>
                    <div
                      className="rotate-box"
                      onClick={() => {
                        this.cropper.rotate(-90);
                      }}
                    >
                      {/* <Icon svg={rotateLeftSvg} /> */}
                      <Icon type="undo" theme="outlined" />
                    </div>
                    <Cropper
                      src={img}
                      ref={node => {
                        this.cropper = node;
                      }}
                      crop={this._crop}
                      dragMode="move"
                      className="cropper-outer-box"
                      minCropBoxHeight={30}
                      guides={false}
                    />
                    <div
                      className="rotate-box"
                      onClick={() => {
                        this.cropper.rotate(90);
                      }}
                    >
                      {/* <Icon svg={rotateRightSvg} /> */}
                      <Icon type="redo" theme="outlined" />
                    </div>
                  </React.Fragment>
                )}
              </div>
              {!!img && (
                <div className="camera-resolve-btn-box">
                  <Button
                    onClick={() => this.sumbitImg()}
                    type="primary"
                    loading={loding}
                  >
                    识别vin码
                  </Button>
                </div>
              )}
            </React.Fragment>
          )}
          {!!vin && (
            <React.Fragment>
              <img
                src={clipedImg}
                style={{
                  width: '300px',
                }}
                alt="VIN剪切图片"
              />
              <div className="revision-box">
                <input
                  type="text"
                  defaultValue={vin}
                  onChange={e => {
                    addVin(e.target.value);
                  }}
                />
                <Button onClick={() => this.sumbitVin()} type="primary">
                  查询
                </Button>
              </div>
              <span onClick={() => this.uploadImg()} className="renew-btn">
                重新上传图片
              </span>
            </React.Fragment>
          )}
        </div>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    /**
     * 关闭modal
     */
    toggleModal: () => {
      dispatch(closeImgDiscern());
    },
    /**
     * 初始化图片数据
     */
    initDiscern: () => {
      dispatch(initImgDiscern());
    },
    addImg: data => {
      dispatch(addImgtoImgDiscern(data));
    },
    addVin: data => {
      dispatch(addVINtoImgDiscern(data));
    },
    pushVinList: data => {
      dispatch(addVinList(data));
    },
  };
};

export default connect(
  state => {
    const { imgDiscern = {} } = state.persistedReducer.centerLayout;
    const { visible = false, img = '', vin = 0 } = imgDiscern;
    return {
      visible,
      img,
      vin,
    };
  },
  mapDispatchToProps,
)(ImgDiscern);
