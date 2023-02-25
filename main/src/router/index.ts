import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  // 基座应用自己的路由
  {
    path: '/login',
    component: () => import('../views/Login'),
  },
  {
    path: "",
    component: () => import('../views/Layout'),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "首页",
        component: () => import('../views/Home'),
      },
  {
    path: '/subapp',
    component: () => import('../views/SubApp'),
    name: '子应用',
    children: [
      {
        path: '', // 默认显示第一个子应用的菜单
        redirect: '/subapp/child1',
      },
      // @ts-ignore
      {
        path: '/child1',
        name: 'Child1',
        meta: {
          microApp: 'sub-app', // 子应用名称
          activeRule: '/subapp/child1', // 激活子应用的路由规则
          title: 'Child1', // 子应用菜单名称
        },
        // redirect: '/subapp/child1'
      },
      // @ts-ignore
      {
        path: '/child2',
        name: 'Child2',
        meta: {
          microApp: 'sub-app',
          activeRule: '/subapp/child2',
          title: 'Child2',
        },
        // redirect: '/subapp/child2'
      },
    ],
  },
    ]
  }
  // {
  //   path: "/subapp/chapters*",
  //   component: () => import('../views/SubApp'),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
