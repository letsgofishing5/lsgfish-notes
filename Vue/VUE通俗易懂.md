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

#### window监听hash路由

```js
//监听 window 的 onhashchange 事件，根据获取到的最新的 hash 值，切换要显示的组件名称
window.onhashchange = function(){
    //通过 localtion.hash 获取最新的 hash值
    console.log(localtion.hash);
    
}
```

#### 基本使用

##### 配置路由规则

```js
//创建路由实例对象
var router = new VueRouter({
    // 是路由规则数组
    routes:[
        //每个路由规则都是一个配置对象，其中至少包含path、component两个属性
        //path：表示当前的路由规则匹配到的 hash 地址
        //component：表示当前路由规则对应要展示的组件
        {path:'/user',component:User}
    ]
})
```

##### 挂载到vue实例对象上

```js
new Vue({
    el:'#app',
    router
})
```

##### 路由重定向

路由重定向指的是：用户访问A页面时，会被强制跳到C地址上，从而展示C组件

```js
var router = new VueRouter({
    {path:'/',redirect:'/user'},
    {path:'/user',component:User}
})
```

##### 嵌套路由

1. 要有子级路由模板
2. 要有子级路由填充位置

##### 动态路由匹配

```js
var router = new VueRouter({
    routes:[
        //动态路径参数，以冒号开头
        {path:'/user/:id',component:User}
    ]
})
```

```js
//路由组件中通过 $route.params获取路由参数
$route.params.id
```

###### 路由组件传递参数

$route与对应路由形成高度耦合，不够灵活，所以可以使用props将组件和路由解耦

**props是布尔值类型，动态参数**

```js
var router = new VueRouter({
    routes:[
        //如果 props 被设置位 true，route.params 将会被设置为组件属性
        {
            path：'/user/:id',
            component:User,
            props:true
        }
    ]
})
```

```js
export default{
    props:[
        id,//使用props接收路由参数
    ]
}
```

**props的值是对象，传递的是静态参数，不可更改**

```js
const router = new VueRouter({
    routes:[
        {
            path:'/user/:id',
            component:User,
            props:{
                uname:'lisi',
                age:23
            }
        }
    ]
})
```

```js
export default{
    props:[
        uname,age//id无法通过props传参
    ]
}
```

**props的值是函数类型，参数是动态和静态都可以**

```js
const router = new VueRouter({
    routes:[
        //如果 props 是一个函数，则这个函数接收 route 对象为自己的形参
        {
            path:'/user/:id',
            component:User,
            props:route => ({
                uname:'zs',
                age:20,
                id:route.params.id
            })
        }
    ]
})
```

```js
export default{
    props:[
        uname,age//id无法通过props传参
    ]
}
```

##### 命名路由的配置规则

为了更加方便的表示路由的路径，可以给路由规则起一个别名，即"命名路由"

```js
const router = new VueRouter({
    routes:[
        path:'/user/:id',
        name:'user',
        component:User
    ]
})
```

```vue
<router-link :to="{name:'user',params:{id:123}}">
	user
</router-link>

router.push({name:'user',params:{id:123}})
```

#### 导航的两种方式

##### 声明式导航

- 通过点击连接实现导航的方式，叫声明式导航，例如 a 链接

##### 编程式导航

- 通过调用Javascript形式的API实现导航的方式，叫做编程式导航，例如：location.href

```js
this.$router.push('hash地址')//前进
this.$router.go(-1)//后退
```

#### 路由守卫

```vue
router.beforeEach((to,from,next)=>{
	console.log(to.path)//输出访问的路由路径
	next()执行路由跳转
})
```

### Vuex

1. Vuex集中管理共享数据，易于开发和后期维护
2. 能够高效地实现组件之间的数据共享，提高开发效率
3. 存储Vuex中的数据都是响应式的，能实时保持数据与页面的同步

```
#安装
npm install vuex -S
```

```js
import Vuex from 'vuex'
Vue.use(Vuex)
```

```js
const store = new Vuex.Store({
    //store 中存放的就是全局共享数据
    state：{count:0}
})

new Vue({
    el:'#app',
    store//挂载到Vue实例中
})
```

#### State

提供唯一的公共数据源

##### 组件中访问State中数据的方式

```js
//第一种方式
this.$store.state.全局数据名称
//第二种方式
import { mapState } from 'vuex'
//通过导入 mapState 函数，将当前组件需要的全局数据，映射为当前组件的computed计算属性
computed:{
    ...mapState(['count'])
}
```

#### Mutation

Mutation 用于变更Store中的数据

1. 只能通过 mutation 变更 Store 数据，不可以直接操作 Store 中的数据
2. 通过这种方式虽然操作起来稍微繁琐了点，但是可以集中监控所有的数据变化

注意：mutation不能执行异步操作

##### 触发Mutation方式

```js
//第一种方式
this.$store.commit('函数名')
//第二种方式
import { mapMutations } from 'vuex'

methods:{
    ...mapMutation(['add','addN'])
    test(){
        this.add()
    }
}
```

##### 调用Mutation传参

```js
this.$store.commit('函数名','参数')
```

#### Action

专门用来处理异步任务，如果通过异步操作变更数据，必须通过Action，不能使用Mutation，但是在Action种还是要触发Mutation的方式间接变更数据

##### 触发Action方式

```js
//第一种方式
this.$store.dispatch('函数名','参数')
//第二种方式
import { mapActions } from 'vuex'
methods:{
    ...mapActions(['addASync','addNASync'])
    test(){
        this.addASync()
    }
}
```

#### Getter

Getter 用于对 Store 中的数据进行加工处理形成新的数据。

Getter不会修改Store中的数据，只是起到一个包装的作用，类似与计算属性。Store中的数据发生变化，Getter的数据也会跟着变化

##### getter的触发方法

```js
//第一种方式
this.$store.getters.名称
//第二种方式
import { mapGetters } from 'vuex'

computed:{
    ...mapGetters(['test'])
}
```

#### 模块化 module

module是Store的一个属性，与Action，State，Getter，Mutation同级别。

用来管理Store的子模块的

```js
const Store = new Vuex.Store({
    module:{
        user:{
            state:{
                token:"123"
            }
        },
        animal:{
            state:{
                token:"456"
            }
        }
    }
})
```

```js
//取值
$store.state.user.token
$store.state.user.state.token
//两种方式都可以
```

##### 模块化中的命名空间

给子模块添加`namespaced:true`

###### 触发子模块方式

```js
//第一种方式
this.$store.dispatch('user/updateToken')//直接调用
//第二种方式
import { mapActions } from 'vuex'
methods:{
    ...mapMutation(['user/updateToken'])
}
//第三种方式
import { createNamespaceHelpers }
const { mapMutation } = createNamespaceHelpers('user')
```



### 配置文件

```js
//.prettierrc
{
    "semi":false,
    "singleQuote":true
}
```

