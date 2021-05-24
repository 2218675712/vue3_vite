<template>
  <div>
    <p class="_p">hello</p>
    <button @click="changeNum('-')">-</button>
    <p>计数器:{{ num }}</p>
    <button @click="changeNum('+')">+</button>
    <div>
      {{ books.title }}
      {{ author }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "first_demo",
  setup() {
    // ref 方法的作用时页面打印参数。想要获取需要.value
    let num = ref(0),
      changeNum = (type: String) => {
        if (type === "-") {
          num.value--;
        } else if (type === "+") {
          num.value++;
        }
      };
    // reactive()方法的作用是对象直接在模板当中使用用于对象
    const books = reactive({ title: "Vue实战", author: "尤玉溪" });
    // toRefs()方法的作用是把对象转成响应式的数据,可以用来解构
    const booksData = toRefs(books);
    // TODO 使用Axios发送数据
    return {
      num,
      changeNum,
      books,
      ...booksData,
    };
  },
});
</script>

<style scoped lang="less">
._p {
  color: red;
}
</style>
