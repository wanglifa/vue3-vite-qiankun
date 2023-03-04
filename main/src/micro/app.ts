import actions from "@/shared/action"
import { store } from "@/store"

const getActiveRule = (hash: string) => (location: { hash: string }) =>
  location.hash.startsWith(hash)

const microApps: {
  name: string
  entry: string
  activeRule: string
}[] = [
  {
    name: "subapp",
    entry: "http://127.0.0.1:8082",
    activeRule: "#/subapp",
  },
]

export const apps = microApps.map((item) => {
  return {
    ...item,
    container: "#subapp", // 子应用挂载的div
    activeRule: getActiveRule(item.activeRule),
    props: {
      routerBase: item.activeRule, // 下发基础路由
      // getGlobalState: actions.getGlobalState, // 下发getGlobalState方法
      store,
    },
  }
})