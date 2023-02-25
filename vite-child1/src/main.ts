import {
  renderWithQiankun,
  qiankunWindow,
  QiankunProps,
} from "vite-plugin-qiankun/dist/helper"
import { createApp, App as VueApp } from "vue"
import App from "./App"
import { router } from "./router"

let app: VueApp<Element>

const render = (props: QiankunProps | { container: string }) => {
  const { container } = props
  app = createApp(App)
  app
    .use(router)
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
      console.log("--mount")
      render(props)
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