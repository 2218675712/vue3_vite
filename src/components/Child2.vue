<template>
  <div>
    <p>我是子组件2</p>
    我接受到的值为:{{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Child2",
  props: {
    msg: String,
  },
  setup(props, context) {
    return {};
  },
});
</script>

<style></style>
