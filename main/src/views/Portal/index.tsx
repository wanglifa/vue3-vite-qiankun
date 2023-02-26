import { start } from 'qiankun';
import { defineComponent, onMounted } from 'vue';
import s from './index.module.less'
const Portal = defineComponent({
  setup: (props, context) => {
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
      <div id="subapp"/>
    )
  }
});
export default Portal;