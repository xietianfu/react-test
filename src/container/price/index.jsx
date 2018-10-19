import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import OePrice from './OePrice';
import Loadable from 'react-loadable';
import VinPrice from './VinPrice';
import Load from '../../components/Load';

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  hanleClick = () => {
    const { history } = this.props;
    history.push('/price/vin');
  };

  render() {
    return <div />;
  }
}

export default Price;
