## 全局挂载

```js
const app = createApp(App)
app.config.globalProperties.api = axios//可以通过this.api访问
```

## compositionAPI

## 父子传值

### 多层嵌套（祖孙关系）

```vue
//父组件
export default {
  provide() {
    return {
      title: "我是title",
    };
  },
};
//子组件
<template>title:{{ title }}</template>
<script>
export default {
  inject: ["title"],
};
</script>
```

