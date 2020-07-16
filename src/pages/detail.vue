<template>
  <div id="realChart">
    <a-button
      type="primary"
      @click="goBack"
      class="mb10"
    >
      返回
    </a-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Chart } from "@antv/g2";
@Component
export default class Detail extends Vue {
  // @Prop() private code!: string;
  data = [
    { genre: "Sports", sold: 275 },
    { genre: "Strategy", sold: 115 },
    { genre: "Action", sold: 120 },
    { genre: "Shooter", sold: 350 },
    { genre: "Other", sold: 150 }
  ];
  mounted() {
    // Step 1: 创建 Chart 对象
    const chart = new Chart({
      container: "realChart",
      width: 600,
      height: 300
    });
    // Step 2: 载入数据源
    chart.data(this.data);

    // Step 3：创建图形语法，绘制柱状图
    chart.area().position("genre*sold");

    // Step 4: 渲染图表
    chart.render();
  }
  goBack() {
    this.$router.go(-1);
  }
}
</script>

<style>
</style>