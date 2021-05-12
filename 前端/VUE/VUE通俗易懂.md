### 安装 vue/cli 

```js
npm i -g @vue/cli//执行失败，删除目录下vue、vue.cmd、vue.ps1三个文件，重新执行该命令
vue -V
vue ui//打开图形化界面
```

### 目录

1. build

   用来配置webpack的基础环境、开发环境、生产环境

2. config

   用来配置全局

3. static

   静态资源目录

#### vue3.0目录

在vue3.0中，少了build、config目录，如果需要对webpack进行配置的话，要手动在根目录新建一个vue.config.js文件，该文件用来配置webpack和全局环境的

### 组件之间的传值

#### 父子传值

父子组件传值需要在父组件中用短横线形式命名，子组件用驼峰命名法

props是单向数据控制

1. props、$emit
2. $parent、$children

#### 非父子传值

##### 事件总线

1. 创建一个`bus.js`文件（只要是一个公共的栈点即可，如一个公共的实例等）

   ```js
   //建立一个公共的js文件，专门用来传递消息
   import Vue from 'vue'
   export default new Vue
   ```

2. 在需要传递和引入消息的组件中引入

   ```js
   import bus from './bus.js'
   ```

3. 在需要传递消息的组件中自定义事件

   ```js
   bus.$emit('props','msg')//$emit用来自定义事件，props是属性名，msg是需要传递的消息
   ```

4. 在需要引入消息的组件中，监听事件

   ```js
   bus.$on('props',(val)=>{//$on用来监听事件
       console.log(val)
   })
   ```

##### $attrs、$listeners

```js
//用来解决多组件之间的传值问题
首先在最外层统一传值，然后在需要接收值的组件A，而这需要在组件A的父组件上绑定：v-bind="$atters"，记住，只能是v-bind，不能是简写。然后在子组件中获取父组件中的值：this.$atters
```

```vue
//APP
<h2 :msg="sendMsg"></h2>

```

```vue
//Parent
<h2 v-bind="$atters">
    
</h2>
```

```vue
//Children
const atters = this.$atters
console.log(atters)
```

#### 组件插槽

##### 具名插槽



### v-router

路由就是用来切换组件的

##### 基本配置

```js
import Vue from 'vue'
import Router from 'vue-router'

VUe.use(Router)
export default new Router({
	routes:[
		{
			path:'/'
			component:()=>import('组件路径')
		}
	]
})
```

```vue
//APP.vue
<template>
	<div id="#app">
        <router-view></router-view>//入口组件中，必须要有这个才可以显示路由切换的组件
    </div>
</template>
```

##### 路由跳转

```vue
//1.链接跳转
<router-link to='/home'>home</router-link>
<router-view></router-view>
//2.编程式跳转
<button @click="to">
    跳转组件
</button>

<script>
	export default{
        data(){
            return {
                
            }
        },
        methods:{
            to(){
                this.$router.push('/home')
            }
        }
    }
</script>
```

##### 动态路由

```js
import Vue from 'vue'
import Router from 'vue-router'

VUe.use(Router)
export default new Router({
	routes:[
		{
			path:'/home/:id',//这里给他绑定一个id，是固定格式
			component:()=>import('组件路径')
		}
	]
})
```

```vue
<template>
	<div>
        {{$route.params.id}}//获取动态路由传递过来的参数
    </div>
</template>
```

##### 嵌套路由

```js
export default new Router{
    routes:[
		{
			path:'/home,
            name:'home'//定义路由的名字
			component:()=>import('组件路径'),
            children:{
            	path:'/son',
            	component:()=>import('组件路径')
        	}
		}
	]
}
```

```vue
fun(){
	this.$router.push({path:'/home/son',query:{id:123}})//query 搭配 path
	this.$router.push({name:'/home/son',query:{id:123}})//params 搭配 name 路由的名字
}
```

##### 路由守卫

```vue
router.beforeEach((to,from,next)=>{
	console.log(to.path)//输出访问的路由路径
	next()执行路由跳转
})
```

### Vuex

用来存储公共数据的仓库

1. **Actions：**可以进行异步操作，`actions`中默认有一个参数`context`，该参数与`store`实例具有相同的方法和属性，因此可以通过`context.commit`提交一个`mutation`，或者通过一个`context.state`和`context.commit`来获取`state`和`getters`
2. **Mutations：**只能进行同步操作，类似于`methods`，`vuex`默认`mutations`中有一个参数：`state`，可以通过这个`state`来获取State中的数据
3. **State：**用来存储公共数据

#### 使用Vuex的数据方式

1. 通过`computed`属性获取数据，`computed`属性可以追踪数据的变化

   ```js
   computed:{
       count(){
           return this.$store.state.count
       }
   }
   ```

   

2. 通过辅助函数获取

   ```js
   //从vuex中引入辅助函数
   import {mapState} from 'vuex'
   
   export default{
        computed:{
           ...mapState(['todos'])//todos可以直接拿出来使用，todos名字要和state.js中的名字保持一致，或者通过：$store.state.todos，同样的效果
       }
   }
   ```

   ```js
   //改变state数据
   methods:{
       add(){
           this.$store.commit('add')//通过commit来触发Mutations中的add方法，从而改变数据
       }
   }
   ```

#### Vuex——getters

```js
//通过getters计算，然后通过获取getters来获取
getters(state){
    state.count++
}
methods:{
    getter(){
        return this.$store.getters.add()
    }
}
```



### Element



## 每日待解决问题

#### vue命令规范

