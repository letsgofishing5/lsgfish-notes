# VUE实战

### 路由

1. 首先要在App.vue中引入路由占位符，他的作用就是相当于页面调度

   ```vue
   <template>
   	<div id="app">
           /*路由占位符*/
           <router-view></router-view>
       </div>
   </template>
   <script>
   	export default{
           name:"app"
       };
       
   </script>
   <style>
   
   </style>
   ```

2. 在router.js写入页面对应的路径

   ```js
   import Vue from 'vue'
   import Router from 'vue-router'
   import Login from './components/Login.vue'//引入login.vue组件
   
   Vue.use(Router)
   
   export default new Router({
       routes:[
           {path:'/',redirect:'/login'}//路由重定向
           {path:'/login',component:Login}//登陆首页
       ]
   })
   ```

   

### 表单验证

1.  :rules="loginRules"//通过:rules来定义规则
2.  <el-form-item prop="mobile">//通过prop来绑定属性，指定规则
3. :rules="[{ required: true, message: '年龄不能为空'}]"，串联第一步

```vue
<el-form
      autocomplete="on"
      :model="loginForm"
      :rules="loginRules"//通过:rules来定义规则
      ref="loginForm"
      label-position="left"
      label-width="0px"
      class="card-box login-form"
    >
    <el-form-item prop="mobile">//通过prop来绑定属性，指定规则
        <span class="svg-container">
          <wscn-icon-svg icon-class="people" />
        </span>
        <el-input
          name="mobile"
          type="text"
          v-model="loginForm.mobile"
          autocomplete="on"
          placeholder="手机号码"
        ></el-input>
      </el-form-item>
```

```vue
loginRules: {
    mobile: [{ required: true, trigger: 'blur', validator: validateMobile }],
    password: [{ required: true, trigger: 'blur', validator: validatePass }],
    msgCode: [{ required: true, trigger: 'blur', validator: validateMsg }],
},
```

