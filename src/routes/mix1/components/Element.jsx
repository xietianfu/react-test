import { Card, Icon } from 'antd';
import React from 'react';
import { ChartSetting } from '../index';

const Element = ({ title, removeEl, editEl, children }) => {
  return (
    <ChartSetting.Consumer>
      {({ addConfig, toggleVisible }) => (
        <Card
          title={title}
          style={{ position: 'relative', height: 'calc(100% - 100px)' }}
          bodyStyle={{ height: '100%' }}
          bordered={false}
          actions={[
            <Icon type="setting" />,
            <Icon
              type="edit"
              onClick={() => {
                editEl(title);
                addConfig({ key: title });
                toggleVisible();
              }}
            />,
            <Icon type="delete" onClick={() => removeEl(title)} />,
          ]}
        >
          {children}
        </Card>
      )}
    </ChartSetting.Consumer>
  );
};

export default Element;
