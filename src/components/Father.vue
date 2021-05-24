<template>
  <div>
    <div>我是父元素</div>
    我有一个名字叫做{{ data.name }} 我年龄是{{ data.age }}
    <child-1 :name="data.name" :age="data.age"></child-1>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Child1 from "./Child1.vue";

export default defineComponent({
  components: { Child1 },
  name: "Father",
  setup() {
    let data = reactive({
      name: "小明",
      age: 18,
    });
    return {
      data,
    };
  },
});
</script>

<style></style>
