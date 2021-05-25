<template>
  <div>
    <div>我是父元素</div>
    我有一个名字叫做{{ data.name }} 我年龄是{{ data.age }}
    <child-1
      :name="data.name"
      :age="data.age"
      @ChildTOFather="ChildTOFather"
    ></child-1>
    <child-2 :msg="child1Data"></child-2>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";

export default defineComponent({
  components: { Child1, Child2 },
  name: "Father",
  setup() {
    let data = reactive({
      name: "小明",
      age: 18,
    });
    let child1Data = ref("");
    function ChildTOFather(data: any) {
      child1Data.value = data.msg;
    }
    return {
      data,
      ChildTOFather,
      child1Data,
    };
  },
});
</script>

<style></style>
