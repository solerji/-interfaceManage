import { Table, Input, InputNumber, Popconfirm, Form, Button } from 'antd';
import React from 'react'

const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i.toString(),
    name: `class ${i}`,
    type: 32,
    description: `备注 ${i}`,
  });
}
const EditableContext = React.createContext();

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  };

  renderCell = ({ getFieldDecorator }) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: true,
                  message: `Please Input ${title}!`,
                },
              ],
              initialValue: record[dataIndex],
            })(this.getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>;
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data, editingKey: '', count: 2 };
    this.columns = [
      {
        title: '名称',
        dataIndex: 'name',
        width: '25%',
        editable: true,
      },
      {
        title: 'Object',
        dataIndex: 'type',
        width: '10%',
        editable: true,
      },
      {
        title: 'concentType',
        dataIndex: 'concentType',
        width: '15%',
        editable: true,
      },
      {
        title: '备注',
        dataIndex: 'description',
        width: '30%',
        editable: true,
      },
      {
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) => {
          const { editingKey } = this.state;
          const editable = this.isEditing(record);
          return editable ? (
            <span>
              <EditableContext.Consumer>
                {form => (
                  <Button
                    onClick={() => this.save(form, record.key)}
                    style={{ marginRight: 8 }}
                  >
                    保存
                  </Button>
                )}
              </EditableContext.Consumer>
              <Popconfirm title="确定要取消吗?" onConfirm={() => this.cancel(record.key)}>
                <Button>取消</Button>
              </Popconfirm>
            </span>
          ) : (
            <span>
            <Button disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>
              编辑
            </Button>
            <Button disabled={editingKey !== ''} onClick={() => this.handleDelete(record.key)}>删除</Button>
            </span>
          );
        },
      },
    ];
  }

  isEditing = record => record.key === this.state.editingKey;

  cancel = () => {
    this.setState({ editingKey: '' });
  };

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ data: newData, editingKey: '' });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: '' });
      }
    });
  }

  edit(key) {
    this.setState({ editingKey: key });
  }

  handleDelete = key => {
    const data = [...this.state.data];
    this.setState({ data: data.filter(item => item.key !== key) });
  };

  handleAdd = () => {
    const { count, data } = this.state;
    const newData = {
      key: count,
      name: `classname ${count}`,
      type: 32,
      concentType: '1',
      description: `no. ${count}`,
    };
    this.setState({
      data: [...data, newData],
      count: count + 1,
    });
  };


  render() {
    const components = {
      body: {
        cell: EditableCell,
      },
    };

    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });

    return (
      <EditableContext.Provider value={this.props.form}>
        <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
         新增
        </Button>
        <Table
          size="small"
          components={components}
          dataSource={this.state.data}
          columns={columns}
          rowClassName="editable-row"
          pagination={ false }
        />
      </EditableContext.Provider>
    );
  }
}

const EditableFormTable = Form.create()(EditableTable);

export default EditableFormTable