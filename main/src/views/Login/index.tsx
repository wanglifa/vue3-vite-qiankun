import { defineComponent } from 'vue';
import s from './index.module.less'
const Login = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.loginWrapper}>login</div>
    )
  }
});
export default Login;