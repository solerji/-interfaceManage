import { Menu, Icon } from 'antd';
import React, { Component } from 'react';
import * as service from '../../../service/api'
import { connect } from 'dva'
import '../../../../mock/index'
import './list.css'

const { SubMenu } = Menu;
class InterfaceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
     menuList: []
    };
  }

  async componentDidMount () {
    let datalist = await service.getInterfaceList()
    this.setState({
      menuList: datalist.data.list,
    });
  }

   handleClick = (e) => {
    let res =  service.getInterfaceData(e.key)
    res.then(data => {
      const { dispatch } = this.props
      dispatch({
        type:'interfaceList/datalist',
        payload: {
          interfaceData: data.data.list
        }
      })
    })
  }

  render() {
    const sidebar = this.state.menuList.filter(side=>side.isSidebar)
    const childbar = this.state.menuList.filter(side=>side.isChild)
    return (
      <div>
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['1']}
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
                     if (child.parentId === item.key && child.isChild) {
                      return (
                        <Menu.Item
                        key={child.key}
                        ><span>{child.name}</span></Menu.Item>
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

export default connect()(InterfaceList);
