import { createPinia } from "pinia"
import {
  renderWithQiankun,
  qiankunWindow,
  QiankunProps,
} from "vite-plugin-qiankun/dist/helper"
import { createApp, App as VueApp } from "vue"
import App from "./App"
import { router } from "./router"
import { useUserStore } from "./store/user"

let app: VueApp<Element>

const render = (props: QiankunProps | { container: string }) => {
  const { container } = props
  app = createApp(App)
  app
    .use(router)
    .use(createPinia())
    .mount(
      container
        ? container instanceof HTMLElement
          ? container.querySelector("#app")!
          : container
        : document.getElementById("app")!
    )
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({ container: "#app" })
} else {
  renderWithQiankun({
    mount(props) {
      console.log(props, "sss")
      const { store: parentStore, onGlobalStateChange, setGlobalState } = props
      console.log(1)
      onGlobalStateChange((state, prev) => {
        console.log(state, prev)
        store.setToken(state.token)
      })
      console.log("--mount")
      render(props)
      const store = useUserStore()
      store.setToken(parentStore.state.token)
    },
    bootstrap() {
      console.log("--bootstrap")
    },
    update() {
      console.log("--update")
    },
    unmount() {
      console.log("--unmount")
      app?.unmount()
    },
  })
}