import { defineComponent } from 'vue';
const A = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>a</div>
    )
  }
});
export default A;