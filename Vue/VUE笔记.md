### Vue特点

1. 声明式编程
2. 响应式数据
3. 数据双向绑定
   1. 只有data中注册的数据才是响应式的，data中的数据都会转绑给VM实例对象

##  指令

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

### 组件

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

