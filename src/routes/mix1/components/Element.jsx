import React from 'react';
import { Card, Icon } from 'antd';
import { GridElementCTX } from '../index';

const Element = ({ title, removeEl, editEl, children }) => {
  return (
    <Card
      title={title}
      style={{ position: 'relative', height: 'calc(100% - 100px)' }}
      bodyStyle={{ height: '100%' }}
      bordered={false}
      actions={[
        <Icon type="setting" />,
        <Icon type="edit" />,
        <Icon type="delete" />,
      ]}
    >
      {children}
    </Card>
  );
};

export default Element;
