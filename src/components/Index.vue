<template>
  <div id="indexPage">
    <p class="mb10">传入PropA：{{propA}}</p>
    <p class="mb10">传入PropB：{{propB}}</p>
    <p class="mb10">传入PropC：{{propC}}</p>
    <a-button
      type="primary"
      @click="onClick"
      class="mb10"
    >
      {{message}}
    </a-button>
    <p class="mb10">点击次数：{{count}}</p>
    <p class="mb10">count2：{{count2}}</p>
    <p class="mb10">count3：{{count3}}</p>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  PropSync,
  Vue,
  Watch,
  Emit,
  Model
} from "vue-property-decorator";
import HelloWorld from "./HelloWorld.vue"; //引入组件必须带上.vue
//组件引入组件
@Component({
  components: {
    HelloWorld
  }
})
//当前组件属性声明
export default class Index extends Vue {
  //vue-class-component
  //data声明
  message: string = "Ant Design Vue Button";
  count: number = 0;
  count2: number = 0;
  count3 = "";
  //生命周期声明
  mounted() {
    console.log("mounted");
  }
  //计算属性conputed
  //conputedA(){return this.count;} return 的值必须是number类型
  get conputedA(): number {
    return this.count;
  }
  //conputedA(){return this.count+'';} return 的值必须是string类型
  get conputedB(): string {
    return this.count + "";
  }
  //conputedC(){return this.count;}
  get conputedC() {
    return this.count;
  }

  // vue-property-decorator

  //prop声明 @Prop(options: (PropOptions | Constructor[] | Constructor) = {})
  // [non-null-assertion-operator](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#non-null-assertion-operator) 关于非空断言可以参考这个
  //
  @Prop(Number) readonly propA: number | undefined;
  /*
  输出
  props:{
    propA:Number
  }
  */
  @Prop({ default: "default value", required: true }) readonly propB!: string;
  /*
  输出
  props:{
    propB:{
      default:'',
      required:true
    }
  }
  */

  @Prop([String, Boolean]) readonly propC: string | boolean | undefined;
  /*
  输出
  props:{
    propC: [String, Boolean] 
  }
  */

  //@PropSync(propName: string, options: (PropOptions | Constructor[] | Constructor) = {})
  @PropSync("name", { type: String }) syncedName!: string;
  /*
  输出
   export default {
    props: {
      name: {
        type: String,
      },
    },
    computed: {
      syncedName: {
        get() {
          return this.name
        },
        set(value) {
          this.$emit('update:name', value)
        },
      },
    },
  }
   */

  //watch声明
  /*
  count(val,oldVal){
    console.log("watch", val, oldVal);
  }
  */
  @Watch("count")
  onCountWatch(val: number, oldVal: number) {
    console.log("watch", val, oldVal);
  }
  /*
  count2:{
    handler(newV, oldVal) {
      console.log("watch2", val, oldVal);
    },
    deep: true
  }
  */
  @Watch("count2", { deep: true })
  onCountWatch2(val: number, oldVal: number) {
    console.log("watch2", val, oldVal);
  }

  //method声明
  onClick() {
    console.log("button click");
    this.count++;
    this.count2--;
    this.addToCount(1); //执行this.count += n;后再执行this.$emit
    this.$emit("change", true);
  }
  // this.count += n;this.$emit('addToCount')
  @Emit("addToCount")
  addToCount(n: number) {
    this.count += n;
    //有return相当于触发this.$emit带有返回值
    return this.count;
  }

  //自定义事件
  @Model("change", { type: Boolean }) readonly checked!: boolean;
  /*
  // 父组件属性v-model传入的值作为子组件props：checked的值，一旦触发$emit("change")事件,父组件传入值也会跟着改变
  // 子组件更改数据，自定义双向绑定
  export default {
    model: {
      prop: 'checked',
      event: 'change',
    },
    props: {
      checked: {
        type: Boolean,
      },
    },
  }
   */
}
</script>

<style lang="less">
#indexPage {
}
</style>