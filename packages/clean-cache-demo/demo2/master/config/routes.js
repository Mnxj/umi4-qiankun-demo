export default [
  {
    path: '/',
    redirect: '/profile',
  },
  {
    path: '/profile',
    component: './User/Profile',
  },
  {
    name: '微前端-路由显示',
    icon: 'user',
    path: '/slave/*',
    microApp: 'slave',
  },
  {
    path: '/profile',
    name: '个人中心',
    component: './User/Profile',
  },
  {
    path: '*',
    component: './404',
  },
];
