<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <h1 class="title">一个Vue.js + TypeScript + Ant Design Vue App</h1>
    <Index
      propB="123"
      @addToCount="addToCount"
      v-model="lovingVue"
    ></Index>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Index from "./components/Index.vue";

@Component({
  components: {
    Index
  }
})
export default class App extends Vue {
  addToCount(v: number) {
    console.log("@emit", v);
  }
  lovingVue = false;
  @Watch("lovingVue")
  handleLovingVue(v: any) {
    console.log("lovingVue", v);
  }
}
</script>

<style lang="less">
@import "./assets/css/reset.less";
#app {
  width: 1200px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .title {
    margin-bottom: 10px;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .mb10 {
    margin-bottom: 10px;
  }
}
</style>
