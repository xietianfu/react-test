import { Button, Icon } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../redux/action/index';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { axios } from '../services';
import { userApi } from '../services/user';
import { ERROR_CODE } from '../constants/errCode';
import { login, logout } from '../redux/action/user';

import Input from '../components/Input';
import LoginModal from '../components/WeChat/LoginModal';

import '../assets/less/main.less';
import loginBg from '../assets/images/login_bg.png';
import loginImg from '../assets/images/login_login.png';

const Wrap = styled.div`
  background: #f2f4f8;
  min-height: 100vh;
  overflow: hidden;
`;

const LoginWrap = styled.div`
  position: relative;
  margin: auto;
  margin-top: 10%;
  background: white;
  width: 1000px;
  border-radius: 10px;
  .logo {
    position: absolute;
    top: -80px;
  }
  .left,
  .right {
    /* display: inline-block; */
  }
  .left {
    display: inline-block;
  }
  .right {
    padding: 0em 5em;
    box-sizing: border-box;
    float: right;
    width: 520px;

    h2 {
      margin: 53px 0px 48px 0px;
      text-align: center;
      font-size: 36px;
    }
    div {
      margin: 0 0 24px 0;
    }
    .login {
      margin: 3em 0 1em 0;
      font-size: 1.5em;
      line-height: 2;
      color: white;
      border-radius: 100px;
      cursor: pointer;
      transition: background 0.5s;

      &:active,
      &:hover {
        background: #305fff;
      }
    }
  }
`;

const ImgCode = styled.div`
  margin: 0;
  position: absolute;
  right: 60px;
  top: 220px;
  cursor: pointer;
  p {
    margin-top: 7px;
    color: #bec2d4;
    font-size: 12px;
    text-align: center;
  }
`;

const SmsCode = styled.div`
  position: absolute;
  right: 66px;
  top: 347px;
  font-size: 12px;
  cursor: ${props => (props.time ? 'wait' : 'pointer')};
  color: ${props => (props.time ? '#bec2d4' : '#00A2FF')};
`;

const ErrMeg = styled.p`
  /* margin-left: 1.5em; */
  float: left;
  color: #f50505;
  font-size: 1.3em;
`;

const Hint = styled.p`
  color: #666666;
  font-size: 14px;
  text-align: center;
  i {
    padding-right: 5px;
    vertical-align: middle;
  }
`;

@connect(state => state)
class UserLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false, // 弹窗
      phone: '',
      imageCode: '', // 图片验证码
      phoneCode: '', // 短信验证码
      errMsg: '', // 错误信息
      time: 0, // 倒计时
      imageCodeData: {
        key: '',
        verifyCode: '',
      },
    };
  }

  componentDidMount() {
    axios
      .get(userApi.imageCode)
      .then(res => this.setState({ imageCodeData: res }));
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.loginAgain);
  }

  toggleModal = () => {
    const { visible } = this.state;
    clearInterval(this.loginAgain);
    this.setState({
      visible: !visible,
    });
  };

  /**
   * 修改图片验证码
   */
  changeImgCode = () => {
    const { imageCodeData } = this.state;
    axios
      .get(userApi.imageCode)
      // 用户点击过快，请求会被cancel，就使用上一次的图片验证
      .then(res => this.setState({ imageCodeData: res || imageCodeData }))
      .catch(() => console.log('err'));
  };

  /**
   * 获取短信验证码
   */
  getSmsCode = () => {
    const { phone, imageCodeData, imageCode } = this.state;
    if (phone.trim() === '') {
      this.setState({
        errMsg: '手机号不能为空',
      });
    } else if (phone.length !== 11) {
      this.setState({
        errMsg: '请输入正确的手机号',
      });
    } else {
      axios
        .post(userApi.smsCode, {
          phone: phone.trim(),
          imageCode: imageCode.trim(),
          key: imageCodeData.key,
        })
        .then(res => {
          this.setState({
            time: 60,
          });
          this.timerID = setInterval(() => this.tick(), 1000);
        })
        .catch(err => {
          let errMsg = '';
          switch (err.code) {
            case ERROR_CODE.USED_PHONE:
              errMsg = '手机号已经使用';
              break;
            case ERROR_CODE.WRONG_CODE:
              errMsg = '验证码错误';
              break;
            case ERROR_CODE.CODE_EXPIRED:
              errMsg = '验证码过期';
              break;
            case ERROR_CODE.WRONG_IMAGE_CODE:
              errMsg = '图片验证码错误';
              break;
            case ERROR_CODE.SEND_SMS_ERROR:
              errMsg = '短信验证码错误';
              break;
            case ERROR_CODE.CODE_TO_MORE:
              errMsg = '验证码获取次数过多';
              break;
            default:
              errMsg = err.code;
              break;
          }
          this.setState({
            errMsg,
          });
        });
    }
  };

  /**
   * 短信验证码再次发送定时器
   */
  tick = () => {
    let { time } = this.state;
    if (time === 0) {
      clearInterval(this.timerID);
    } else {
      this.setState({
        time: --time,
      });
    }
  };

  /**
   * 监听表单值的改变，存入state，情况错误提示
   * @param {string} type 表单输入的参数类型
   * @param {string} value 表单的值
   * @author xietf
   */
  hanleChange = (type, value) => {
    this.setState({
      [type]: value,
      errMsg: '',
    });
  };

  /**
   * 登录验证
   */
  handleSigin = () => {
    clearInterval(this.loginAgain);
    const { dispatch, history } = this.props;
    let { phone, phoneCode } = this.state; // eslint-disable-line
    phone = phone.trim();
    axios
      .post(userApi.signIn, {
        code: phoneCode,
        phone,
      })
      .then(res => {
        dispatch(
          // 保存登录状态
          login({
            // 去掉手机号中间4位
            phone: phone.replace(/^(\d{3})(\d{4})(\d{4})$/, '$1****$3'),
            state: true,
            id: res.userId,
          }),
        );
        // 跳转到首页，然后会重定向到home页
        history.push('/');
      })
      .catch(error => {
        let errMsg = '';
        switch (error.code) {
          case ERROR_CODE.NOT_REGISTER:
            this.setState({
              visible: true,
            });
            // 如果是首次登录，添加轮询，监测是否完成了微信认证操作
            this.loginAgain = setInterval(() => this.handleSigin(), 5000);
            break;
          case ERROR_CODE.SEND_SMS_ERROR:
            errMsg = '短信验证码错误';
            break;
          case ERROR_CODE.WRONG_CODE:
            errMsg = '短信验证码错误';
            break;
          case ERROR_CODE.CODE_EXPIRED:
            errMsg = '短信验证码过期';
            break;
          default:
            errMsg = error.code;
            break;
        }
        this.setState({
          errMsg,
        });
      });
  };

  render() {
    const { count, dispatch } = this.props;
    const {
      visible,
      imageCodeData,
      phone,
      phoneCode,
      errMsg,
      time,
    } = this.state;
    return (
      <Wrap>
        <LoginWrap>
          <img className="logo" src={loginImg} alt="" />
          <div className="left">
            <img src={loginBg} alt="登录背景图" />
          </div>
          <div className="right">
            <h2>登录</h2>
            <Input
              label="手机号"
              placeholder="请输入手机号"
              id="phone"
              getChange={this.hanleChange}
            />
            <Input
              label="图形验证码"
              placeholder="请输入图形验证码"
              id="imageCode"
              getChange={this.hanleChange}
            />
            <ImgCode onClick={this.changeImgCode}>
              <img
                src={imageCodeData.verifyCode}
                alt="图片验证码"
                width="111px"
                height="37px"
              />
              <p>看不清换一张</p>
            </ImgCode>
            <Input
              label="手机验证码"
              placeholder="请输入手机验证码"
              id="phoneCode"
              getChange={this.hanleChange}
            />
            <ErrMeg>{errMsg}</ErrMeg>

            <SmsCode
              onClick={() => {
                if (!time) {
                  this.getSmsCode();
                }
                console.log('读秒');
              }}
              time={time}
            >
              {time ? `${time}s` : '获取手机验证码'}
            </SmsCode>
            <Button
              onClick={() => this.handleSigin()}
              className="login"
              type="primary"
              size="large"
              block
            >
              登录
            </Button>
            <Hint>
              <Icon
                style={{ fontSize: '16px' }}
                type="info-circle"
                theme="outlined"
              />
              请使用微信授权的手机号码登录
            </Hint>
          </div>
        </LoginWrap>
        <LoginModal visible={visible} toggleModal={this.toggleModal} />
      </Wrap>
    );
  }
}

export default UserLayout;
