import VueRouter, { Route } from 'vue-router'
import axios from 'axios';
import { Store } from 'vuex';
//增强类型定义（https://cn.vuejs.org/v2/guide/typescript.html#%E5%A2%9E%E5%BC%BA%E7%B1%BB%E5%9E%8B%E4%BB%A5%E9%85%8D%E5%90%88%E6%8F%92%E4%BB%B6%E4%BD%BF%E7%94%A8）
//三方组件需在main.ts上声明，如Vue.prototype.$axios = axios
//参考https://github.com/coppyC/blog/issues/6
declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter,
    $Route: Route,
    $axios: typeof axios,//该写法需要三方库支持typescript,否则写any吧
    $store: Store<any>
  }
}