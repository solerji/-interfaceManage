import { Button, Descriptions, Tabs, Table, Modal, Icon } from 'antd';
import React, { Component } from 'react';
import InstructionTable from './instructionTable/instructionTable';
import EditInstructionForm from '../editInstruction/editInstruction';
import InstructionFrom from './instructionForm/instructionFrom'
import style from './instructionTable/table.css'

const { TabPane } = Tabs;


class Instruction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelList: [
        {
          name: '接口名称',
          ename: 'interfaceName',
          instruction: '接口一',
        },
        {
          name: '接口类型',
          ename: 'interfaceClass',
          instruction: 'get',
        },
        {
          name: '创建时间',
          ename: 'interfaceTime',
          instruction: '20190102',
        },
        {
          name: '创建人',
          ename: 'createPeople',
          instruction: 'solerji',
        },
        {
          name: '接口描述',
          ename: 'interfaceDetail',
          instruction: '这是一个好用的接口',
        },
      ],
     interfaceColumns: [
        {
          title: '接口名',
          dataIndex: 'interfaceName',
          key: 'interfaceName',
          render: text => <a>{text}</a>,
        },
        {
          title: '所属分类',
          dataIndex: 'interfaceClass',
          key: 'interfaceClass',
        },
        {
          title: '请求类型',
          dataIndex: 'queryValue',
          key: 'queryValue',
        },
        {
          title: '备注',
          dataIndex: 'interfaceNote',
          key: 'interfaceNote',
        },
        {
          title: 'Action',
          dataIndex: '',
          key: 'x',
          render: () => <Icon type="delete"></Icon>,
        },
      ],
      interfaceData :[
        {
          interfaceName: 'John Brown',
          queryValue: 'get',
          interfaceNote: 'none',
          interfaceClass: '接口一',
        },
      ],
      visible: false
    };
  }

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  handleClick = () => {
    this.setState({
      visible: true,
    });
  };

  handleCreate = () => {
    let interfaceInfo = this.formRef.getItemsValue()
    console.log(interfaceInfo)
      this.state.interfaceData.push(interfaceInfo)
      this.setState({
        visible: false,
      })
  }

  render() {
    const operations = (
      <Button  onClick={() => this.handleClick()}>
        新增接口
      </Button>
    );

    return (
      <div style={{ textAlign: 'start' }}>
        <Tabs tabBarExtraContent={operations} type="card">
          <TabPane tab="全部接口" key="1" >
            <Table
              columns={this.state.interfaceColumns}
              dataSource={this.state.interfaceData}
              pagination={false}
              size="middle"
            ></Table>
          </TabPane>
          <TabPane tab="展示" key="2">
            <Descriptions  title="基本信息" size={this.state.size}>
              {this.state.labelList.map((item, index) => {
                return (
                  <Descriptions.Item key={index} label={item.name}>
                    {item.instruction}
                  </Descriptions.Item>
                );
              })}
            </Descriptions>
            <InstructionTable></InstructionTable>
          </TabPane>
          <TabPane tab="编辑" key="3">
            <EditInstructionForm></EditInstructionForm>
          </TabPane>
        </Tabs>
        <div></div>
        <div>
          <Modal
            title="新增接口"
            visible={this.state.visible}
            onOk={this.handleCreate}
            onCancel={this.hideModal}
            okText="确认"
            cancelText="取消"
          >
          <InstructionFrom wrappedComponentRef={(form) => this.formRef = form}></InstructionFrom>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Instruction;
