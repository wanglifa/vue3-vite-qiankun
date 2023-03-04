import { defineComponent, onMounted } from "vue"
import { ElContainer, ElAside, ElMain, ElHeader } from "element-plus"
import s from "./index.module.less"
import { SlideBar } from "../../components/SliderBar"
import { start } from "qiankun"
import { store } from "@/store"
const Layout = defineComponent({
  setup: (props, context) => {
    const handleClick = () => {
      store.commit("setToken", "2222")
    }
    onMounted(() => {
      if (!window.qiankunStarted) {
        window.qiankunStarted = true
        start({
          sandbox: {
            experimentalStyleIsolation: true,
          },
        })
      }
    })
    return () => (
      <div class={[s.layoutWrapper, "common-layout"]} onClick={handleClick}>
        <ElContainer>
          <ElHeader class={s.header}>header</ElHeader>
          <ElContainer>
            <ElAside width='240px' class={s.aside}>
              <SlideBar />
            </ElAside>
            <ElMain class={s.main}>
                <div id="subapp" />
              <router-view />
            </ElMain>
          </ElContainer>
        </ElContainer>
      </div>
    )
  },
})
export default Layout