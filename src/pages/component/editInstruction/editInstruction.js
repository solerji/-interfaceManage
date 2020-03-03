import { Form, Input, DatePicker, InputNumber, Select } from 'antd';
import React, { Component } from 'react';
import EditableFormTable from './editTable'
import style from './edit.css'
import { connect } from 'dva'

const { Option } = Select

  class editInstructionForm extends Component {
    editInstructionForm = Form.create({})(editInstructionForm);
    constructor (props) {
        super(props)
        this.state = {
          labelList: [
            {
              name: '接口名称',
              type: 'char',
              ename: 'interfaceName'
            },
            {
              name:'接口类型',
              type: 'char',
              ename: 'interfaceClass'
            },
            {
              name: '创建时间',
              type: 'date',
              ename: 'interfaceTime'
            },
            {
              name: '创建人',
              type: 'char',
              ename: 'createPeople'
            },
            {
              name:'接口描述',
              type: 'char',
              ename: 'interfaceDetail'
            }
          ],
          requestList:[],
          responseList: []
        }
    }

   componentDidMount () {
      let interData = this.props.interfaceList
      this.state.labelList.map((item) => {
        return item.instruction = interData[item.ename]
      })
    }

    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };

    switchItem (item) {
      const type = item.type;
      switch (type) {
        case 'int':
          return <InputNumber style={{ width: '100%' }} />
        case 'char':
          return <Input />
        case 'date':
          return <DatePicker style={{ width: '100%' }} />
        case 'select':
          return (
            <Select>
            {
              item.options.map((option, index) => {
                return (<Option key={index} value={option}>{option}</Option>)
              })
            }
            </Select>
          )
        default:
          return <Input />
    }
    }

    render() {
      return (
        <div>
        <span className={ style.font }>主要信息设置</span>
        <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
        {
            this.state.labelList.map((item, index) => {
                return (
                    <Form.Item
                    key={ index }
                    label= {item.name }
                     placeholder= { item.instruction }>
                   {(this.switchItem(item))}

                </Form.Item>
                )
            })
        }
        </Form>
        </div>
        <div className={ style.distance }>
        <span className={ style.font }>Headers</span>
        <EditableFormTable data= {this.props.header}></EditableFormTable>
        </div>
        <div className={ style.distance }>
        <span className={ style.font }>Body</span>
        <EditableFormTable data= {this.props.body}></EditableFormTable>
        </div>
        <div className={ style.distance }>
        <span className={ style.font }>返回参数</span>
        <EditableFormTable data= {this.props.response}></EditableFormTable>
        </div>
        </div>
      );
    }
  }

  const getData = (state) => {
    return {
      interfaceList: state.interfaceList.interface[0].main[0],
      header: state.interfaceList.interface[0].headers,
      body: state.interfaceList.interface[0].body,
      response: state.interfaceList.interface[0].response
    }
  }

  export default connect(getData)(editInstructionForm)
