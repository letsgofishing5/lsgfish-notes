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

### 常用规则语法

#### Object.assign

[推荐博客](https://blog.csdn.net/dwb123456123456/article/details/83316471)

Object.assign方法用来将源对象（source）的所有可枚举属性，复制到目标对象（target）。它至少需要两个对象作为参数，第一个参数是目标对象，后面的参数都是源对象。

```js

let targetObj1 = { a: 1 };
let sourceObj1 = { b: 1 };
let sourceObj11 = { c: 3 };
Object.assign(targetObj1, sourceObj1, sourceObj11);
console.log(targetObj1);//将sourceObj1,sourceObj11都复制到targetObj1
//注：如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性
```

1. 如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性
2. 如果只有一个参数，Object.assign会直接返回该参数。
3.  如果该参数不是对象，则会先转成对象，然后返回。
4. 注意：如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。首先，这些参数都会转成对象，如果无法转成对象，就会跳过。这意味着， 如果undefined和null不在首参数，就不会报错。其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。

#### Object.keys

返回对象的所有属性

```js
传入对象， 返回包含对象可枚举属性和方法的数组
var obj = {'a': 'Beijing', 'b': 'Haidian'};
console.log(Object.keys(obj));   //['a', 'b']
```

#### Object.map()

1. forEach() 方法对数组的每个元素执行一次提供的函数。总是返回undefined
2. map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。返回值是一个新的数组；

```js
var array1 = [1,2,3,4,5];
 
var x = array1.forEach(function(value,index){
 
    console.log(value);   //可遍历到所有数组元素
 
    return value + 10
});
console.log(x);   //undefined    无论怎样，总返回undefined
 
var y = array1.map(function(value,index){
 
    console.log(value);   //可遍历到所有数组元素
 
    return value + 10
});
console.log(y);   //[11, 12, 13, 14, 15]   返回一个新的数组
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

#### $on与$emit

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
      inputName: String,//类型：Array,Boolean,Number,String,Object,Date,Function 
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



#### 加载动画——蒙版

Element提供了两种调用Loading的方法：指令和服务。对于自定义指令`v-loading`，只需要绑定`Boolean`即可。交替状态下，Loading遮罩会插入到绑定元素的子`body`例程中，通过添加修饰符，可以使遮罩插入至DOM中的身体上。

```vue
<template>
  <el-table
    v-loading="loading"//添加该指令
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        loading: true//给定初始值：Boolean类型
      };
    }
  };
</script>
```

#### element-ui表格数据判断是否可选

后台传的参数 1 是普通会员，2 是高级会员
用formatter

```html
<el-table-column
   prop="userType"
   label="会员类型"
   :formatter="userTypeList"
   width="120">
 </el-table-column>
```

在methods里调用

 methods: {
    userTypeList (row) {
      return row.userType==1?'普通会员':'高级会员'
    }
}

#### 获取表单input值

1. v-model 表单输入绑定

> 使用v-model创建双向数据绑定, 用来监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

```vue
<template>
<div>
    <input class="login-input" type="text"  v-model="username" placeholder="请输入账号">
    <input class="login-input" type="password" v-model="password" placeholder="请输入密码">
    <div class="login-button" @click="login" type="submit">登陆</div>
    </div>
</template>
<script>
    export default {
        name: 'Login',
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login() {
                console.log(this.username)
                console.log(this.password)
            }
        }
    }
<script/>
```

2. @input 监听输入框

> 输入框只要输入的值变化了就会触发 input 调用 search 数据实时获取通过 event.currentTarget.value 获取到

```vue
<template>
	  <div class="class">
	    <div>
	      <input type="text" @keyup.enter="search" @input="search($event)"/>
	    </div>
	  </div>
	</template>
	<script>
    export default {
      name: "search",
      data() {
      },
      methods: {
	        search(event){
	          console.log(event.currentTarget.value)
	        }
      	}
    }
   </script>
```

3. ref 获取数据

> 这种方式类似于原生DOM,但是ref获取数据更方便

```vue
<template>
	  <div class="class">
	      <input type="text" ref="getValue" />
	      <button @click="subbmitButton">获取表单数据</button>
	  </div>
	</template>
	<script>
    export default {
      name: "page",
      data() {
      },
      methods: {
	        subbmitButton(){
	          console.log(this.$refs.getValue.value)
	        }
      	}
    }
  </script>
```

#### 修改 label 样式

1.去掉style中的scoped

```VUE
<style scoped>

</style>
```

2.在对应el-form-item的label属性中加入class样式

```VUE
<el-form-item label="用户名" class="item">
    <el-input v-model="ruleForm.username" placeholder="请输入用户名" maxlength="10"></el-input>
</el-form-item>
```

3.查看当前元素对应style的样式名称
如：.el-form-item__label 添加如下样式代码

```VUE
.item .el-form-item__label{
	color: wheat;
}
```

#### 表单验证规则

```VUE
<el-form-item
    label="年龄"
    prop="age"
    :rules="[
        { required: true, message: '年龄不能为空'},
        { type: 'number', message: '年龄必须为数字值'}
    ]" >
    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
</el-form-item>
```

rules 与 ref