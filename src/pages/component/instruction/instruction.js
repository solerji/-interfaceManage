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
         ename: 'interfaceName',
         instruction: '接口一'
       },
       {
         name:'接口类型',
         ename: 'interfaceClass',
         instruction: 'get'
       },
       {
         name: '创建时间',
         ename: 'interfaceTime',
         instruction: '20190102'
       },
       {
         name: '创建人',
         ename: 'createPeople',
         instruction: 'solerji'
       },
       {
         name: '接口描述',
         ename: 'interfaceDetail',
         instruction: '这是一个好用的接口'
       }
     ]
    };
    
  }

  handleClick() {
    console.log('this is:', this);
  }

  render () {
      return (
        <div style={{ 'textAlign': 'start' }}>
        <Tabs tabBarExtraContent={operations}>
          <TabPane tab="展示" key="1">
          <Descriptions title="基本信息" size={this.state.size}>
            {
              this.state.labelList.map((item, index) => {
                  return (
                      <Descriptions.Item 
                      key={ index }
                      label= {item.name }>
                      { item.instruction }
                  </Descriptions.Item>
                  )
              })
            } 
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