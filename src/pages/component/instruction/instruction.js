import { Button, Descriptions, Tabs } from 'antd';
import React, { Component } from 'react'; 
import Link from 'umi/link'
import InstructionTable from './instructionTable/instructionTable'
import EditInstructionForm from '../editInstruction/editInstruction'

const { TabPane } = Tabs
const operations = <Button type="primary" onClick={(e) => this.handleClick(e)}>新增接口</Button>

class Instruction extends Component {
  constructor(props) {
    super(props);
    this.state = {
     labelList:[
       {
         name: '接口名称',
         ename: 'interfaceName'
       },
       {
         name:'接口类型',
         ename: 'interfaceClass'
       },
       {
         name: '创建时间',
         ename: 'interfaceTime'
       },
       {
         name: '创建人',
         ename: 'createPeople'
       },
       {
         name: '接口描述',
         ename: 'interfaceDetail'
       }
     ],
     description: [
       {
         id: '1',
         interfaceName: '第一个接口',
         interfaceClass:'get',
         interfaceTime: '',
         createPeople: '',
         interfaceDetail: ''
       }
     ]
    };
    
  }

  handleClick() {
    console.log('this is:', this);
  }

  render () {
      return (
        <div>
        <Tabs tabBarExtraContent={operations}>
          <TabPane tab="展示" key="1">
          <Descriptions title="基本信息" size={this.state.size}>
            <Descriptions.Item label="Product">第一个接口</Descriptions.Item>
            <Descriptions.Item label="Billing">get</Descriptions.Item>
            <Descriptions.Item label="time">18:00:00</Descriptions.Item>
            <Descriptions.Item label="Amount">solerji</Descriptions.Item>
            <Descriptions.Item label="Discount">这是一个及其好用的接口管理器</Descriptions.Item>
          </Descriptions>
          <InstructionTable></InstructionTable>
          </TabPane>
          <TabPane tab="编辑" key="2">
            <EditInstructionForm></EditInstructionForm>
          </TabPane>
        </Tabs>
        <div>
        </div>
        <div>
        <Link to="/interface">进入接口测试页面</Link>
        </div>
      </div>
      )
  }
}

export default Instruction;