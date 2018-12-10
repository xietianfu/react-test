import React, { Component } from 'react';
import { Button, Modal } from 'antd';
import Table from './components/Table';
import ManageModal from './components/ManageModal';
import { axios } from '../../services';
import { api } from '../../constants/api';

class TableManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      alloVisible: false,
      templateList: [],
      editData: {},
    };
  }

  componentDidMount() {
    axios.get(api.templateManage).then(res => {
      this.setState({
        templateList: res.data.templateList,
      });
    });
  }

  addTable = () => {
    this.setState({
      visible: true,
    });
  };

  toggleVisible = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  toggleAlloVisible = () => {
    this.setState({
      alloVisible: !this.state.alloVisible,
    });
  };

  changeTable = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, templateList, editData } = this.state;
    return (
      <div>
        <Button type="primary" onClick={() => this.addTable()}>
          添加数据表
        </Button>
        <Table source={templateList} />
        <ManageModal
          visible={visible}
          data={editData}
          toggleVisible={this.toggleVisible}
          changeTable={this.changeTable}
        />
      </div>
    );
  }
}

export default TableManage;
