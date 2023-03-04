import {
  addGlobalUncaughtErrorHandler,
  registerMicroApps,
  start,
} from "qiankun"
import Nprogress from "nprogress"
import "nprogress/nprogress.css"
import { ElLoading } from "element-plus"
import { apps } from "./app"
let loadingInstance: ReturnType<typeof ElLoading.service>

registerMicroApps(apps, {
  beforeLoad: (app) => {
    Nprogress.start()
    loadingInstance = ElLoading.service()
    console.log("before load", app.name)
    return Promise.resolve()
  },
  afterMount: (app) => {
    Nprogress.done()
    loadingInstance.close()
    console.log("after mount", app.name)
    return Promise.resolve()
  },
})

addGlobalUncaughtErrorHandler(() => {
  loadingInstance.close()
  console.log("子应用加载失败，请检查应用是否可运行")
})

export { start }