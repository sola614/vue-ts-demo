import Vue from 'vue';
import App from '@/App.vue';
import { Button } from 'ant-design-vue';
import router from './router';
import store from '@/store';
import axios from 'axios';
//axios注入vue 需在module.d.ts声明$axios:any,编辑器才不会不报错
Vue.prototype.$axios = axios
//使用button按钮
Vue.component(Button.name, Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
