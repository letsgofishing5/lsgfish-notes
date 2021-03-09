# VUE前端——智慧社区

## ES6语法

### 箭头函数

箭头函数中，`this`是静态的，`this`始终指向函数声明时所在作用域下的`this`的值

静态的，你可以理解为只加载一次，不可更改的状态。也就是说箭头函数中的`this`指向，不可更改，就算call或者apply都不可以

```js
//第一种写法
let result=n=>n;
//完整表达式
let result = function(n){
    return n;
}

//第二种写法
let result2 = ()=>n
//完整表达式
let result2 = function(){
    return n;
}

//总结，暂时只想到这两种写法。简单来说就是将原来的一个完整函数表达式给简化了，但是简化过头，初学者可能比较懵，比如我。简化后的表达式，即：参数=>方法体
//如果函数只有一个参数和返回值，那么只需要写：参数=>返回值
//如果函数没有参数或者多个参数，那么需要用小括号代替参数的位置或者用小括号将多个参数囊括起来：()=>返回值
//如果方法体不止只有返回值，那么需要些：参数 => {console.log("test");return n;}
```



## VUE

### vue模板加载

1. 作为模板，我们先要暴露自己，让外界接收

   ```vue
   <template>
   	<div>
   		<p>我是组件HelloWorld</p>
   	</div>
   </template>
   
   <script>
       //export default是固定语法，用来暴露模板
   	export default{
   		name:"HelloWorld",//给模板起个名儿
   	}
   </script>
   
   <style>
   </style>
   ```

2. 引用模板，我们要导入已暴露的模板

   ```vue
   <template>
   	<div>
   		<HelloWorld></HelloWorld>
   	</div>
   </template>
   
   <script>
   	import HelloWorld from "./components/HelloWorld.vue"
   	export default{
   		name:"App",
   		components:{
   			HelloWorld:HelloWorld
   		}
   	}
   </script>
   
   <style>
   </style>
   ```

   