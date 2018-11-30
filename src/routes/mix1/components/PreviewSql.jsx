import React from 'react';
import { Table } from 'antd';

const PreviewSql = ({
  data = [
    [
      '姓名',
      '数学',
      '语文',
      'ss',
      'qqw',
      'dfw',
      'we',
      'ssa',
      'qqwa',
      'dfwa',
      'wea',
    ],
    ['张三', 60, 80, 60, 80, 60, 80, 60, 80, 60, 80],
    ['李四', 90, 50, 60, 80, 60, 80, 60, 80, 60, 80],
    ['张三', 60, 80, 60, 80, 60, 80, 60, 80, 60, 80],
    ['李四', 90, 50, 60, 80, 60, 80, 60, 80, 60, 80],
    ['张三', 60, 80, 60, 80, 60, 80, 60, 80, 60, 80],
    ['李四', 90, 50, 60, 80, 60, 80, 60, 80, 60, 80],
    ['张三', 60, 80, 60, 80, 60, 80, 60, 80, 60, 80],
    ['李四', 90, 50, 60, 80, 60, 80, 60, 80, 60, 80],
    ['张三', 60, 80, 60, 80, 60, 80, 60, 80, 60, 80],
    ['李四', 90, 50, 60, 80, 60, 80, 60, 80, 60, 80],
    ['张三', 60, 80, 60, 80, 60, 80, 60, 80, 60, 80],
    ['李四', 90, 50, 60, 80, 60, 80, 60, 80, 60, 80],
    ['张三', 60, 80, 60, 80, 60, 80, 60, 80, 60, 80],
    ['李四', 90, 50, 60, 80, 60, 80, 60, 80, 60, 80],
  ],
}) => {
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
    return { title: item, dataIndex: item, key: item, width: '200px' };
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
