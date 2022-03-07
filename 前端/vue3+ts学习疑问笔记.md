# vue3

## 响应式API

### ref

```vue
<script setup lang="ts">
import {ref,Ref} from 'vue';
//设置返回值类型(方法一、方法二)
const demo = ref<string>("")
const demo2:Ref<string> = ref("")
</script>
```

### watch

```vue
<script setup lang="ts">
    let msg = ref(0)
    watch(msg,(newVal,oldVal)=>{
        console.log("newVal",newVal,"oldVal":oldVal)
    }),
    watch(msg,(newVal,oldVal)=>{
        console.log("newVal",newVal,"oldVal":oldVal)
    },{
        deep:true,//深度监听
        immediate：true,
    })
</script>
```



## tsconfig.ts

#### 配置简单的映射路径

https://www.tslang.cn/docs/handbook/module-resolution.html#path-mapping

```bash
#安装
npm i @types/node -D
```

```ts
//vite.config.ts
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig {
    // ...
    resolve: {
        alias: {
            "@": resolve(__dirname, 'src'), // 路径别名
        },
        extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
    }
    // ...
}
```

```ts
//tsconfig.ts
{
    "compilerOptions""{
    "baseUrl": ".",
    "paths": {
        "@": [
            "src/*"
        ]
    }
}
}
```

## vue3+ts语法问题

#### 使用ref获取DOM，并操作DOM

![image-20220130121917941](vue3+ts学习疑问笔记-img/image-20220130121917941.png)

```ts
//解决方法一
const wrap = <HTMLElement>document.querySelector(".wrap");
//解决方法二
const wrap = document.querySelector(".wrap") as HTMLElement;
```



#### 导入 .ts 类型文件错误

首先去除路径中的 .ts 后缀

然后修改配置文件

```ts
//在tsconfig.ts配置文件中添加如下配置
"baseUrl":".",
"paths":{
    "@/*":[
        "src/*"
    ]
}


  const wrap = <HTMLElement>document.querySelector(".wrap");
  wrap.style.lineHeight = document.documentElement.clientHeight / 2 + "px";
```



#### UI样式穿透

```scss
//vue2是如下写法	
::v-deep input{}
//vue3是如下写法
:deep(input){}
```

## scss

#### 函数

#### 代码重用

@mixin与@include是一对

```scss
@mixin .example{
    color:red;
}
div{
    @include .example;
}
```

mixin强大之处在于指定参数与缺省值

```scss
@mixin .example($val:10px){
    left:$val;
}
div{
    @include .example(10px);
}
```

## pinia使用

https://segmentfault.com/a/1190000041246156

