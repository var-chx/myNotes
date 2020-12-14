export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    access: 'canAdmin',
    icon: 'smile',
    component: './Welcome',
    routes: [
      {
        path: '/welcome/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ]
  },
  {
    path: '/access',
    name: 'welcome',
    icon: 'smile',
    component: './Access.tsx',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/admin/sub-page1',
        name: 'sub-page',
        icon: 'smile',
        component: './ListTableList',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './ListTableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
