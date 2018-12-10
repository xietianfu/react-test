import React from 'react';
import { Table, Divider, Tag } from 'antd';

const CTable = ({ source = [], pushUserId }) => {
  const colmuns = [
    {
      title: '角色名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '功能权限',
      dataIndex: 'sidebar',
      key: 'sidebar',
      render: (text, record) => {
        if (record.privilege.sidebar) {
          return (
            <span>
              {record.privilege.sidebar.map(tag => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </span>
          );
        }
      },
    },
    {
      title: '可用模板',
      dataIndex: 'template',
      key: 'template',
      render: (text, record) => {
        if (record.privilege.template) {
          return (
            <span>
              {record.privilege.template.map(tag => (
                <Tag color="blue" key={tag.value}>
                  {tag.label}
                </Tag>
              ))}
            </span>
          );
        }
        return <span />;
      },
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => {
        return (
          <span>
            <a>修改</a>
            <Divider type="vertical" />
            <a>删除</a>
          </span>
        );
      },
    },
  ];
  return <Table columns={colmuns} dataSource={source} />;
};

export default CTable;
