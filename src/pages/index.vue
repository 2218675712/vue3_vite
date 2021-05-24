<template>
  <div class="Index">
    <div>
      <router-link to="/FirstDemo">FirstDemo</router-link>
    </div>
    <div>
      <router-link to="/ComponentsTransfer">ComponentsTransfer</router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "index",
});
</script>

<style></style>
