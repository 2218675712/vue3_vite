<template>
  <div>
    <p>我是子元素</p>
    我接受来的值名字:{{ name }}年龄:{{ age }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Child1",
  props: {
    name: String,
    age: Number,
  },
  // TODO 接下来子传父 相互调用事件 
});
</script>

<style></style>
