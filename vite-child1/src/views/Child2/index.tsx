import { defineComponent } from 'vue';
const Child2 = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>Child2</div>
    )
  }
});
export default Child2;