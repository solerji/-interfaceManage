import { Form, Icon, Input } from 'antd';
import React, { Component } from 'react'; 
  
  class editInstructionForm extends Component {
    editInstructionForm = Form.create({})(editInstructionForm);
    constructor (props) {
        super(props)
        this.state = {
          labelList: [
            {
              name: '接口名称'
            },
            {
              name:'接口类型'
            },
            {
              name: '创建时间'
            },
            {
              name: '创建人'
            },
            {
              name:'接口描述'
            }
          ],
          requestList:[],
          responseList: []
        }
    }
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    render() {
      return (
        <div>
        <div>主要信息设置</div>
        <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
        {
            this.state.labelList.map((item, index) => {
                return (
                    <Form.Item 
                    key={ index }
                    label= {item.name }>
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder={ item.name }
                    />
                </Form.Item>
                )
            })
        }  
        </Form>
        </div>
        <div>
        <div>请求参数设置</div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item >
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
        </Form.Item>
        <Form.Item >
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
        </Form.Item>
      </Form>
        </div>
        <div>
        <div>返回参数设置</div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item label={this.state.labelList[0].name}>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
        </Form.Item>
        <Form.Item label="选择分类">
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
        </Form.Item>
      </Form>
        </div>
        </div>
      );
    }
  }

  export default editInstructionForm