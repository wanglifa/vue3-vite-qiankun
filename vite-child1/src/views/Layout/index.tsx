import { defineComponent } from 'vue';
const Layout = defineComponent({
  setup: (props, context) => {
    return () => (
      <router-view />
    )
  }
});
export default Layout;