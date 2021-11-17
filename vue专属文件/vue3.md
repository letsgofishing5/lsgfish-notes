## 全局挂载

```js
const app = createApp(App)
app.config.globalProperties.api = axios//可以通过this.api访问
```

## compositionAPI

### setup

他是选项`api`的起点，他的创建在`vue2`的 `beforeCreate` 前创建，组件创建前执行

### 生命周期函数

取消了createBefore、created生命周期函数



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

