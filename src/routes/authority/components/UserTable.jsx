import React from 'react';
import { Table, Divider } from 'antd';

const CTable = ({ source = [], pushUserId }) => {
  const colmuns = [
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => {
        return (
          <span>
            <a onClick={() => pushUserId(record.id)}>分配角色</a>
            <Divider type="vertical" />
            <a>删除</a>
          </span>
        );
      },
    },
  ];
  return (
    <div>
      <Table columns={colmuns} dataSource={source} />
    </div>
  );
};

export default CTable;
