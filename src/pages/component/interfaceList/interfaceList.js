import { Button, Tree } from 'antd';
import React, { Component } from 'react';
const { TreeNode, DirectoryTree } = Tree;

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

  onSelect = (keys, event) => {
    console.log('Trigger Select', keys, event);
  };

  onExpand = () => {
    console.log('Trigger Expand');
  };

  editItem() {}

  delItem() {}

  render() {
    return (
      <div>
      <DirectoryTree multiple defaultExpandAll onSelect={this.onSelect} onExpand={this.onExpand}>
      <TreeNode title="接口一" key="0-0">
        <TreeNode title="John Brown" key="0-0-0" isLeaf />
        <TreeNode title="2222" key="0-0-1" isLeaf />
      </TreeNode>
      <TreeNode title="接口二" key="0-1">
        <TreeNode title="22222" key="0-1-0" isLeaf />
        <TreeNode title="333333" key="0-1-1" isLeaf />
      </TreeNode>
    </DirectoryTree>
      </div>
    );
  }
}

export default InterfaceList;
