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
        mainData:
          {
            interfaceName: 'getName',
            queryValue: 'get',
            interfaceNote: 'none',
            interfaceClass: '接口一',
            interfaceTime: '202009',
            createPeople: 'solerji',
            interfaceDetail: 'jiejeiejiie',
            interfaceType: 'get'
          },
        headers:[
          {
            id: '12',
            name: 'token',
            value: '',
            fill: 'yes',
            note: 'none',
            interfaceClass: '接口一',
            example: 'none'
        },
        ],
        body:[
          {
            id: '13',
            name: 'age',
            value: 'int',
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口一',
            example: 'none'
          },
          {
            id: '14',
            name: 'name',
            value: 'string',
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口一',
            example: 'none'
        },
        ],
        response:[
          {
            id: '15',
            name: 'code',
            value: 'int',
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口一',
            example: 'none'
          },
          {
            id: '16',
            name: 'list',
            value: 'array',
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口一',
            example: 'none'
        },
        ]
      },
      {
        key: '3-1',
        parentId: '3',
        mainData:{
          interfaceName: 'getBase',
          queryValue: 'get',
          interfaceNote: 'none',
          interfaceClass: '接口二',
          interfaceTime: '202009',
          createPeople: 'solerji',
          interfaceDetail: 'jiejeiejiie',
          interfaceType: 'get'
        },
        headers:[],
        body:[
          {
            id: '23',
            name: 'address',
            value: 'string',
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口二',
            example: 'none'
          },
          {
            id: '24',
            name: 'work',
            value: 'string',
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口二',
            example: 'none'
        },
        ],
        response:[
          {
            id: '25',
            name: 'code',
            value: 'string',
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口二',
            example: 'none'
          },
          {
            id: '26',
            name: 'list',
            value: 'array',
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口二',
            example: 'none'
        },
        ]
      },
      {
        key: '3-2',
        parentId: '3',
        mainData: {
          interfaceName: 'getTime',
          queryValue: 'get',
          interfaceNote: 'none',
          interfaceClass: '接口二',
          interfaceTime: '202009',
          createPeople: 'solerji',
          interfaceDetail: 'jiejeiejiie',
          interfaceType: 'post'
        },
        headers:[
          {
            id: '31',
            name: 'token',
            value: '',
            fill: 'No',
            note: 'none',
            interfaceClass: '接口二',
            example: 'none'
          }
        ],
        body:[
          {
            id: '33',
            name: 'vistor',
            value: 'string',
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口二',
            example: 'none'
          },
          {
            id: '34',
            name: 'date',
            value: 'datetime',
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口二',
            example: 'none'
        },
        ],
        response:[
          {
            id: '35',
            name: 'code',
            value: 'int',
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口二',
            example: 'none'
          },
          {
            id: '36',
            name: 'object',
            value: 'object',
            fill: 'No',
            note: 'none',
            defaultValue:'1',
            interfaceClass: '接口二',
            example: 'none'
         },
      ]
    }
  ]
  let newData = data.filter(item => {
    return item.key === key
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
