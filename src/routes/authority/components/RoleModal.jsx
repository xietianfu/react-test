import React, { Component } from 'react';
import { Modal, TreeSelect, Input, Divider, Row, Col, Checkbox } from 'antd';
import { getMenuData } from '../../../constants/menu';
import { axios } from '../../../services';
import { api } from '../../../constants/api';

const { SHOW_PARENT } = TreeSelect;
const CheckboxGroup = Checkbox.Group;

function buildTree(menu) {
  return menu.map(item => {
    if (item.children) {
      return {
        title: item.name,
        value: item.authority,
        key: item.authority,
        children: buildTree(item.children),
      };
    }
    return {
      title: item.name,
      value: item.authority,
      key: item.authority,
    };
  });
}

class RoleModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      templateOptions: [],
      dashboardList: [],
      selectOption: [],
      selectDashbord: [],
      name: '',
    };
    this.treeData = buildTree(getMenuData());
  }

  componentDidMount() {
    axios.get(api.templateManage).then(res => {
      const data = res.data.templateList;
      this.setState({
        templateOptions: data.map(item => ({
          label: item.name,
          value: item.templateId,
        })),
      });
    });
    axios.get(api.dashboardManage).then(res => {
      console.log(res.data.dashboardList);
      this.setState({
        dashboardList: res.data.dashboardList.map(item => ({
          label: item.config.name,
          value: item.dashboardId,
        })),
      });
    });
  }

  onName = e => {
    this.setState({
      name: e.target.value,
    });
  };

  onTreeSelectChange = value => {
    console.log('onChange ', value);
    this.setState({ value });
  };

  ontemplateOptionChange = value => {
    const { templateOptions } = this.state;
    const selectOption = [];
    value.forEach(item => {
      selectOption.push(templateOptions.find(val => val.value === item));
    });
    console.log(selectOption);
    this.setState({
      selectOption,
    });
  };

  onSumbit = () => {
    const { value, selectOption, name } = this.state;

    axios
      .post(api.role, {
        name,
        template: selectOption,
        sidebar: value,
      })
      .then(res => {
        this.props.toggleVisible();
      });
  };

  render() {
    const tProps = {
      treeData: this.treeData,
      value: this.state.value,
      onChange: this.onTreeSelectChange,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: 'Please select',
      style: {
        width: '100%',
      },
    };
    return (
      <Modal
        visible={this.props.visible}
        title="添加角色"
        onOk={() => this.onSumbit()}
        onCancel={() => this.props.toggleVisible()}
      >
        <Input
          value={this.state.name}
          placeholder="输入角色名称"
          onChange={this.onName}
        />
        <Divider />
        <Row>
          <Col span={11}>
            <h3>添加侧边栏权限</h3>
            <TreeSelect {...tProps} />
          </Col>
          <Col span={2}>
            <Divider type="vertical" />
          </Col>
          <Col span={11}>
            <h3>添加模板权限</h3>
            <CheckboxGroup
              options={this.state.templateOptions}
              onChange={this.ontemplateOptionChange}
            />
            <h3>添加面板权限</h3>
            <CheckboxGroup
              options={this.state.dashboardList}
              onChange={this.ontemplateOptionChange}
            />
          </Col>
        </Row>
      </Modal>
    );
  }
}

export default RoleModal;
