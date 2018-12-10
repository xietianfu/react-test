import { Button, Divider } from 'antd';
import React, { Component } from 'react';
import RoleModal from './components/RoleModal';
import AllotRoleModal from './components/AllotRoleModal';
import UserTable from './components/UserTable';
import RolaTable from './components/RolaTable';
import { axios } from '../../services';
import { api } from '../../constants/api';

import styles from './style.less';

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

class Authority extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      visible: false,
      alloVisible: false,
      roleList: [],
      userList: [],
      editUserId: '',
    };
  }

  componentDidMount() {
    axios.get(api.role).then(res => {
      this.setState({
        roleList: res.data.roleList,
      });
    });
    axios.get(api.user).then(res => {
      console.log(res.data);
      this.setState({
        userList: res.data.userList,
      });
    });
  }

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

  alloUser = id => {
    console.log(id);
    this.setState({
      editUserId: id,
      alloVisible: true,
    });
  };

  render() {
    return (
      <div>
        <div className={styles.btnTool}>
          <Button
            type="primary"
            style={{ marginRight: '1em' }}
            onClick={() => this.toggleVisible()}
          >
            添加角色
          </Button>
          <Button type="primary">分配角色</Button>
        </div>
        <Divider />
        <RoleModal
          visible={this.state.visible}
          toggleVisible={this.toggleVisible}
        />
        <AllotRoleModal
          visible={this.state.alloVisible}
          roleList={this.state.roleList}
          toggleVisible={this.toggleAlloVisible}
          userId={this.state.editUserId}
        />
        <RolaTable source={this.state.roleList} />
        <UserTable source={this.state.userList} pushUserId={this.alloUser} />
      </div>
    );
  }
}

export default Authority;
