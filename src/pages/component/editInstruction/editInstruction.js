import { Form, Input, DatePicker, InputNumber, Select, Button } from 'antd';
import React, { Component } from 'react';
import EditableFormTable from './editTable';
import style from './edit.css';
import { connect } from 'dva';

const { Option } = Select;

class editInstructionForm extends Component {
  editInstructionForm = Form.create({})(editInstructionForm);
  constructor(props) {
    super(props);
    this.state = {
      labelList: [
        {
          name: '接口名称',
          type: 'char',
          ename: 'interfaceName',
        },
        {
          name: '接口类型',
          type: 'char',
          ename: 'interfaceType',
        },
        // {
        //   name: '创建时间',
        //   type: 'date',
        //   ename: 'interfaceTime'
        // },
        {
          name: '创建人',
          type: 'char',
          ename: 'createPeople',
        },
        {
          name: '接口描述',
          type: 'char',
          ename: 'interfaceDetail',
        },
      ],
      requestList: [],
      responseList: [],
      tableType: '',
      headerData: [],
      bodyData: [],
      responseData: [],
      headercount: 44,
      bodycount: 100,
      responsecount: 200,
    };
  }

  componentDidMount() {
    let interData = this.props.interfaceList;
    if (this.props.interfaceList !== undefined) {
      this.state.labelList.map(item => {
        return (item.instruction = interData[item.ename]);
      });
    } else {
      return null;
    }
  }

  // 取到更新值
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.interfaceList !== undefined) {
      let interData = nextProps.interfaceList;
      prevState.labelList.map(item => {
        return (item.instruction = interData[item.ename]);
      });
      prevState.headers = nextProps.headers;
      prevState.body = nextProps.body;
      prevState.response = nextProps.response;
      return prevState;
    } else {
      return null;
    }
  }

  switchItem(item) {
    const type = item.type;
    switch (type) {
      case 'int':
        return <InputNumber style={{ width: '100%' }} />;
      case 'char':
        return <Input value={item.instruction} />;
      case 'date':
        return <DatePicker style={{ width: '100%' }} />;
      case 'select':
        return (
          <Select>
            {item.options.map((option, index) => {
              return (
                <Option key={index} value={option}>
                  {option}
                </Option>
              );
            })}
          </Select>
        );
      default:
        return <Input />;
    }
  }

  handleAdd(tableType) {
    const {
      headerData,
      bodyData,
      responseData,
      bodycount,
      headercount,
      responsecount,
    } = this.state;
    if (tableType === 'header') {
      const newData = {
        key: headercount,
        name: '',
        value: '',
        fill: '',
        note: '',
        interfaceClass: '',
        example: '',
      };
      this.setState({
        tableType: tableType,
        headerData: [...headerData, newData],
        headercount: headercount + 1,
      });
    }
    if (tableType === 'body') {
      const newData = {
        key: bodycount,
        name: '',
        value: '',
        fill: '',
        note: '',
        interfaceClass: '',
        example: '',
      };
      this.setState({
        tableType: tableType,
        bodyData: [...bodyData, newData],
        bodycount: bodycount + 1,
      });
    }
    if (tableType === 'response') {
      const newData = {
        key: responsecount,
        name: '',
        value: '',
        fill: '',
        note: '',
        interfaceClass: '',
        example: '',
      };
      this.setState({
        tableType: tableType,
        responseData: [...responseData, newData],
        response: responsecount + 1,
      });
    }
  }

  render() {
    return (
      <div>
        <span className={style.font}>主要信息设置</span>
        <div>
          <Form layout="inline">
            {this.state.labelList.map((item, index) => {
              return (
                <Form.Item key={index} label={item.name}>
                  {this.switchItem(item)}
                </Form.Item>
              );
            })}
          </Form>
        </div>
        <div className={style.distance}>
          <span className={style.font}>Headers</span>
          <Button
            className={style.addBtn}
            onClick={this.handleAdd.bind(this, 'header')}
            style={{ marginBottom: 16 }}
          >
            新增
          </Button>
          <EditableFormTable
            data={this.props.header}
            type={this.state.tableType}
            addData={this.state.headerData}
          ></EditableFormTable>
        </div>
        <div className={style.distance}>
          <span className={style.font}>Body</span>
          <Button
            className={style.addBtn}
            onClick={this.handleAdd.bind(this, 'body')}
            style={{ marginBottom: 16 }}
          >
            新增
          </Button>
          <EditableFormTable
            data={this.props.body}
            type={this.state.tableType}
            addData={this.state.bodyData}
          ></EditableFormTable>
        </div>
        <div className={style.distance}>
          <span className={style.font}>返回参数</span>
          <Button
            className={style.addBtn}
            onClick={this.handleAdd.bind(this, 'response')}
            style={{ marginBottom: 16 }}
          >
            新增
          </Button>
          <EditableFormTable
            data={this.props.response}
            type={this.state.tableType}
            addData={this.state.responseData}
          ></EditableFormTable>
        </div>
      </div>
    );
  }
}

const getData = state => {
  if (state.interfaceList.interface[0] !== undefined) {
    return {
      interfaceList: state.interfaceList.interface[0].mainData,
      header: state.interfaceList.interface[0].headers,
      body: state.interfaceList.interface[0].body,
      response: state.interfaceList.interface[0].response,
    };
  } else {
    return null;
  }
};

export default connect(getData)(editInstructionForm);
