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
        path: "/subapp",
        component: () => import('../views/SubApp'),
        name: "子应用",
        children: [
          {
            path: "/subapp/child1",
            name: "child1",
            // 这里的二级菜单组件是没有意义的，但是 ts 必须要传一个 component，所以随便写一个就行，为了解决 ts bao'cuo
            component: import("../views/Portal")
          },
          {
            path: "/subapp/child2",
            name: "child2",
            component: import("../views/Portal")
          }
        ]
      }
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;