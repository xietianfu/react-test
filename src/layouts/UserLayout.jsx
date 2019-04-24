import { Button, Card, Divider, Input } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(state => state.userLayout)
class UserLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: '',
    };
  }

  InputChange = (type, e) => {
    const val = e.target.value;

    this.setState({
      [type]: val,
    });
  };

  onSumbit = () => {
    const { user, pwd } = this.state;
    const { history, dispatch } = this.props;
    // axios
    //   .post(api.login, {
    //     username: user,
    //     password: pwd,
    //   })
    //   .then(res => {
    //     if (res.code === 10000) {
    //       dispatch(
    //         addUser({ username: user, password: pwd, id: res.data.userId }),
    //       );
    //       history.push('/');
    //     }
    //   });
  };

  render() {
    const { count, dispatch } = this.props;
    const { user, pwd } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          height: '100vh',
          backgroundImage:
            'linear-gradient(to right, #ff9a9e 0%, #fad0c4 51%, #fbc2eb 100%)',
        }}
      >
        <Card
          title="登录"
          style={{
            width: 400,
            margin: 'auto',
            boxShadow: '4px 18px 68px 3px rgb(89, 76, 76)',
            borderRadius: '10px',
          }}
        >
          <p>账号</p>
          <Input value={user} onChange={e => this.InputChange('user', e)} />
          <p>密码</p>
          <Input
            value={pwd}
            type="passworld"
            onChange={e => this.InputChange('pwd', e)}
          />
          <Divider />
          <Button type="primary" block onClick={() => this.onSumbit()}>
            登录
          </Button>
        </Card>
      </div>
    );
  }
}

export default UserLayout;
