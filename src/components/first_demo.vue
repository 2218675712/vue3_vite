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
import {
  ComponentInternalInstance,
  defineComponent,
  getCurrentInstance,
  onMounted,
  reactive,
  ref,
  toRefs,
} from "vue";

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
    // 通过 ctx 属性获得当前上下文
    // 直接强制确认
    const {ctx} = getCurrentInstance()!;
    // 2.使用as强转
    // const {ctx} = getCurrentInstance() as ComponentInternalInstance;

    const Login = () => {
      ctx.$http.post('https://www.fastmock.site/mock/2f875ab9c10f3100cc72125a9bf0945a/vue3_vite/login', {
        username: 'admin',
        password: '123456'
      }).then((res: LoginRes) => {
        // typescript自定义类型,会有类型提示
        console.log(res)
      })
    };

    onMounted(() => {
      Login()
    });
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
