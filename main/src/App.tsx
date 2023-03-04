import { defineComponent } from "vue"
import "element-plus/dist/index.css"
import "./App.less"
import { useStore } from "vuex"
const App = defineComponent({
  setup: (props, context) => {
    const store = useStore()

    return () => (
      <>
        <div>token: {store.state.token}</div>
        <router-view />
      </>
    )
  },
})
export default App