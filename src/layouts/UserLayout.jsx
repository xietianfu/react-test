import { Button } from 'antd';
import Persist from 'persist-js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../redux/action/index';

@connect(state => state.userLayout)
class UserLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { count, dispatch } = this.props;
    return (
      <div>
        <Button type="primary" onClick={() => dispatch(increment(1))}>
          增加
        </Button>
        <h1>{count}</h1>
      </div>
    );
  }
}

function readOnly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

export default UserLayout;
