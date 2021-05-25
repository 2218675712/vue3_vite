<template>
  <div>
    <p>我是子元素</p>
    <p>我里面有一个值{{ Child1 }}</p>
    我接受来的值名字:{{ name }}年龄:{{ age }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Child1",
  props: {
    name: String,
    age: Number,
  },
  setup(props, context) {
    let Child1 = ref<String>("子组件1");
    context.emit("ChildTOFather", { msg: Child1.value });
    return {
      Child1,
    };
  },
});
</script>

<style></style>
