# VUE

####  MVVM：

1. M：model（data）
2. V：view
3. VM：viewModel，包含DOM listener 和 Data Bindings（数据监听和数据绑定）

#### data

> Vue中用到的数据定义在data中
>
> data中可以写复杂类型数据
>
> 渲染复杂类型数据时，遵守js的语法即可
>
> ```html
>     <div id="app">
>         姓名：
>         {{ message }}<br />
>         校名：
>         {{ school.name }}<br />
>         校区：
>         {{ campus[0] }},
>         {{ campus[1] }}
>     </div>
>     <script type="text/javascript">
>         var v=new Vue({
>             el:"#app",
>             data:{
>                 message:"cth",
>                 school:{
>                     name:"横山小学",
>                     address:"龙泉村东程"
>                 },
>                 campus:["东海","西海"]
>             }
>         })
>     </script>
> ```

## Vue指令

##### v-cloak

用来解决插值表达式的闪烁问题

##### v-text

```html
<script type="text/javascript">
    [v-cloak]{
        dispalay:none;
    }
</script>
```



> 设置标签文本内容

```html
		<div id="app">
			<p v-text="message01"></p>
			<p v-text="message02 + '字符串拼接'"></p>
			<p>{{message03}}你好</p>
			<p>{{message03 + '字符串拼接' }}你好</p>
		</div>
		<script type="text/javascript">
			var v=new Vue({
				el:"#app",
				data:{
					message01:"cth",
					message02:"cht",
					message03:"wht"
				}
			})
		</script>
```

##### v-html

> 设置标签的innerHTML

```html
<div id="app">
    <p v-HTML="message01"></p>

</div>
<script type="text/javascript">
    var v=new Vue({
        el:"#app",
        data:{
            message01:"<a href='https://www.baidu.com/' target='_blank'>百度一下</a>"
        }
    })
</script>
```

##### v-show

> v-show(**布尔值**)，用真假值来判定是否显示，它实际上是操纵了display：none/block，元素只是隐藏了，并不是消失了，而if-else是元素消失了

```html
		<div id="app">
			<button @click="isShow">点击切换图片状态</button>
			<img v-show="ok" src="img/1.png" >
		</div>
		<script type="text/javascript">
			var v = new Vue({
				el:"#app",
				data:{
					ok:"true",
				},
				methods:{
					isShow:function(){
						this.ok=!this.ok;
					}
				}
			})
		</script>
```



### 事件绑定

##### v-on

> 为元素绑定事件
>
> 事件名不需要写on
>
> **指令可以简写为@**
>
> 绑定的方法定义在**methods**属性中

```html
		<div id="app">
			<input type="button" value="v-on指令" v-on:click="doIt" />
			<input type="button" value="v-on简写" @click="doIt" />
		</div>
		<script type="text/javascript">
			var v=new Vue({
				el:"#app",
				methods:{
					doIt:function(){
						alert("v-on事件绑定指令");
					}
				}
			})
		</script>
```

> 传递自定义参数，事件修饰符
>
> 文档：[文档传送门](https://cn.vuejs.org/v2/api/#v-on)

**事件修饰符**

> 事件绑定写成函数调用的形式，可以传入自定义参数
>
> 事件后面跟上 ”. 修饰符“，可以对事件进行限制，其中“.enter”可以限制触发的按键为回车

```html
		<div id="app">
			<input type="text" @keyup.enter="tan('老铁','666')">
		</div>
		<script type="text/javascript">
			var v=new Vue({
				el:"#app",
				methods:{
					tan:function(x,y){
						alert(x+","+y);
					}
				}
			})
		</script>
```

**练习：计数器**

> 描述：
>
> > 点击加减号，数字随之发生增减，最大值10，最小值1

```html
		<div id="app">
			<button @click="prev">-</button>
			<span>{{ num }}</span>
			<button @click="next">+</button>
		</div>
		<script type="text/javascript">
			var v=new Vue({
				el:"#app",
				data:{
					num:"1"
				},
				methods:{
					prev:function(){
						if(this.num<=1)
						{
							alert("已经是最小值");
						}else
						this.num--;
					},
					next:function(){
						if(this.num>=10)
						{
							alert("已经是最大值");
						}else
						this.num++;
					}
				}
			})
		</script>
```

### 元素属性绑定

#####  v-bind

> 为元素绑定属性，比如：src、title、class等
> 标准写法：v-bind:属性名
> **简写：:属性名**

```html
		<div id="app">
			<img v-bind:src="img" ><br>//标准写法
			<img :src="img" />//简写
		</div>
		<script type="text/javascript">
			var v=new Vue({
				el:"#app",
				data:{
					img:"http://img.taopic.com/uploads/allimg/111224/8119-1112240S32038.jpg",
				}
			})
		</script>
//第二种
		<div id="app">
			<img :src="img" :class="isActive?'active':''" @click="cut"/>
			<img :src="img" :class="{active:isActive}" @click="cut"/>
		</div>
		<script type="text/javascript">
			var v=new Vue({
				el:"#app",
				data:{
					isActive:true,
					img:"http://img.taopic.com/uploads/allimg/111224/8119-1112240S32038.jpg",
				},
				methods:{
					cut:function(){
						this.isActive=!this.isActive;
					}
				}
			})
		</script>
```

### 逻辑判断

##### v-if

> v-if(**布尔值**)，用真假值来判定是否显示，它实际上是操纵了**DOM的增删**，操纵 DOM树，比较耗性能

```html
		<div id="app">
			<button @click="isShow">点击改变文本状态</button>
			<p v-if="ok">VUE简单了解</p>
		</div>
		<script type="text/javascript">
			var v = new Vue({
				el:"#app",
				data:{
					ok:"true",
				},
				methods:{
					isShow:function(){
						this.ok=!this.ok;
					}
				}
			})
		</script>
```

##### v-for

> 根据数据生成列表结构
>
> 基础语法：（item，index ）in 数组名
>
> 数组长度更新会同步到页面上，是响应式的

```html
		<ul id="app">
			<button type="button" @click="add">添加</button>
			<button type="button" @click="remove">减少</button>
			<li v-for="(item,index) in arr" :key="index" :title="item">{{index+1}}={{item}}</li>
		</ul>
		<script type="text/javascript">
			var v=new Vue({
				el:"#app",
				data:{
					arr:["地虎","炎龙","黑犀","风鹰","雪獒"]
				},
				methods:{
					add:function(){
						this.arr.push("未知");
					},
					remove:function(){
						this.arr.shift();
					}
				}
			})
		</script>
```

##### 解构赋值

```html
<script type="text/javascript">
    new Vue({
        el: "#test",
        data: {
            searchName: "",
            persons: [
                	  {name: 'Tom', age: 18},
                      {name: 'Jack',age: 16},
                      {name: 'Bob',age: 19},
                      {name: 'Rose',age: 17},
                     ],
        },
        computed: {
            filterPersons() {
                //取出相关的数据
                const {searchName, persons} = this //结构赋值，
                return |
            }
            })
        })
</script>
```



### 数据双向绑定

##### v-model

你可以用**v-model**指令在表单<input>、<textarea>及<select>元索上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但**v-model**本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。
注意: **v-model**会忽略所有表单元素的**value,checked、selected** 特性的初始值而总是将Vue实例的数据作为数据来源。你应该通过**JavaScript**在组件的data选项中声明初始值!

```html
		<div id="app">
			<h2>{{message}}</h2>
			<input type="text" v-model="message">
		</div>
		<script type="text/javascript">
			var v=new Vue({
				el:"#app",
				data:{
					message:"老铁，666"
				}
			})
		</script>
```

## 尚硅谷

#### 生命周期

1. 初始化
2. 更新
3. 死亡

匿名函数直接使用=>函数，这样里面的this指向外层this

1. beforeCreate：再创建vue后立即调用
2. created：挂载前调用，
3. beforeMount：挂载替换挂载前调用
4. mounted：

#### 基于脚手架编写项目

##### 1、配置目录解说

[视频](https://www.bilibili.com/video/BV1Wp411d7Ur?p=19&spm_id_from=pageDriver)

1. 模板里必须要有根标签
2. settings里去掉eslint、jslint、jshint里的Enable勾选
3. 组件里data必须写函数

##### 引入组件步骤

1. import导入文件
2. components映射组件标签
3. 使用组件标签

### 组件通信

#### 子传父

##### $emit触发事件

```js
//子组件调用，get是触发事件，事件名自定义的，data是传过去的数据，
function test(){
	this.$emit('get',data)    
}
```

```vue
//父组件
<template>
  <div>
 	<pending-approve @get="pagination " v-if="key==1"></pending-approve>//使用子组件模板，声明自定义$emit需要的事件名：get,必须有@来声明，pagination是父组件方法
  </div>
</template>
<script>
export default {
    methods: {
      pagination(data){//data是子组件传来的值
      this.listLoading = false;
      const { pageNum, pageSize, total, list } = data;
      this.listQuery.pageNum = pageNum;
      this.listQuery.pageSize = pageSize || 10;
      this.listQuery.page = pageNum;
      this.listQuery.rows = pageSize;
      this.listTotal = total || 0;
      this.list = list || [];
    }
},
</script>
```

##### $on与$emit

该方法不常用

```
//父组件
<child ref="test"/>
mounted(){
	this.$ref.test.$on("todo",()=>{
		//绑定监听事件名，调用回调函数
	})
}
```

```vue
//子组件
methods:{
	handle(){
		$emit("todo")	
	}
}
```

####  父传子

##### props

父组件的属性值传入子组件

```vue
//父组件
<template>
  <div>
    父组件:
    <input type="text" v-model="name">
    <br>
    <br>
    <!-- 引入子组件 -->
    <child :inputName="name"></child>
  </div>
</template>
<script>
  import child from './child'
  export default {
    components: {
      child
    },
    data () {
      return {
        name: ''
      }
    }
  }
</script>
```

```vue
//子组件
<template>
  <div>
    子组件:
    <span>{{inputName}}</span>
  </div>
</template>
<script>
  export default {
    // 接受父组件的值
    props: {
      inputName: String,//类型：Array,Boolean,Number,String,Object,Date,Function 
      required: true
    }
  }
</script>
```

[推荐博客](https://blog.csdn.net/lander_xiong/article/details/79018737)

##### props路由传值

首先我们要在需要获取参数：id 的页面这样写

```js
props:{
    id:{
    type:Number
    }
},
```

然后我们需要再路由注册中这样写

```vue
{
    path: 'complaint',
    name: 'workorder-complaint',
    component: () => import(/* webpackChunkName: "page/personals" */'../views/workorder/components/repair'),
    meta: {
    icon: 'el-icon-document-checked',
    	title: '投诉建议'
    },
//再路由注册中写上props属性，并声明id
    props:{
    	id:2
    }
}
```

#### 消息订阅与发布

```js
//第一步引入
import PubSub from 'pubsub-js'
//第二步,订阅消息
PubSub.subscribe('msgname',(msg,index)=>{//第一个参数：msg没什么用，但是必须要写，他就相当于msgname，第二个是接收的参数
    this.receive(index)
})
```

```js
//另外一个组件
//第一步引入
import PubSub from 'pubsub-js'
//第二步，发布消息
PubSub.publish('msgname',index)
```

#### slot通信

此方式用于父组件向子组件传递`标签数据`

```js
//父组件，写模板和方法，将写好的模板，插入子组件，
<input type='text' slot='checkAll'/>//通过slot属性赋值来达到插槽标记目的
```

```js
//子组件，引入父组件插槽，使用name属性获取对应的插槽
<slot name='checkAll'/>
```

#### .sync修饰符

vue中我们经常会用v-bind(缩写为:)给子组件传入参数。
或者我们会给子组件传入一个函数，子组件通过调用传入的函数来改变父组件的状态。

```vue
//父组件给子组件传入一个函数
 <MyFooter :age="age" @setAge="(res)=> age = res">
 </MyFooter>
 //子组件通过调用这个函数来实现修改父组件的状态。
 mounted () {
      console.log(this.$emit('setAge',1234567));
 }
```

这时子组件触发了父组件的修改函数使父组件的age修改成了1234567

这种情况比较常见切写法比较复杂。于是我们引出今天的主角 .sync

这时我们可以直接这样写

```vue
//父组件将age传给子组件并使用.sync修饰符。
<MyFooter :age.sync="age">
</MyFooter>
//子组件触发事件
 mounted () {
    console.log(this.$emit('update:age',1234567));
 }
```

这里注意我们的事件名称被换成了update:age
update：是被固定的也就是vue为我们约定好的名称部分
age是我们要修改的状态的名称，是我们手动配置的，与传入的状态名字对应起来

这样就完成了，是不是感觉简单了很多。

注意事项：
这里我们必须在事件执行名称前加上update：的前缀才能正确触发事件。



#### 非父子传值

##### 事件总线

1. 创建一个`bus.js`文件

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

### 

### 每日知识点回顾

1. v-bind:src：强制数据绑定，简化：:src
2. v-on:click=一个回调函数：绑定事件监听，简化：@click

##### 总结

1. vue中的methods是用来加载方法的，
2. vue中可以用VM直接调用JavaScript方法
3. vue中双引号下的是变量，加上单引号才是常量
4. computed是用来计算属性值的，被**computed**包裹的变量，不可再次使用**data**进行声明
5. computed内get、set方法，分别在对应内容发生改变时调用，和在自身内容发生改变时调用。并更新相关数据
6. 监听：watch，使用回调函数，包含了两个参数，一个newVal，一个oldVal

## 温故而知新

### vue结构

MVVM：

1. M：model（data）
2. V：view
3. VM：viewModel，包含DOM listener 和 Data Bindings（数据监听和数据绑定）

#### 监听与数据绑定

1. 绑定监听：

```js
<input @val="jianting"/>
```

2. 绑定数据：

```js
<input :val="click"/>
```

#### computed

在初始化/相关data属性数据发生改变的时候执行

1. 计算属性存在缓存，多次读取只执行一次getter计算
2. 计算属性有get/set回调函数，分别对应getter与setter

#### 监视：watch

#### style与class

1. 理解
   在应用界面中，某个(些)元素的样式是变化的
   class/style绑定就是专门用来实现动态样式效果的技术

2. class绑定: :class= 'xxx'
   xxx是字符串
   xxx是对象
   xxx是数组
3. style绑定
   :styLe="{ color: activeColor, fontSize: fontSize + 'px' }"
   其中activeColor/fontSize是data属性

##### style绑定

```html
<p :style="{color:active,fontSize:fontSize+'px'}"
```

##### class绑定

```html
<p :class="{aClass:true,bClass:false}">
    xxx是对象，false的则不能显示类名
</p>
```

#### 遍历for

##### 遍历数组

```html
<li v-for="(p,index) in persons" :key="index">

</li>
```

##### 遍历对象

```html
<li v-for="(value,key) in persons[1]" :key="value">
value:代表键值，key代表键名
</li>
```

```js
let a=[1,2,3,4,5]
//过滤，
let b = a.filter(k=>{
    return k>3
})
console.log("b="+b)
//array.map(),类似于for循环，但是他不会被打断，除非程序出错
a.map(k=>{
    console.log(k)
})
```

#### 事件处理

##### $event绑定监听

```html
//不传参时，默认将信息以$event传递
<button @click='test()'>
    test获取文本
</button>
//传参时，则需要显式声明
<button @click='test2(123,$event)'>
    test获取文本
</button>
```

```vue
data:{
	test(event){
		alert(event)//test获取文本
	},
	test2(num,event){
		alert(num+""+event)//123 test获取文本
	}
}
```

##### 事件修饰符

1. 停止事件冒泡：@click.stop
2. 阻止事件默认行为：@click.prevent
3. 按键修饰符：@keyup

#### 生命周期

生命周期函数也叫钩子函数

#### 指令

```html
[v-cloak]{
	display: none;//指令属性，在模板加载完后会消失
}
<p v-cloak>
    {{msg}}
</p>
```

#### 控制static文件夹

在static文件夹下创建一个：.gitkeep文件即可

#### 打包发布项目

1. 执行：npm run build，进行项目打包
2. 使用静态服务器工具包
   1. npm install -g serve
   2. serve dist
   3. 访问：http://localhost:5000

#### 向localStorage中存取值

```vue
JSON.parse(window.localStorage.getItem("todo_key" || '[]'))
watch:{
	todo:{
		deep:true,
		handler:function(){
			window.localStorage.setItem('todo_key',JSON.stringify(value))//存的是json格式字符串
		}
	}
}
```

#### 消息订阅与发布

```js
//第一步引入
import PubSub from 'pubsub-js'
//第二步,订阅消息
PubSub.subscribe('msgname',(msg,index)=>{//第一个参数：msg没什么用，但是必须要写，他就相当于msgname，第二个是接收的参数
    this.receive(index)
})
```

```js
//另外一个组件
//第一步引入
import PubSub from 'pubsub-js'
//第二步，发布消息
PubSub.publish('msgname',index)
```

#### slot通信

此方式用于父组件向子组件传递`标签数据`

```js
//父组件，写模板和方法，将写好的模板，插入子组件，
<input type='text' slot='checkAll'/>//通过slot属性赋值来达到插槽标记目的
```

```js
//子组件，引入父组件插槽，使用name属性获取对应的插槽
<slot name='checkAll'/>
```

### Router

路由器管理路由

什么是路由？

答：是一种映射关系，前台路由就是组件，path、component两个进行关系映射

```js
//路由注册：
import router from './router'
new Vue({
    router
})
```

使用路由标签来生成路由连接

```html
<router-link to="/xxx">Go to XXX页面</router-link>
<router-view></router-view>//用来显示当前路由组件界面
```

#### 基本路由

```js
//路由器模块最基本搭建
import Vue from 'vue';//只要使用vue下的插件，就需要引入vue
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  {
    path:'/',
    component:Hello
	},
    {
    path:'/index',
    component:About,
    redirect:'/'
	},                       
});
```

在main.js中的配置对象的属性名都是一些确定的名称，不能随便更改

```js
import routers from './router'
new Vue({
    el:"app",
    router:routers,
    components:'{App}',
    template:'<App/>'
})
```



### vuex

#### actions

actions 用来触发mutations

#### mutations

mutations 用来更新 state 状态数据

#### state

state 用来响应视图数据

#### getters

就是对象的`get`方法，

#### 方法

1. dispatch（actionName，data)：分发调用Actions
2. Actions 调用 Commit 更新 mutations

```vue
//store.vue
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vue)
//状态对象
const state = {

}
//包含多个更新state函数的对象
const actions = {

}
//包含多个对应事件回调函数的对象
const actions = {

}
//包含多个getter计算属性函数的对象
const getters = {

}
export default new Vuex.Store({
	state,//状态对象
	mutations,//包含多个更新state函数的对象
	actions,//包含多个对应事件回调函数的对象
	getters//包含多个getter计算属性函数的对象
})
```

```js
//main.js
import store from './store'

new Vue({
  el:'#app',
  components:{App},
  template:'<App/>',
  store//所有组件对象都多一个属性：$store
})
```

1. 定义路由
2. 注册路由
3. 使用路由



#### 向路由组件传递数据

传递参数分两种

1. params
2. query

```vue
//获取参数
$route.params.id
```

#### vuex todolist

1. 单独创建文件：`index.js`、`mutations.js`、`actions.js`、`getters`、`state.js`

2. 在`index.js`中引入

   ```js
   import Vue from 'vue'
   import Vuex from 'vuex'
   import state from './state'
   import mutations from './mutations'
   import actions from './actions'
   import getters from './getters'
   
   Vue.use(Vuex)
   exoprt default new Vuex.Store({
   	state,
   	mutations,
   	actions,
   	getters
   })
   ```

3. 在`main.js`中引入`store`的`index.js`文件

   ```js
   import store from './store'
   
   new Vue({
       el:'#app',
       render:h=>h(App),
       store
   })
   ```

4. vuex与computed配合使用

   ```js
   import {mapState} from 'vuex'
   
   export default{
       computed:{
           ...mapState(['todos'])//todos可以直接拿出来使用，todos名字要和state.js中的名字保持一致，或者通过：$store.state.todos，同样的效果
       }
   }
   ```

   

### 问题

#### watch、computed、methods的区别

#### export与export default区别

