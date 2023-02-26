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
