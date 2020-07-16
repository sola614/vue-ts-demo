<template>
  <div>
    <img
      alt="Vue logo"
      src="@/assets/logo.png"
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
import Index from "@/components/Index.vue";
@Component({
  components: {
    Index
  }
})
export default class App extends Vue {
  mounted() {
    this.axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      console.log(res);
    });

    console.log("appmounted");
  }
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