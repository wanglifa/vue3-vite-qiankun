import { createApp } from "vue"
import App from "./App"
import router from "./router"
import "@/micro"
import { store } from "@/store"

createApp(App).use(router).use(store).mount("#app")