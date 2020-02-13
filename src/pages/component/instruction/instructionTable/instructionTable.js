import { Table } from 'antd';
import React, { Component } from 'react';

class instructionTable extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render () {
        const headerColumns = [
            {
              title: '参数名',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
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
              title: '备注',
              dataIndex: 'note',
              key: 'note'
            }
          ];
          const bodyColumns = [
            {
              title: '名称',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
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
              title: '备注',
              dataIndex: 'note',
              key: 'note'
            }
          ];
          const returnColumns = [
          {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
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
            title: '备注',
            dataIndex: 'note',
            key: 'note'
          }
          ];
        const headerData = [
            {
              key: '1',
              name: 'John Brown',
              value: 32,
              fill: 'No',
              note: 'none'
            }
          ];
          const bodyData = [
            {
              key: '1',
              name: 'John Brown',
              value: 32,
              fill: 'No',
              note: 'none'
            }
          ];
          const returnData = [
            {
              key: '1',
              name: 'John Brown',
              value: 32,
              fill: 'No',
              note: 'none'
            }
          ];
          return (
            <>
            <span>Headers</span>
            <Table columns={headerColumns} dataSource={headerData} pagination={false} size="middle"  bordered />
            <span>Body</span>
            <Table columns={bodyColumns} dataSource={bodyData} pagination={false} size="middle" bordered />
            <span>返回参数</span>
            <Table columns={returnColumns} dataSource={returnData} pagination={false} size="middle" bordered/>
            </>
          )
    }
}

export default instructionTable