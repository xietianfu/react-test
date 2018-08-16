import React from 'react';
import { connect } from 'react-redux';

const ReduxUse = () => (
  <div>
    <h1>Redux使用方式</h1>
  </div>
);

export default connect(state => state.redux)(ReduxUse);
