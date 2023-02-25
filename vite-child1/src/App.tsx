import { defineComponent } from 'vue';
const App = defineComponent({
  setup: (props, context) => {
    return () => (
      <router-view />
    )
  }
});
export default App;