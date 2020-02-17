import { Button, Menu, Icon } from 'antd';
import React, { Component } from 'react';
import style from './list.css'

const { SubMenu } = Menu;

class InterfaceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNames: [

      ],
     menuList: [
      {
        key: '1',
        name: '接口一',
      },
      {
        key: '2',
        name: '接口二',
      },
      {
        key: '3',
        name: '接口三',
      },
     ]
    };
  }

  handleClick = e => {
    console.log('click ', e);
  };

  editItem() {}

  delItem() {}

  render() {
    return (
      <div>
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="appstore" />
              <span>接口分类一</span>
            </span>
          }
        >
          <Menu.Item key="1">接口一</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
        </SubMenu>
      </Menu>
      </div>
    );
  }
}

export default InterfaceList;
