import { start } from 'qiankun';
import { defineComponent, onMounted } from 'vue';
const SubApp = defineComponent({
  setup: (props, context) => {
    return () => (
      <>
      <router-view />
      </>
    )
  }
});
export default SubApp;