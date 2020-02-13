exports.routes = [{
    path: '/', component: '../layouts/index',
    'routes': [
       {
          path: '/',
          component: '../pages/index'
      },
      {
        path: '/introduce',
        component: '../pages/introduce/introduce'
    }
    ],
}]
