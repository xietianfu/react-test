import { Button } from 'antd';
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

export default UserLayout;
