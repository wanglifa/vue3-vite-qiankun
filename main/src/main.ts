import { createApp } from 'vue'
import App from './App'
import {registerMicroApps, start} from "qiankun"
import router from './router'
const getActiveRule = (hash: string) => (location: { hash: string }) =>
  location.hash.startsWith(hash)

registerMicroApps([
  {
    name: "subapp",
    entry: "//localhost:3002",
    container: "#subapp",
    activeRule: getActiveRule("#/subapp"),
  }
])

createApp(App).use(router).mount('#app')
