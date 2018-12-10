import { Avatar } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(state => state.persistedReducer.userLayout.user)
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Avatar style={{ margin: '0 1em 0 auto' }}>{this.props.username}</Avatar>
    );
  }
}

export default User;
