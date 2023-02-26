import { defineComponent, onMounted } from 'vue';
import {ElContainer, ElAside, ElMain, ElHeader} from "element-plus"
import s from './index.module.less'
import { SlideBar } from '../../components/SliderBar';
import { start } from 'qiankun';
const Layout = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={[s.layoutWrapper, "common-layout"]}>
        <ElContainer>
          <ElHeader class={s.header}>header</ElHeader>
            <ElContainer>
              <ElAside width="240px" class={s.aside}>
                <SlideBar/>
              </ElAside>
              <ElMain class={s.main}>
                <router-view />
              </ElMain>
          </ElContainer>
        </ElContainer>
      </div>
    )
  }
});
export default Layout;