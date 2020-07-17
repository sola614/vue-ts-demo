<template>
  <div>
    <img
      alt="Vue logo"
      src="@/assets/logo.png"
    >
    <h1 class="title">一个Vue.js + TypeScript + Ant Design Vue App</h1>
    <IndexComp
      propB="123"
      @addToCount="addToCount"
      v-model="lovingVue"
    ></IndexComp>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import IndexComp from "@/components/Index.vue";
@Component({
  components: {
    IndexComp
  }
})
export default class Index extends Vue {
  mounted() {
    console.log("appmounted");
    //使用$store
    console.log(this.$store.state);
    //触发actions
    this.$store.dispatch("app/setStore1", 1111);
    this.$store.dispatch("app2/setStore1", 2222);
    //调用getters
    console.log(
      "app/gettersStore1--------",
      this.$store.getters["app/gettersStore1"]
    );
    console.log(
      "app/gettersStore1--------",
      this.$store.getters["app2/gettersStore1"]
    );

    //请求接口
    this.$axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res: any) => {
        console.log(res);
      });
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