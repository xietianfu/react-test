import React, { Component } from 'react';
import styled from 'styled-components';

class MaintainProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>类型</th>
            <th>项目</th>
            <th>更多信息</th>
            <th>用量</th>
            <th>参考费用</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="rowTitle" rowSpan="2">
              常规保养
            </td>
            <td>dd</td>
            <td>dd</td>
            <td>dd</td>
            <td>dd</td>
          </tr>
          <tr>
            {/* <td rowSpan="2">常规保养</td> */}
            <td>dd</td>
            <td>dd</td>
            <td>dd</td>
            <td>dd</td>
          </tr>
          <tr>
            <td className="rowTitle">清洁养护</td>
            <td colSpan="3">sadf</td>
            <td>dd</td>
          </tr>
          <tr>
            <td className="rowTitle">检查/更换</td>
            <td>sadf</td>
          </tr>
          <tr>
            <td className="rowTitle">工时</td>
            <td>sadf</td>
          </tr>
          <tr>
            <td className="rowTitle">里程及时间</td>
            <td>sadf</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MaintainProject;
