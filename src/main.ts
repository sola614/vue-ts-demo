import Vue from 'vue'
import App from './App.vue'
import { Button } from 'ant-design-vue';
import router from './router';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.component(Button.name, Button)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
