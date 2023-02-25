import { defineComponent } from 'vue';
const Home = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>home</div>
    )
  }
});
export default Home;