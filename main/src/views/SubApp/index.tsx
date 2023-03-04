import { defineComponent  } from 'vue';
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