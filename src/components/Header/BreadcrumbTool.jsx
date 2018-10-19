import React from 'react';
import { Breadcrumb } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrap = styled.div`
  position: relative;
  margin: 1em 0;
  color: #999999;
  font-size: 14px;
  a {
    color: #999999;
  }
  .ant-breadcrumb {
    display: inline-block;
  }
  .ant-breadcrumb-link {
    font-weight: 600;
  }
`;

const Side = styled.span`
  /* float: left; */
`;

const BreadcrumbTool = ({ routeList = [] }) => (
  <Wrap>
    <Side>当前位置：</Side>
    <Breadcrumb separator=">">
      {routeList.map(item => {
        if (item.to) {
          return (
            <Breadcrumb.Item key={item.to}>
              <Link to={item.to}>{item.name}</Link>
            </Breadcrumb.Item>
          );
        }
        return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  </Wrap>
);

export default BreadcrumbTool;
