import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

const Wrap = styled.div`
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
  height: 100%;
  .load {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Loading = () => (
  <Wrap style={{ height: '100%' }}>
    <Spin className="load" size="large" />
  </Wrap>
);

export default Loading;
