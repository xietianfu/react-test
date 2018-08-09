import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/action/index';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Persist from 'persist-js';

function testable(isTestable) {
  return target => {
    target.isTestable = isTestable;
  };
}

// @testable(true)
// class MyTestCalss {}

class UserLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLogin = () => {
    const store = Persist.Store('My Application');
  };

  render() {
    const { onIncrement, value } = this.props;
    return (
      <div>
        <botton onClick={() => onIncrement()}>增加</botton>
        <h1>{value}</h1>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrement: () => {
      dispatch(increment(1));
    },
    onDecrement: () => {
      dispatch(decrement(ownProps.caption));
    },
  };
}

export default connect(
  state => state.userLayout,
  mapDispatchToProps,
)(UserLayout);
