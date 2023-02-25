import { start } from 'qiankun';
import { defineComponent, onMounted } from 'vue';
const SubApp = defineComponent({
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
      <>
      <div id="subapp-viewport" />
      <router-view />
      </>
    )
  }
});
export default SubApp;