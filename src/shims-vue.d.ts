import Vue from 'vue';
import VueRouter from 'vue-router'
// import axios from 'axios'

declare module '*.vue' {
  export default Vue
}
// axios.defaults.baseURL = 'http://192.168.1.225:8088';
declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter
  }
}
