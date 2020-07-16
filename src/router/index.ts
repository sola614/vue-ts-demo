
import Vue from 'vue';
import Router from 'vue-router';
// import { routerItem } from '@/interface';
import Index from '@/pages/index.vue'
import Detail from '@/pages/detail.vue'

Vue.use(Router);

const routes = [
  { path: '/', component: Index },
  { path: '/detail', component: Detail }
]

export default new Router({
  routes
})


