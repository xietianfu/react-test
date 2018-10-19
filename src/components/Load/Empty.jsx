import React from 'react';
import styled from 'styled-components';
import empty from '../../assets/images/empty_page.png';

const Wrap = styled.div`
  display: table;
  height: ${props => props.height};
  width: 100%;
  text-align: center;
  box-sizing: border-box;
`;

const Cell = styled.div`
  display: table-cell;
  vertical-align: middle;
  p {
    margin: 1em;
    color: #999999;
  }
`;

const Empty = ({ height = '100px', placeholder = '暂无数据' }) => (
  <Wrap height={height}>
    <Cell>
      <img src={empty} alt="暂无数据" />
      <p>{placeholder}</p>
    </Cell>
  </Wrap>
);

export default Empty;
