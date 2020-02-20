import Mock from 'mockjs';

Mock.mock('/api/interfaceList','get', {
  'code':0,
  'list': [
    {
      key: '1',
      name: '接口一',
      level: 1,
      isSidebar: true,
      isMenu: true,
      icon:'appstore'
    },
    {
      key: '2',
      name: '接口二',
      level: 1,
      isSidebar: true,
      isMenu: true,
      icon:'appstore'
    },
    {
      key: '3',
      name: '接口三',
      level: 1,
      isSidebar: true,
      isMenu: true,
      icon:'appstore'
    },
    {
      key: '1-1',
      name: 'getName',
      isChild: true,
      parentId: '1',
      level: 2,
      icon: ''
    },{
      key: '3-1',
      name: 'getBase',
      isChild: true,
      parentId: '3',
      level: 2
    },{
      key: '3-2',
      name: 'getTime',
      isChild: true,
      parentId: '3',
      level: 2
    }
  ],
     'message':'操作成功'
  });

  Mock.mock('/api/interfaceData','post', (config) => {
    let key = config.body
    let data = [
      {
        key: '1-1',
        parentId: '1',
        interfaceName: 'getName',
        queryValue: 'get',
        interfaceNote: 'none',
        interfaceClass: '接口一',
        interfaceTime: '202009',
        createPeople: 'solerji',
        interfaceDetail: 'jiejeiejiie',
        headers:[
          {
            id: '1',
            name: 'John Brown',
            value: 32,
            fill: 'No',
            note: 'none',
            interfaceClass: '接口一'
          },
          {
            id: '2',
            name: 'John Brown',
            value: 32,
            fill: 'No',
            note: 'none',
            interfaceClass: '接口一',
        },
        ],
        body:[
          {
            id: '1',
            name: 'John Brown',
            value: 32,
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口一'
          },
          {
            id: '2',
            name: 'John Brown',
            value: 32,
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口一'
        },
        ],
        response:[
          {
            id: '1',
            name: 'John Brown',
            value: 32,
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口一',
          },
          {
            id: '2',
            name: 'John Brown',
            value: 32,
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口一',
        },
        ]
      },
      {
        key: '3-1',
        parentId: '3',
        interfaceName: 'getBase',
        queryValue: 'get',
        interfaceNote: 'none',
        interfaceClass: '接口二',
        interfaceTime: '202009',
        createPeople: 'solerji',
        interfaceDetail: 'jiejeiejiie',
        headers:[
          {
            id: '1',
            name: 'John Brown',
            value: 32,
            fill: 'No',
            note: 'none',
            interfaceClass: '接口二'
          },
          {
            id: '2',
            name: 'John Brown',
            value: 32,
            fill: 'No',
            note: 'none',
            interfaceClass: '接口二'
        },
        ],
        body:[
          {
            id: '1',
            name: 'John Brown',
            value: 32,
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口二'
          },
          {
            id: '2',
            name: 'John Brown',
            value: 32,
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口二'
        },
        ],
        response:[
          {
            id: '1',
            name: 'John Brown',
            value: 32,
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口二'
          },
          {
            id: '2',
            name: 'John Brown',
            value: 32,
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口二'
        },
        ]
      },
      {
        key: '3-2',
        parentId: '3',
        interfaceName: 'getTime',
        queryValue: 'get',
        interfaceNote: 'none',
        interfaceClass: '接口二',
        interfaceTime: '202009',
        createPeople: 'solerji',
        interfaceDetail: 'jiejeiejiie',
        headers:[
          {
            id: '1',
            name: 'John Brown',
            value: 32,
            fill: 'No',
            note: 'none',
            interfaceClass: '接口二'
          },
          {
            id: '2',
            name: 'John Brown',
            value: 32,
            fill: 'No',
            note: 'none',
            interfaceClass: '接口二'
        },
        ],
        body:[
          {
            id: '1',
            name: 'John Brown',
            value: 32,
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口二'
          },
          {
            id: '2',
            name: 'John Brown',
            value: 32,
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口二'
        },
        ],
        response:[
          {
            id: '1',
            name: 'John Brown',
            value: 32,
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口二'
          },
          {
            id: '2',
            name: 'John Brown',
            value: 32,
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口二'
         },
      ]
    }
  ]
  let newData = data.filter(item => {
    if(item.key === key) {
      return item
    }
  })
    return {
      'code':0,
      'list': newData,
      'message':'操作成功'
    }
    })

    Mock.mock('/api/allInterface','get', {
      'code':0,
      'list': [
        {
          key: '1-1',
          parentId: '1',
          interfaceName: 'getName',
          queryValue: 'get',
          interfaceNote: 'none',
          interfaceClass: '接口一'
        },
        {
          key: '3-1',
          parentId: '3',
          interfaceName: 'getBase',
          queryValue: 'get',
          interfaceNote: 'none',
          interfaceClass: '接口二',
        },
        {
          key: '3-2',
          parentId: '3',
          interfaceName: 'getTime',
          queryValue: 'get',
          interfaceNote: 'none',
          interfaceClass: '接口二',
        },
      ],
         'message':'操作成功'
      });
