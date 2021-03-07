### 路由基本环境的搭建
    * 1. 将vue-router 注册为 Vue的插件
        安装vue-router : npm i vue-router
        注册:
           import Vue from "vue";
           import VueRouter from "vue-router"
           Vue.use(VueRouter)
    * 2. 新建路由组件 & 新建路由(路径和路由组件的映射关系)
        const routes = [
            {//路由配置},
            {//路由配置},
            {//路由配置}
        ]
    * 3. 新建路由器
        const router = new VueRouter({
            //路由器配置
        })
    * 4. 将路由注册给路由器
        使用routes这个路由器配置
        const router = new VueRouter({
            //路由器配置
            routes
        })
    * 5. 将路由器注册给Vue
            new Vue({
                router
            })
    * 6. 为路由组件进行占位 & 配置导航组件
        <router-link to=path></router-link> : 配置导航组件
        app组件中的<router-view></router-view>  : 给一级路由进行占位的
        其他组件中的<router-view></router-view>  : 给当前组件对应的子路由进行占位的


### 环境搭建的优化写法
    将路由拆分到 routes 文件夹中
    将路由器拆分到 router文件夹中

### 重定向
    路由配置项redirect:字符串url

### 嵌套路由
     路由配置项children:数组
     path不能以/开头

### 动态路由
    两种注册形式
        1.不结合嵌套路由 : 只需要命中一个组件
            /user 不能命中任何组件
            /user/1 ; /user/2  ...... 命中 user组件
            {
                path:"/user/:id",
                component:user
            }
        2.结合嵌套路由   : 需要命中多个组件
            /user 命中 user组件
            /user/1 ; /user/2  ...... 命中 user组件&userDetail组件
            {
                path:"/user",
                component:user,
                children:[
                    {
                        path:":id",
                        component:userDetail
                    }
                ]
            }
    
    如何获取url上的信息(path params query hash)
        当使用上vue-router后 所有的vue组件都可以访问到一个叫$route的对象 代表的是当前命中的路由
    
        通过$route.path      拿 url的path
        通过$route.params  拿 url的params
        通过$route.query  拿 url的query
        通过$route.hash  拿 url的hash
        template: <div>{{$route.params.id}}</div> : 会让组件和vue-router高度耦合
    
        我们可以通过路由配置props进行解耦
            url: http://localhost:8080/user/1?name=damu#123
            配置
                {
                    path:"/user/:id",
                    component:user,
                    props:({params:{id=0},query:{name="xxx"},hash,path})=>({id,name})
                }
            组件
                props:["id","name"]
                template: <div>{{id}} / {{name}}</div>
    
    动态路由组件会选择复用
        /user/1  --> /user/2 命中的都是user & userDetail组件
        动态路由进行切换时;对应的组件的生命周期函数是不会得到执行的
        我们如何检查动态路由的切换: 使用wacth 深度监听 $route
            watch:{
              $route:{
                deep:true,
                immediate: true,
                handler(val){
                  //val : 最新的$route
                }
              }
            }

### 声明式导航 vs 编程式导航

    声明式导航 : <router-link to=path>信息</router-link>
        使用声明式导航是可以使用到vue-router提供的一些功能的;比如自动加什么样的class
    编程式导航 :
        当使用上vue-router后 所有的vue组件都可以访问到一个叫$router的对象
        代表的是当前路由器
        $router.push(路径字符串)
    
        //使用对象形式时 path和params不能同时使用
        //如果一定要用params 则得结合命名路由
            $router.push({          $router.push({
                path,                   name,
                query                   params,
                                        query,
            })                      })


### 命名式路由
    结合编程式导航来处理path和params不兼容的问题
    配置
       {name,path,component}
    跳转
       $router.push({
            name,
            params,
            query
       })


### path中正则表达式的使用
    /user 命中 user组件
    /user/1 ; /user/2  ...... 命中 user组件
    {
        path:"/user/:id?",
        component:user
    }

### 路由配置
    name:名称字符串,           //命名路由
    path:字符串url,            //路径url
    component:组件对象,        //url对应的路由组件
    redirect:字符串url,        //路由重定向
    children:[                 //子路由的配置
        {继续编程路由配置;但是path不能以/开头},
        .....
    ],
    props:route => ({})       //可以是布尔值,对象,函数(强大)


### 路由器配置
    routes:路由数组
    mode:路由模式
        hash:hash模式(url中会有#)
            不会与静态资源服务器 & 后台路由 产生冲突; #后内容的变换 静态资源服务器和后台服务器是感知不到的
        history:history模式(生产时一定会使用history  url的变换理应让所有服务器都能感知到)
            会与静态资源服务器 & 后台路由 产生冲突
    linkActiveClass(常用的): 对路由的模糊匹配;会自动给声明式导航加class
    linkExactActiveClass: 对路由的精确匹配;会自动给声明式导航加class


### 上线时一定要为所有的404请求配index.html(静态资源服务器;后台接口服务器)
    为了让history路由可以安全匹配

### 路由元信息
### 路由懒加载
### 路由守卫
### 滚动行为


