import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  // 基座应用自己的路由
  {
    path: '/',
    component: () => import('../views/Home'),
  },
  {
    path: '/subapp',
    component: () => import('../views/SubApp'),
    children: [
      {
        path: '', // 默认显示第一个子应用的菜单
        redirect: '/subapp/child1',
      },
      {
        path: 'child1',
        name: 'Child1',
        meta: {
          microApp: 'sub-app', // 子应用名称
          activeRule: '/subapp/child1', // 激活子应用的路由规则
          title: 'Child1', // 子应用菜单名称
        },
      },
      {
        path: 'child2',
        name: 'Child2',
        meta: {
          microApp: 'sub-app',
          activeRule: '/subapp/child2',
          title: 'Child2',
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
