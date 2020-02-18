import { Menu, Icon } from 'antd';
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
        level: 1,
        isSidebar: true,
        isMenu: true,
        icon:'appstore'
      },
      {
        key: '2',
        name: '接口二',
        level: 1,
        isSidebar: true,
        isMenu: true,
        icon:'appstore'
      },
      {
        key: '3',
        name: '接口三',
        level: 1,
        isSidebar: true,
        isMenu: true,
        icon:'appstore'
      },
      {
        key: '1-1',
        name: 'getName',
        isChild: true,
        parentId: '1',
        level: 2,
        icon: ''
      },{
        key: '3-1',
        name: 'getBase',
        isChild: true,
        parentId: '3',
        level: 2
      },{
        key: '3-2',
        name: 'getTime',
        isChild: true,
        parentId: '3',
        level: 2
      }
     ]
    };
  }

  handleClick = e => {
    console.log('click ', e);
  };

  editItem() {}

  delItem() {}

  render() {
    const sidebar = this.state.menuList.filter(side=>side.isSidebar)
    const childbar = this.state.menuList.filter(side=>side.isChild)
    return (
      <div>
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >{
        sidebar.map(item=>{
          if(item.isMenu){
            return (
              <SubMenu
              key={item.key}
              title={<span><span><Icon type={item.icon} /></span><span>{item.name}</span></span>}>
              {
                   childbar.map(child=>{
                     if (child.parentId === item.key && child.isChild ) {
                      return (
                        <Menu.Item
                        key={child.key}
                        >{child.name}</Menu.Item>
                      )
                     }
                    return null
                   })
              }
              </SubMenu>
            )
          }
          return (
            <Menu.Item
            key={item.key}
            >
            <span>{item.name}</span></Menu.Item>
          )
        })
      }
      </Menu>
      </div>
    );
  }
}

export default InterfaceList;
