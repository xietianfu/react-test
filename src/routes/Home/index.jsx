import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Button, Menu, Icon } from 'antd';
import axios from 'axios';
import { getMenuData } from '../../constants/menu';

import styles from './app.less';
import myPhoto from '../../assets/images/1.jpg';

const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(getMenuData());
    axios.get('api/name').then(res => console.log(res));
  }

  handleClick = () => {
    console.log('hello');
  };

  hello = () => <h1 onClick={() => this.handleClick()}>book</h1>;

  // formatterMenu = menuData => {
  //   console.log(menuData);
  //   if (Array.isArray(menuData)) {
  //     return menuData.map(item => {
  //       if (item.children) {
  //         return (
  //           <SubMenu
  //             key={item.name}
  //             title={
  //               <span>
  //                 <Icon type={item.icon} />
  //                 <span>{item.name}</span>
  //               </span>
  //             }
  //           >
  //             {this.formatterMenu(item.children)}
  //           </SubMenu>
  //         );
  //       }
  //       return this.formatterMenu(item);
  //     });
  //   } else {
  //     return <Menu.Item key={menuData.name}>{menuData.name}</Menu.Item>;
  //   }
  // };



  formatterMenu = (menuData) => {
    if (menuData.children) {
      return (
        <Div>
          {this.}
      )
      this.formatterMenu(menuData.children);
    } else {
      return (

      )
    }
  };

  render() {
    console.error('formatter', this.formatterMenu(getMenuData()));
    return (
      <div>
        {this.hello()}
        <Menu mode="inline" style={{ width: 256 }}>
          {this.formatterMenu(getMenuData())}
        </Menu>
      </div>
    );
  }
}

export default hot(module)(App);
// export default App;
