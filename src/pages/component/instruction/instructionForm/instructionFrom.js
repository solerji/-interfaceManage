import { Input, Form, Select} from 'antd';
import React, { Component } from 'react';

const { Option } = Select;

class InstructionFrom  extends Component {
  getItemsValue = () => {
    const values= this.props.form.getFieldsValue()
    return values;
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
      <Form layout='horizontal' onSubmit={this.submit}>
      <Form.Item label="接口名称">
      {getFieldDecorator('interfaceName', {
        rules: [{ required: true, message: 'Please input your username!' }],
      })(
        <Input type="interfaceName" />
      )}
      </Form.Item>
      <Form.Item label="所属分类">
      {getFieldDecorator('interfaceClass', {
        rules: [{ required: true, message: 'Please input your username!' }],
      })(
        <Select placeholder="选择请求类型">
        <Option value="接口一">接口一</Option>
        <Option value="接口二">接口二</Option>
      </Select>
      )}
      </Form.Item>
      <Form.Item label="请求类型">
      {getFieldDecorator('queryValue', {
        rules: [{ required: true, message: 'Please input your username!' }],
      })(
      <Select placeholder="选择请求类型">
        <Option value="get">get</Option>
        <Option value="post">post</Option>
      </Select>
      )}
      </Form.Item>
      <Form.Item label="备注">
      {getFieldDecorator('interfaceNote', {
        rules: [{ required: true, message: 'Please input your username!' }],
      })(
        <Input type="interfaceNote" />
      )}
      </Form.Item>
    </Form>
    </div>
    )
  }
}

  export default InstructionFrom = Form.create({})(InstructionFrom);




