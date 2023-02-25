import { defineComponent } from 'vue';
const App = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>
      <router-view />
      <div id="subapp-viewport"/>
      </div>
    )
  }
});
export default App;