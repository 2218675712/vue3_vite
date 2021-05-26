<template>
  <div>storeCount:{{ storeCount }}</div>
  <button @click="addStoreCount">点我增加</button>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from "vue";
import store from "../store/index.ts";

export default defineComponent({
  name: "vuexTest",
  setup(props, context) {
    let storeCount = ref(0);

    onMounted(() => {
      storeCount.value = store.state.count;
    });

    const addStoreCount = () => {
      // store.commit("increment");
      store.dispatch("increment");
      storeCount.value = store.state.count;
    };
    return {
      storeCount,
      addStoreCount,
    };
  },
});
</script>

<style></style>
