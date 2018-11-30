import React from 'react';
import { Table, Divider } from 'antd';

const SqlTable = ({ source = [] }) => {
  const colmuns = [
    {
      title: '模型名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => {
        return (
          <span>
            <a>修改</a>
            <Divider type="vertical" />
            <a>预览</a>
            <Divider type="vertical" />
            <a>删除</a>
          </span>
        );
      },
    },
  ];
  return <Table columns={colmuns} dataSource={source} />;
};

export default SqlTable;
