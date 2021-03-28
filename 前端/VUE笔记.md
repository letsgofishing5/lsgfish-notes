# VUE

> 网址：[VUE网址](https://vuejs.bootcss.com/guide/)
>
> **MVVM模式**：:MVVM是前端视图层;的分层开发思想，主要是用来将每一个页面分成**M，V，VM**这三种组件。这三个组:件在前端开发中分工协作，分工明确。其中，**VM是MVVM的核心**，是因为VM是M和V之间的一个整体的**调度者**。VM该组件是为M、V进行服务的

#### el:挂载点

> el（element）是用来设置Vue实例挂载（管理 ）的元素

##### Vue实例的作用范围是什么？

> Vue会管理el选项命中的元素及内部的**后代元素**

##### 是否可以使用其他选择器？

> 可以，但是建议使用**id选择器**

##### 是否可以设置其他的DOM元素？

> 可以，但不能使用**HTML**和**BODY**

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
			<li v-for="(item,index) in arr" :title="item">{{index+1}}={{item}}</li>
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

##### 结构赋值

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

#### 自定义事件分发

$emit("自定义事件名","参数")

## 组件

> 将**item**和**label**属性进行绑定，组件再使用**props**绑定**label**属性即可
>
> 这样就可以**自定义标签，进行值的操作**

```html
<div id="app">
    <cth v-for="item in items" v-bind:label="item"></cth> 
</div>
<script type="text/javascript">
    Vue.component("cth",{
        props: ["label"],
        template: "<li>{{label}}</li>"
    })
    var v=new Vue({
        el: "#app",
        data:{
            items: ["java","linux","C"]
        }

    })
</script>
```

#### 单文件组件

##### 安装npm

1. 安装npm，全称为Node Package Manager，是一个基于Node.js的包管理器，也是整个Node.js社区最流行、支持的第三方模块最多的包管理器

2. 由于网络原因 安装 cnpm

   1. npm install -g cnpm --registry=https://registry.npm.taobao.org

3. 安装 vue-cli

   1. cnpm install -g @vue/cli

4. 安装webpack

   1. cnpm install -g webpack
   2. webpack 是 JavaScript 打包器（module bundler）

5. 通过：vue ui 

   可以启动一个图形化界面，

6. 生成一个vue文件，里面有目录：

   1. node_modules
   2. pulic：打包之后，用于生产环境下的一个目录
   3. src：开发的目录
      1. assets
      2. components：整个项目的组件目录
      3. App.vue：项目的入口文件，完成对项目的引入工作
      4. main.js
   4. 一些文件

##### 单文件组件格式

```vue
<template>
模板或者试图区域
</template>

<script>
    脚本区域
</script>

<style>
    样式区域
</style>

```

uni-app+HBuilder

需要了解node知识，终端知识，npm知识



#### 使用HBuilder结合uni-app开发

1. 打开HBuilder，新建项目
2. 选择uni-app，选择默认模板

##### 介绍目录

1. pages：用于存放业务页面文件
   1. index
2. static：用于存放静态资源文件
   1. logo.png
3. App.vue：用来配置整个应用的全局样式以及监听生命周期
4. main.js：Vue初始化入口文件
5. manifest.json：配置应用名称、appid、logo、版本等打包信息
6. pages.json：配置页面路由、导航条、选项卡等页面类信息
7. uni.scss
8. new_file.txt

## 网络通信-axios

> 导入地址：
>
> <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>
>
> <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
>
> then方法中的回调函数会在请求成功时，触发第一个函数，失败触发第二个函数

```javascript
//	axios.get(地址).then(function(response){},function(error){});
//	axios.post(地址,{key:value,key:value}).then(function(response){},function(error){});
	
<div id="app">
    <div>
    	{{info.name}}
    </div>
	<a v-bind:href="info.url">点击跳转百度网页</a>
</div>
<script type="text/javascript">
    var vm = new Vue({
        el: "#app",
        data(){
            return{
                //请求返回的参数，必须和json字符串一样
                info:{
                    name:null,
                    age:null,
                    url:null
                }
            }
        },
        mounted(){//钩子函数链式编程
            axios.get("data.json").then(response=>(this.info=response.data));
        } 
    })
</script>
//json 数据
{
	"url":"http://www.baidu.com",
	"name":"成功",
	"age":"23岁"
}
```

### 计算属性-computed

该属性，会将计算结果缓存起来，

```html
<div id="app">
    <div>
        {{test}}
    </div>
</div>
<script type="text/javascript">
    var vm = new Vue({
        el: "#app",
        computed:{
            test: function(){
                return Date.now();
            }
        }
    })
</script>
```

## 尚硅谷

#### 绑定监听

```html
<ul id="app">
    <button type="button" @click="add(123,$event)">添加</button>
</ul>
<script type="text/javascript">
    var v = new Vue({
        el: "#app",
        data: {
            arr: ["地虎", "炎龙", "黑犀", "风鹰", "雪獒"]
        },
        methods: {
            add(num,event) {//event
                this.arr.push("未知");
                alert(event.target.innerHTML)
            },
            remove: function() {
                this.arr.shift();
            }
        }
    })
</script>
```

#### 阻止事件冒泡

```html
<div @click.stop="click">
    
</div>
```

#### 事件修饰符

[官方文档：]([https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6](https://cn.vuejs.org/v2/guide/events.html#事件修饰符))

#### 表单

##### 提交表单

@submit=”“

##### 阻止事件默认行为

.prevent

#### 生命周期

1. 初始化
2. 更新
3. 死亡

匿名函数直接使用=>函数，这样里面的this指向vm

1. beforeCreate：再创建vue后立即调用
2. created：挂载前调用，
3. beforeMount：挂载替换挂载前调用
4. mounted：

#### 过渡与动画

[官网地址：]([https://cn.vuejs.org/v2/guide/transitions.html#%E6%A6%82%E8%BF%B0](https://cn.vuejs.org/v2/guide/transitions.html#概述))

#### 过滤器

[官方地址：](https://cn.vuejs.org/v2/guide/filters.html)

自定义过滤器：Vue.filter();

#### 自定义指令

##### 注册全局指令

##### 注册局部指令

```html
<div id="app">
    <p v-up-text="msg"></p>
    <p v-lower-text="msg2"></p>
</div>
<script type="text/javascript">
    //全局指令
    Vue.directive("up-text",function(el,binding){
        console.log(el,binding)
        el.textContent=binding.value.toUpperCase()
    })
    new Vue({
        el:"#app",
        data:{
            msg:"I love you~",
            msg2:"I like You~"
        },
        //局部指令，只发生在当前VM中
        directives:{
            "lower-text":function(el,binding){
                console.log(el,binding)
                el.textContent=binding.value.toLowerCase()
            }
        }
    })
</script>
```

#### 插件

##### 制作插件

#### vue-cli

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

#### 组件化编码

1. 拆分
2. 静态页面
3. 动态
   1. 初始化
   2. 交互

#### 组件通信



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
7. 

#### 问题

1.  filter过滤： p => p.name

2. ```html
   add(event) {
       this.arr.push("未知");
       alert(event.target.innerHTML)
   },
   ```

3. 

## 温故而知新

### vue结构

MVVM：

1. M：model（data）
2. V：view
3. VM：viewModel，包含DOM listener 和 Data Bindings（数据监听和数据绑定）

#### 监听与数据绑定

1. 绑定监听：

```js
<input :val="jianting"/>
```

2. 绑定数据：

```js
<input @val="click"/>
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



问题：

1. main.js如何与index.html页面联系在一起的