import { qiankunWindow } from "vite-plugin-qiankun/dist/helper"
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/subapp",
    component: () => import("@/views/Layout"),
    name: "Layout",
    children: [
      {
        path: "child1",
        component: () => import("@/views/A"),
      },
      {
        path: "child2",
        component: () => import("@/views/Child2"),
      },
    ],
  },
      // {
      //   path: "child1",
      //   component: () => import("@/views/A"),
      // },
      // {
      //   path: "child2",
      //   component: () => import("@/views/Child2"),
      // },
]

export const router = createRouter({
  history: createWebHashHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? "/subapp" : "/"
  ),
  routes,
})