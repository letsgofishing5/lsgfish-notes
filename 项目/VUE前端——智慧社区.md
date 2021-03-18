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

#### element-ui框架的el-dialog弹出框被遮罩层挡住了

问题解决：[推荐博客](https://blog.csdn.net/Mr_JavaScript/article/details/80888681)

解决方法：在el-dialog标签里添加 :modal-append-to-body='false'

出现新问题，当点击退出状态时，选择取消，则dialog再次被遮罩层挡住

解决方法：

```vue
 <el-dialog
        title="多重错误"
        :visible.sync="dialogVisible"
        :modal-append-to-body='false' //添加这个属性同时，添加下方的属性
        :append-to-body="true" //该属性需要设置
    >
```

#### 引入store里的js文件

1. 再main.js中引入store：import store from './store';
2. 再当前使用组件中：this.$store.state.communityId=uuid;引入需要的store中的全局状态

#### mapGetters

#### mutations

#### actions

#### getters

#### input输入框

1. 使用`clearable`属性即可得到一个可清空的输入框，可清空的意思就是在文本框内输入文字后，文本框会出现要给清空图标按钮，点击即可清空

#### $emit触发事件

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

#### props 父值传子

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
      inputName: String,
      required: true
    }
  }
</script>
```

[推荐博客](https://blog.csdn.net/lander_xiong/article/details/79018737)



#### 生命周期函数



## Element UI

#### 点击当前行获取当前行信息

```vue
<template slot-scope="props">
    <el-button type="text" size="default" @click="handleCreateAccess(props.row)">门禁权限</el-button>
    <el-button type="text" size="default" @click="handleCreateEditor(props.row)">编辑</el-button>
    <el-button type="text" size="default" @click="handleCreateDelete(props.row)">删除</el-button>
</template>
```

在需要触发的标签外的父标签，加上：slot-scope="props"

然后给需要触发的标签加上触发事件，带上参数：props.row

完成以上两步，即可。