# VUE前端——智慧社区

## ES6语法

### 箭头函数

箭头函数本身是没有this的，他的this是向外一层的所属this，`this`始终指向函数声明时所在作用域下的`this`的值

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

#### Object

[推荐博客](https://blog.csdn.net/yexudengzhidao/article/details/98517515)

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

返回一个数组，包含对象的所有属性的键名

```js
传入对象， 返回包含对象可枚举属性和方法的数组
var obj = {'a': 'Beijing', 'b': 'Haidian'};
console.log(Object.keys(obj));   //['a', 'b']
```

#### Object.map()

1. forEach() 方法对数组的每个元素执行一次提供的函数。总是返回undefined
2. map() 方法遍历数组并创建一个新数组返回，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。返回值是一个新的数组；

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

##### 判断类型是否是对象

[推荐博客](https://blog.csdn.net/qq_39025670/article/details/110233270)

```js
val?.constructor === Object // true 代表为对象
```



## VUE

#### 使用vue的ui界面构建项目

```js
npm i -g @vue/cli//执行失败，删除目录下的所有vue开头的文件，重新执行该命令
vue -V
vue ui//打开图形化界面
```



#### 导出export、export default和导入import

```js
//向外暴露一个变量
export let a = 1
//引入这个变量
import {a as num} from './test.js'

//向外暴露一个对象
let name='zs'
let age = 23
export {
	name,age
}
//引入这个对象，并使用该对象中的属性
import {age,name} from './test.js'
console.log(name,age)

//export default
//向外暴露一个变量
export default name = 'zs'
//导入
import name from './test.js'

//向外暴露对象
let name='zs'
let age = 23
export default{
	name,age
}
//导入
import obj from './test.js'
let {name,age}=obj
console.log(name,age)
```



#### 混入mixins

个人理解就是定义了一个js文件，用来存放一些重复率高的代码（函数，计算属性等），然后引入这个js文件，通过mixins来达到将引入的这个js文件内部所有信息全部获取，然后调用使用

[推荐博客](https://blog.csdn.net/weixin_43720095/article/details/89659179)

### Vuex

#### 监听路由变化

[推荐博客](https://blog.csdn.net/wandoumm/article/details/80167642)

#### input输入框

1. 使用`clearable`属性即可得到一个可清空的输入框，可清空的意思就是在文本框内输入文字后，文本框会出现要给清空图标按钮，点击即可清空

### 传值

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

#### props路由传值

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



### Vue.js

#### 监听屏幕宽度

```js
data(){
    return {
        screenWidth:null,
    }
}
//（created()的时候不行，因为此时document还没有生成）
mounted() {
    this.screenWidth = document.body.clientWidth;
    window.onresize = () => {
        return (() => {
            this.screenWidth = document.body.clientWidth;
        })();
    };
}
```



### Vuex

#### 问题1

```js
// 存储communities信息
import api from '@/utils/fetch-v2';
import { lget, lset } from '@/utils/browserStorage';

const communities = {
  state: {
    communityId: null, // 社区id
    currentCommunity: null,
    communitys: null
  },
  mutations: {
    SET_COMMUNITY_ID(state, id) {
      state.communityId = id;
      lset('communityId', id);
    },
    SET_CURRENT_COMMUNITY(state, comm) {
      state.currentCommunity = comm;
      lset('currentCommunity', comm);
    },
    SET_COMMUNITYS(state, list) {
      state.communitys = list;
      lset('communitys', list);
    }
  },
  actions: {

    SwitchCommunityID({ commit, rootState }, community) {
      commit('SET_COMMUNITY_ID', community.uuid);
      commit('SET_CURRENT_COMMUNITY', community);
    },

    GetCommunityList({ commit, rootState }, communitys) {
      // 带参进来直接处理
      if (Array.isArray(communitys) && communitys.length) {
        console.log('使用输入数据更新社区列表');
        commit('SET_COMMUNITYS', communitys);
        commit('SET_CURRENT_COMMUNITY', communitys[0]);
        commit('SET_COMMUNITY_ID', communitys[0].uuid);
        return Promise.resolve(communitys);
      }
      console.log('从接口获取社区参数');
      // 没有带参从接口获取
      return new Promise((resolve, reject) => {
        api({
          url: '/community/getCommunityList',
          method: 'get'
        }).then(comm => {
          if (comm.length > 0) {
            commit('SET_COMMUNITYS', comm);
          }
          for (let i = 0; i < comm.length; i++) {
            if (comm[i].currentCommunity) {
              commit('SET_CURRENT_COMMUNITY', comm[i]);
              commit('SET_COMMUNITY_ID', comm[i].uuid);
            }
          }
          resolve(comm);
        }).catch(e => {
          reject(e);
        });
      });
    }
  },
  getters: {
    communityId: state => state.communityId ? state.communityId : null,
    community: state => state.currentCommunity ? state.currentCommunity : null,
    communitys: state => state.communitys ? state.communitys : []
  }
};


export default communities;
```

```vue
import { mapGetters } from 'vuex';
computed:{
	...mapGetters(['communityId']),
},
this.communityId
```



## Element UI

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



#### 表格点击当前行获取当前行信息

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

#### vue+element-ui之表格中如何插入图片链接

```vue
<el-table-column
                 prop="picUrl"
                 label="封面">
    <template slot-scope="scope">//这里的插槽：slot-scope很关键呀
<el-image
          style="width: 100px; height: 100px"
          :src="scope.row.picUrl"></el-image>
    </template>
</el-table-column>
```



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

后台传的参数：1 是普通会员，2 是高级会员
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

```js
userTypeList(row,column){
    console.log("上门时间：",row,column)
    let data = row[column.property]
    if(data!=null)
    {
        return moment(data).format("YYYY-MM-DD hh:mm:ss")
    }
    return ""
},
```



#### 表格日期格式化

通过`:formatter`来操作

```vue
<el-table-column
                 prop="createTime"
                 sortable
                 :formatter="dataFormat"
                 label="创建时间">
</el-table-column>
```

```js
dataFormat(row,column){
    let data = row[column.property]
    if(data!=null)
    {
        return this.formateTime(data,"YYYY-MM-DD hh:mm:ss")
    }
    return ""
},
```



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

#### 自定义表单验证

```js
data() {
    const validateHouseUuids = (rule, value, callback) => {
        if (this.radio==='1') {
            if(value===null){
                callback(new Error('请选择接收对象'));
            } else {
                callback();
            }
        } else {
            callback();
        }
    };
 return {
     rules:{
        houseUuids:[{
            required:true,
            validator:validateHouseUuids
        }]
     }
   }
}
```

#### 清除单个表单验证效果

```js
this.$refs['form'].clearValidate(['houseUuids']);//如果想要清除全部，则不填写clearValidate()括号内容即可
```



#### 设置elementUI中el-select的默认值

```vue
<el-form-item label-width="10px">
    <el-select
               v-model="form.region"
               placeholder="请选择分类维度"
               >
        <el-option
                   label="上海"
                   value="shanghai"
                   ></el-option>
        <el-option
                   label="北京"
                   value="beijing"
                   ></el-option>
    </el-select>
</el-form-item>

//设置model的值，跟option里的value保持一致即可
data(){
	return{
		form:{
			region:'shanghai'
		}
	}
}
```

#### 下拉框

```html
<el-select  v-model="form.orderStatus" placeholder="请选择">
    <el-option
               v-for="item in orderStatusMapKV"
               :key="item.k"//
               :value="item.k"//与v-module进行对应
               :label="item.v"//下拉框显示内容
               >
    </el-option>
</el-select>
```

#### 分页

```vue
<span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"//这里写了什么属性，页面才会展示什么属性页面，否则不会生成页面效果
      :total="400">
    </el-pagination>
```

#### Cascader 级联查询，动态加载

```vue
	<el-cascader
              clearable
              :props="props"//动态加载，props是主要的
              placeholder="请选择房间号"
              v-model="form.housesUuid"
              @change="handleChange"></el-cascader>
        </div>
```

```js
    data(){
        return{
            form: {
                housesUuid: null,
                housesAddress: null,
                uuid: null,
              },
            props: {
                lazy: true,//开启动态加载，并通过lazyload来设置加载数据源的方法
                lazyLoad: this.loadCommunities,//设置方法
                value: 'uuid',
                label: 'name',
            },
            viewHousesUUID1: null,
        }
    },
    computed:{
        viewHousesUUID: {
            get() {
                return this.viewHousesUUID1;
            },
                set(val) {
                    // this.$nextTick(() => {
                    //   let address = [];
                    //   let node = this.$refs.cascader.getCheckedNodes();
                    //   while (true) {
                    //     address.unshift(node.name);
                    //     if (!node || !node.parent) {
                    //       break;
                    //     }
                    //   }
                    //   this.form.housesAddress = address && address.length ? address.join('/') : null;
                    // });
                    this.form.housesUuid = val[val.length - 1];
                    this.viewHousesUUID1 = val;
                },
        },
    },
    methods: {
        loadCommunities(node, resolve) {
            const { root, data } = node || {};
            //level: 0、loaded: true、loading: false、root: true，这是node在页面初次加载时拥有的属性和属性值。
            //这时候root=true，data=undefined
            let uuid;//这是请求参数
            if (root) {
                uuid = this.communityId;
            } else {
                uuid = data.uuid;
            }
            this.api({
                url: '/community/houses/search',
                method: 'get',
                params: {
                    parentUuid: uuid,
                },
            })
                .then((list) => {
                list = list.map((item) => {
                    item.leaf = !item.isHasChild;//item.isHasChild 是返回数据中的对象的属性名，他的值被取反用来判断是否加载子页面，false为加载，true为不加载。leaf 也是 item 下的一个属性名，他是用来判断是否加载子页面
                    return item;
                });
                // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                resolve && resolve(list);
            })
                .catch((e) => console.warn(e));
        },
    }
```

### Excel导入导出

#### 导入

#### 导出



### Upload

[推荐博客](https://blog.csdn.net/weixin_44356485/article/details/94183568)

```vue

<el-upload
   class="upload-demo"
   ref="uploadFile"//可以通过ref来使用element自带方法：clearFiles()删除图片
   :on-change="beforeUpload"
   :action="uploadUrl"
   :headers="myHeader"
   :on-remove="handleRemove"
   :before-remove="beforeRemove"
   :limit="1"
   :auto-upload="false"
   :on-exceed="handleExceed"
>
<el-button size="small" type="primary">选择文件</el-button>
```

```tex
action: 是请求后端接口的路径 （必填的）

header: 是配置请求头的 / 在此处带了token

on-change: 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用

on-remove: 是文件列表中移除文件时执行的

before-remove: 删除文件之前执行的，可以用作提示用户二次确认删除

limit: 是上传文件的个数

auto-upload: 是控制是否自动上传的

on-exceed: 上传文件个数超过限制的时候执行的
```

```js
//删除图片
this.$refs.upload.clearFiles();
```



## 待研究的问题

#### 表单验证，表单清空

