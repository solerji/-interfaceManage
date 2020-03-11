import { Table } from 'antd';
import React, { Component } from 'react';
import style from './table.css'
import { connect } from 'dva'
class instructionTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          headerData: [],
          bodyData: [],
          returnData: []
        };
    }

    render () {
        const headerColumns = [
            {
              title: '参数名',
              dataIndex: 'name',
              key: 'name'
            },
            {
              title: '参数值',
              dataIndex: 'value',
              key: 'value',
            },
            {
              title: '是否必须',
              dataIndex: 'fill',
              key: 'fill',
            },
            {
              title: '示例',
              dataIndex: 'example',
              key: 'example'
            },
            {
              title: '备注',
              dataIndex: 'note',
              key: 'note'
            }
          ];
          const bodyColumns = [
            {
              title: '名称',
              dataIndex: 'name',
              key: 'name'
            },
            {
              title: '类型',
              dataIndex: 'value',
              key: 'value',
            },
            {
              title: '是否必须',
              dataIndex: 'fill',
              key: 'fill',
            },
            {
              title: '默认值',
              dataIndex: 'defaultValue',
              key: 'defaultValue'
            },
            {
              title: '示例',
              dataIndex: 'example',
              key: 'example'
            },
            {
              title: '备注',
              dataIndex: 'note',
              key: 'note'
            }
          ];
          const returnColumns = [
          {
            title: '名称',
            dataIndex: 'name',
            key: 'name'
          },
          {
            title: '类型',
            dataIndex: 'value',
            key: 'value',
          },
          {
            title: '是否必须',
            dataIndex: 'fill',
            key: 'fill',
          },
          {
            title: '默认值',
            dataIndex: 'defaultValue',
            key: 'defaultValue'
          },
          {
            title: '示例',
            dataIndex: 'example',
            key: 'example'
          },
          {
            title: '备注',
            dataIndex: 'note',
            key: 'note'
          }
          ];
          return (
            <span>
            <span className={style.font}>Headers</span>
            <Table columns={headerColumns} dataSource={this.props.header} pagination={false} size="middle"  bordered />
            <span className={style.font}>Body</span>
            <Table columns={bodyColumns} dataSource={this.props.body} pagination={false} size="middle" bordered />
            <span className={style.font}>返回参数</span>
            <Table columns={returnColumns} dataSource={this.props.response} pagination={false} size="middle" bordered/>
           </span>
          )
    }
}

const getData = (state) => {
  if (state.interfaceList.interface[0] !== undefined) {
  return {
    interfaceList: state.interfaceList.interface[0],
    header: state.interfaceList.interface[0].headers,
    body: state.interfaceList.interface[0].body,
    response: state.interfaceList.interface[0].response
  }
 } else {
   return null
 }
}

export default connect(getData)(instructionTable)

