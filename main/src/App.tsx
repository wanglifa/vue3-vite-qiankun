import { defineComponent } from 'vue';
import "element-plus/dist/index.css"
import './App.less'
const App = defineComponent({
  setup: (props, context) => {
    return () => (
      <>
      <router-view />
      </>
    )
  }
});
export default App;