import { createApp } from 'vue'
import App from './App'
import {registerMicroApps, start} from "qiankun"
import router from './router'

registerMicroApps([
  {
    name: "subapp",
    entry: "//localhost:3002",
    container: "#subapp-viewport",
    activeRule: "/subapp",
  }
])

start()
createApp(App).use(router).mount('#app')
