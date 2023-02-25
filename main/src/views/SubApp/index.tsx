import { defineComponent } from 'vue';
const SubApp = defineComponent({
  setup: (props, context) => {
    return () => (
      <>
      <div id="subapp-viewport" />
      <router-view />
      </>
    )
  }
});
export default SubApp;