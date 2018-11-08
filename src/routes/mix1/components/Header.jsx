import { Button, Row, Col } from 'antd';
import React from 'react';
import Menu from './Menu';
import { GridElementCTX } from '../index';

const Header = () => {
  return (
    <div>
      <Row>
        <Col span={8}>
          <Menu />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
