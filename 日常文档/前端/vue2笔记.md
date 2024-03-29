### Vue特点

1. 声明式编程
2. 响应式数据
3. 数据双向绑定
   1. 只有data中注册的数据才是响应式的，data中的数据都会转绑给VM实例对象

### 指令

#### 计算属性

```js
computed:{
    //语法糖
    test1(){
      console.log("语法糖，修改test1时，会报错")  
    },
    //严谨语法
	test2:{
		get(){
			console.log("get属性被触发")
		},
		set(){
			console.log("set属性被触发，修改test2时会 触发set方法")
		}
	}
}
```

##### 例子

```html
<div id="app">
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
    <input type="text" v-model="fullName" />
</div>
<script type="text/javascript">
    Vue.config.productionTip = false
    new Vue({
        el: "#app",
        data: {
            firstName:'',
            lastName:''
        },
        computed:{
            fullName:{
                get(){
                    console.log("get方法被触发了")
                    return this.firstName+"-"+this.lastName
                },
                set(val){
                    const arr = val.split("-")
                    this.firstName=arr[0]
                    this.lastName=arr[1]
                }
            }
        }
    })
</script>
```

#### data

data是函数，他返回回来的对象才是真正意义上的数据的存储仓库，是为了让每个组件之间的数据都是独立的，互不影响

### 常用API

#### $el

1. 帮我们指定模板
2. 确定vm对应的挂载节点

`template` 的优先级更高，实例中有`template`，则`el` 的作用就是执行挂载节点

`$mount` 和 `$el` 的作用一致

#### $set

**向响应式对象**中添加一个 property，并确保这个新 property 同样是**响应式**的，且触发**视图更新**。

#### $attrs&$listeners

`$attrs`用于监听父组件作用域下定义在子组件身上（class与style除外）的排除了子组件在props中接收过的属性集合，只要被props声明过，则不会出现在`$attrs`中，通过子组件内部声明： `v-bind="$attrs"`来接收父组件传递过来的属性集合

```vue
//parent
<Children color="red" num=123></Children>
//children 子组件会通过v-bind="$attrs"来获取父组件的color、num属性和属性值
<el-button v-bind="$attrs"></el-button>
```



`$listeners`，用于监听父组件作用域下定义在自己身上的事件，通过子组件内部声明：`v-on="$listeners"`来触发事件来给子组件内部DOM绑定父组件的事件，来出发父组件事件

```vue
//parent 的test函数
<Children @click="test"></Children>
//children 通过v-on="$listeners"从而绑定到子组件DOM中进行触发，子组件触发父组件函数
<el-button v-on="$listeners"></el-button>
```



#### $parent与$children

$parent是父组件，$children是子组件，可以通过这两个来调用父子组件的方法，从而完成组件通信，

而$children需要配合for循环来使用

```js
//parent
this.$children.forEach(item=>{
    if(item.childrenFun){
        item.childrenFun()
    }
})
```

```js
//children
this.$parent.parentFun()
```



### 修饰符

#### event

vue中，在调用函数不传参时，可以通过event来获取事件，如果在调用函数时有多个参数，可以 使用 $event 来传递参数，event来接收

如果时DOM事件，则传递的是DOM对象数据

如果时vue自定义事件，则传递的是数据 

#### .native

原本在组件上使用@定义的是 vue自定义事件；可是当你在后面加上.native后；当前事件会变成dom事件，这个事件会绑定组件对象对应的根标签

### 组件

在vue中，一个组件就是一个 `vue实例`

#### 属性

##### is

is 的作用就是将原本的标签给替换成模板里的标签

```html
<div id="app">
    <p is="v-test">哈哈{{msg}}</p>
</div>
<script type="text/javascript">
    new Vue({
        el:"#app",
        components:{
            "v-test":{
                template:`
<span>我是 is 属性测试</span>
`
            }
        }
    })
</script>
```

#### props

非props属性可以被 继承下来，而props属性不可被继承

`:msg `就是`props`属性，而`test`是非`props`属性，`test`是 会被继承下去的

```vue
<div id="app">
    <v-test :msg="msg" test="test"></v-test>
</div>
<script type="text/javascript">
    new Vue({
        el:"#app",
        components:{
            "v-test":{
                template:`
<span>我是 is 属性测试</span>
`,
                props:["msg"]
            }
        }
    })
</script>
```

### 生命周期

#### created

最早可以对`data、methods`中的数据和方法经行调用

#### beforeMount

已经完成模板解析，还未挂载

#### mounted

挂载模板到`el`上，最早可以操作`dom`的时期

### 组件传值

#### 总线传值

```js
<div id="app">
    <a1></a1>
<a2></a2>
<a3></a3>
</div>
<script type="text/javascript">
    Vue.prototype.$bus = new Vue()
new Vue({
    el:"#app",
    components:{
        "a1":{
            template:`<span @click="click">{{msg}}</span>`,
            data(){
                return {
                    msg:"你好"
                }
            },
            methods:{
                click(){
                    console.log("执行了")
                    this.$bus.$emit("change",this.msg)
                }
            }
        },
        "a2":{
            template:`<span>{{msg}}</span>`,
            data(){
                return {
                    msg:"我是a2"
                }
            },
            mounted(){
                this.$bus.$on("change",item=>{
                    this.msg=item
                })
            }
        }
    }
})
</script>
```

####  组件传值方法小总结

1. props
2. $on、$emit
3. vuex
4. vue-router
5. $parent、$children
6. $attrs、$listeners



### 动画

1. 要被`transition`标签包裹

动画中的六个动作，其中`v-leave`是装饰品，没有任何作用

v-enter：从隐藏到显示的第一帧

v-enter-active：定义显示的过渡动画

v-enter-to：显示时的状态

v-leave-active：定义隐藏的过渡动画

v-leave-to：隐藏时的状态

### 过滤器

```js
filter:{
    testFilter(val){
        return "test"
    }
}
```

#### 日期格式化插件

moment，去bootCDN查询

### 指令

```html
<div id="app">
    <input type="text" v-focus>
    <!--当使用了v-focus指令被解析成功，挂载到DOM上时，inserted会被自动执行-->
</div>
<script type="text/javascript">
    // 注册一个全局自定义指令 `v-focus`
    Vue.directive('focus', {
        // 当被绑定的元素插入到 DOM 中时……
        inserted: function (el) {//el是使用了v-focus指令的节点
            // 聚焦元素
            el.focus()
        }
    })
</script>
```



### 插槽

**父组件给子组件传递 HTML 片段**

**子组件给父组件传递 值**

插槽也是用来进行数据传递的，但是插槽传递的是`HTML`片段

组件标签内部的代码是**父组件传递给子组件**的标签

#### 具名插槽

作用域插槽要用`template`包裹着，不然作用域插槽容易解析失败

如果`slot`标签没有给`name`值，则使用`#default`，插槽直接传值通过属性进行传值

```html
<div id="app">
    <t-t>
        <template slot="aa" slot-scope="obj">
            {{obj.a}}
        </template>
        <template v-slot:cc="obj">
            {{obj.c}}
        </template>
        <template #bb="obj">
            {{obj.b}}
        </template>
    </t-t>
</div>
<script type="text/javascript">
    new Vue({
        el: "#app",
        components: {
            "t-t": {
                template: `
<div>
<slot name="bb" b="a from son"></slot>
<slot name="cc" c="c from son"></slot>
<slot name="aa" a="a from son"></slot>
    </div>`
            }
        }
    })
</script>
```

### v-router

#### 嵌套路由

嵌套路由，就是父子路由，子路由只能在父组件中进行展示

```js
{
    path:"/hone",
    component:home,
    children:[
        {
             path:'news',
             component:news
        }
    ]
}
```

#### 动态路由

动态路由就是把某种模式匹配到的所有路由，全部都隐射到同一个组件。例如我们有个 `user` 组件，对于所有 ID  不同的用户，都要使用这个组件来渲染

```js
{
    path:"/user/:id",//这里必须加 : 然后跟上id
    component:user,
}
//第二种写法，这里不同于第一种写法，第二种写法需要加载两个组件，而第一种写法只加载一个组件
{
    path:"/user",
    component:home,
    children:[
        {
             path:':id',//这里必须加 : 然后跟上id
             component:userDetail
        }
    ]
}
```

使用**动态路由**，当我们需要查询路由参数时，需要通过params查询 ，**只有动态路由有params**

```js
this.$route.params[id]
```

动态路由创建方式就两种，一种是一级路由，一种是嵌套路由

#### 动态路由组件复用

动态路由组件复用，所有生命周期钩子都不会得到调用，为了能在动态路由切换时，可以做到响应，可以使用`watch`监听

#### 路由组件传参

布尔值：只能传递params值

对象：传递值固定

函数：功能最强大

```js
{
    path:"/user",
    component:home,
    children:[
        {
             path:':id',//这里必须加 : 然后跟上id
             component:userDetail,
             props:true,//当props为true时，path中的id可以通过props属性接收，只能传递params值
        }
    ]
}
//第二种，对象
{
    path:"/user",
    component:home,
    children:[
        {
             path:':id',//这里必须加 : 然后跟上id
             component:userDetail,
             props:{id:1,name:"张三"},//当props为对象时，组件可以通过props属性接收，但是数据都是死的
        }
    ]
}
//第三种，函数
{
    path:"/user",
    component:home,
    children:[
        {
             path:':id',//这里必须加 : 然后跟上id
             component:userDetail,
             props:(route)=>{//这里参数名固定，route
             	id:route.params.id,
                name:route.query.name
             },//当props为函数时，组件可以通过props属性接收动态数据，
    ]
}
```

动态路由时，使用`$route.params`接收参数

```js
$router.push({
    path:'/user',
    query:{
        name:"张三"
    }
})
$router.push({
    name:'user',
    params:{
        name:"张三"
    }
})
```



#### 路由跳转

##### 声明式跳转

```vue
<router-link to="address"></router-link>
```

##### 编程式跳转

```vue
通过$router.push()跳转
```

#### 路由器&路由配置

#####  概念

**前端路由**

1. 不需要发送请求给服务器，请求路由核心库
2. 相应路由：vue-router

**后端路由**

1. 需要发送请求至服务器
2. 相应路由：服务器端

##### 路由配置

```
routes:注册路由
mode:
	类型：string
	默认值："hash"
	可选值："hasn"|"history"
	配置路由模式:
		hash: 使用URL hash值来作为路由。支持所有浏览器，包括不支持HTML5 History API
		history:依赖HTML5 History API 和服务器配置。
linkActiveClass:"linkActiveClass",//模糊匹配添加类名
linkExactActiveClass:"linkExactActiveClass"//精确匹配添加类名
```

在使用router-lint标签时，不管是hash模式还是history模式，都不会刷新页面

###### hash模式

不会刷新页面，因为#后面的内容变化，浏览器捕捉不到，所以不会发生http请求；所有很多数据都到不了后台

###### history模式

会刷新页面，但是在使用**router-lint**标签时，不管是hash模式还是history模式，都不会刷新页面

##### 路由传参

1. params
   1. 注册路由的时候需要占位符
   2. 示例：/path/:占位符
2. query
   1. 携带多参数
3. meta
   1. 用来描述信息本身的信息
4. props

##### 笔试题

$route与$router的区别

1. $route
   1. 路由对象
   2. 包含当前路由下的所有的路由信息
2. $router
   1. 路由器
   2. 包含了路由跳转的方法：push，replace

### axios

#### config配置

```js
url:地址
method:(get,post,delete,patch,put)
data:（请求需要的数据：put、post、patch）
headers:存请求体（一般情况下要满足http协议的规范）
```

请求配置可写在

- 发送请求时

  ```js
  axios({
      url,
      method
  })
  ```

- 创建实例

  ```js
  const axios  = axios.create({
      baseURL,
      headers
  })
  ```

- 全局配置

  ```js
  axios.default.baseURL = ""
  ```

#### 拦截器

```js
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});
```



### vuex

Vuex中的存储状态（state）是响应式的，对应着vue组件的data，

Vuex中传参，如果是 一个参数直接传，如果是多个参数则封装成一个对象传递

Vuex中的所有操作都是通过`$store`来操作

#### getters

getters 相当于 计算属性

为了代码统一规范，组件上统一使用`action` ，然后在`action`中提交`mutation`

####  辅助函数

1. `store`中的`state`，`getters`数据在组件中应该有一个计算属性与之对应
2. `store`中的`action`与`mutation`在组件中应该有一个方法与之对应

```js
import { mapState,mapGetters,mapActions,mapMutations } from 'vuex'
mapState({})  或 mapState([])
mapGetters({})  或 mapGetters([])
mapActions({})  或 mapActions([])
mapMutations({})  或 mapMutations([])
```

###  数据传递

函数之间数据传递：通过JS属性

页面之间数据传递：一般通过LocalStorage

组件间数据传递：通过vuex，通过props，通过pubsub,通过url 

前后端数据传递：

- 通过URL的query数据
- 通过URL的params数据
- 通过请求体（body）
- 通过请求头（header）

