import { List, Button } from 'antd';
import React, { Component } from 'react';

class InterfaceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNames: [
        {
          name: '接口一',
        },
        {
          name: '接口二',
        },
        {
          name: '接口三',
        },
      ],
    };
  }

  editItem() {}

  delItem() {}

  render() {
    return (
      <div>
        <List
          header={<div>所有分类</div>}
          bordered
          dataSource={this.state.listNames}
          renderItem={item => (
            <List.Item
              actions={[
                <Button onClick={() => this.editItem()}>编辑</Button>,
                <Button onClick={() => this.delItem()}>删除</Button>,
              ]}
            >
              {item.name}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default InterfaceList;
