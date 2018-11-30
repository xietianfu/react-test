import React from 'react';
import { Table } from 'antd';

const PreviewSql = ({ data }) => {
  // 获取表格标题列表，和原始数据列表
  const [titleList, ...preSource] = data;
  const columns = titleList.map((item, index) => {
    if (index === 0) {
      return {
        title: item,
        dataIndex: item,
        key: item,
        width: 100,
        fixed: 'left',
      }; // eslint-disable-line
    }
    return { title: item, dataIndex: item, key: item, width: '150px' };
  });

  // 将原始数据装换为对象数组
  let source = []; // eslint-disable-line
  preSource.forEach(item => {
    let obj = {}; // eslint-disable-line
    item.forEach((val, ind) => {
      obj[titleList[ind]] = val;
    });
    source.push(obj);
  });

  // console.table(columns);
  // console.table(source);
  return (
    <Table
      columns={columns}
      dataSource={source}
      pagination={false}
      // 确定x轴长度，避免第一项被隐藏
      scroll={{ x: titleList.length * 100, y: 300 }}
    />
  );
};

export default PreviewSql;
