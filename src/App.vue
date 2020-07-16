<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
@import "@/assets/css/reset.less";
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
