# VUE

> 网址：[VUE网址](https://vuejs.bootcss.com/guide/)
>
> **MVVM模式**：:MVVM是前端视图层;的分层开发思想，主要是用来将每一个页面分成**M，V，VM**这三种组件。这三个组:件在前端开发中分工协作，分工明确。其中，**VM是MVVM的核心**，是因为VM是M和V之间的一个整体的**调度者**。VM该组件是为M、V进行服务的

#### el:挂载点

> el是用来设置Vue实例挂载（管理 ）的元素

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

> v-show(**布尔值**)，用真假值来判定是否显示，它实际上是操纵了display：none/block

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

##### 

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

> 效果图
>
> ![计数器效果图](C:\Users\cth\Pictures\Saved Pictures\A计数器.png)
>
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



