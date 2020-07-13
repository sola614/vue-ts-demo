<template>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Detail extends Vue {
  @Prop() private code!: string;
}
</script>

<style>
</style>