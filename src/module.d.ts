import VueRouter, { Route } from 'vue-router'

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter,
    $Route: Route,
    $axios: any
  }
}