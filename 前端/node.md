### npm

#### 包的版本号规则

1.0.0

第一位代表大版本更迭，

第二位代表功能增加

第三位表示bug修复次数

每次高位数字变更，低位数字需要清零

#### 初始化package.json

```
npm init -y
```

注意：上述命令只能在项目文件夹的名称使用英文命名，不要使用中文，不能出现空格

##### dependencies

package.json 文件中，有一个 dependencies 节点，专门用来记录您使用 npm install 命令安装了哪些包

##### DevDependencies

如果某些包只在项目开发阶段会用到，在项目上线后不会用到，则建议把这些包记录到DevDependencies 节点中

```
//简写
npm i 包名 -D
//完整写法
npm install 包名 --save-dev
```

##### 下载指定版本包

下载指定的axios3.3.0版本

```bash
npm i axios@3.3.0
```

#### 解决包下载慢问题

安装淘宝镜像

```
# 查看当前包镜像源
npm config get registry
# 切换淘宝镜像
npm config set registry=https://registry.npm.taobao.org/
# 检查镜像是否安装成功
npm config get registry
```

#### nrm

安装nrm工具，利用nrm提供的终端命令，可以快速查看和切换下包的镜像源

```
# 通过npm 包管理器，将nrm 安装为全局可用的工具
npm i nrm -g
# 查看所有可用的镜像源
nrm ls
# 将下包的镜像源切换为 Taobao 镜像
nrm use taobao
```

#### 包分类

- 项目包（node_modules）
  - 开发依赖包（DevDependencies，开发期间会用到。命令：npm i 包名 -D）
  - 核心依赖包（dependencies，开发和上线期间都会用到。命令：npm i 包名）
- 全局包（执行 npm install 命令时，提供了 -g 参数）

#### 规范的包结构

必须要有：name，version，main（入口文件），

更多详情：https://yarnpkg.com/zh-Hans/docs/package-json

#### 模块加载机制

1. 内置模块与第三方模块同名时，加载的是内置模块
2. 自定义模块加载时，必须以 ./ 或 ../ 开头的路径标识符。如果没有指定 ./ ../ 这样的路径标识符，则node会把他当做内置模块或第三方模块进行加载
3. 在引入自定义模块时，如果省略了文件的扩展名，则 node.js 会按顺序分别尝试加载以下的文件
   1. 按照确切的文件名加载
   2. 补全 .js 扩展名
   3. 补全 .json 扩展名
   4. 补全 .node 扩展名
   5. 加载失败，终端报错

### Express

Express是基于Node.js平台，快速、开放、极简的Web开发框架

通俗的理解：Express 的作用和 Node.js 内置的 http 模块类似，是专门用来创建Web服务器的。

Express的本质：就是一个npm上的第三方包，提供了快速创建的Web服务器的便捷方法

Express的中文官网地址：http://www.expressjs.com.cn/

#### 使用

```
//安装
npm i express
```

```js
//导入
const express = require("express")
//创建web服务
const app = express()
//调用 app.listen(端口号，启动服务成功后的回调函数)，启动服务器
app.listen(80,()=>{
    console.log("服务已启动：http://localhost:8080")
})
```

##### 监听get/post请求

```js
//req:请求对象
//res:响应对象
app.get(url,(req,res)=>{
    console.log("监听get请求")
})
app.post(url,(req,res)=>{
    console.log("监听post请求")
})

//通过res.send("请求成功")，将处理好的内容，响应给客户端
```

##### 获取URL中携带的参数

```js
//req.query，访问客户端查询字符串的形式，发送到服务器的参
//req.query 默认是一个空对象，
//客户端使用 ?name=zs&age=20 这种查询字符串形式，发送到服务器的参数
//可以通过 req.query 对象访问到，例如：
//req.query.name 
app.get('/',(req,res)=>{
    console.log(req.query)
})
```

##### 获取URL中携带的动态参数

```js
//通过req.params对象，可以访问到URL中，通过 : 匹配到的动态参数
app.get('/user/:id',(req,res)=>{
    console.log(req.params)
})
```

##### express.static

```js
//通过如下代码，可以将public目录下的图片、css文件、JavaScript文件对外开放访问
app.use(express.static('public'))
//这样就可以通过以下路径访问public目录中的所有文件了
http://localhost:3000/images/bg.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/login.js
//Express在指定的静态目录中查找文件，并对外提供资源的访问路径，因此，存放静态文件的目录名不会出现在URL中
```

如果需要托管多个静态资源目录，请多次调用express.static() 函数：

```js
app.use(express.static('static'))
app.use(express.static('public'))
```

访问静态资源文件时，express.static() 函数会根据目录的添加顺序查找所需要的文件，比如static和public目录下都有index.html文件，则会优先在static中查找

##### 挂载路径前缀

如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用如下的方式

```js
app.use("/test",express.static('./public'))
//访问public目录下的文件
http://localhost:1998/test/index.html
```

#### nodemon

它是一个工具，能够 监听项目的变动，当代码被修改后，nodemon会自动帮我们重启项目，方便开发和调试

```
npm i nodemon -g
```

##### 使用

```
//启动项目命令
nodemon app.js
//改变项目，保存时，会自动重启项目
```

#### 路由

在Express中，路由指的是客户端的请求与服务器处理函数之间的映射关系

Express  中的路由分成 3 部分，分别是请求的类型，请求的URL地址、处理函数，格式如下

```js
app.METHOD(PATH,HANDLER)//METHOD:请求方式，PATH:请求地址URL，HANDLER:回调函数
```

##### 路由匹配规则

1. 按照定义的先后顺序
2. 请求类型和请求的URL同时匹配成功，才会调用对应的处理函数

##### 注册路由模块

```js
//1.导入路由模块
const userRouter = require('/router/user.js')
//2.使用 app.use()注册路由模块
app.use(userRouter)
```

#### 中间件

当一个请求到达Express的服务器之后，可以连续调用多个中间件，从而对这次请求进行**预处理**

Express中间件，本质上就是一个 **function处理函数**，格式如下:

```js
const express = require('express')
const app = express()
app.get('/user',(req,res,next)=>{
    next()
})
```

注意 ：中间件函数的形参列表中，必须包含next参数。而路由处理函数中之包含req和res

##### next作用

next函数是实现多个中间件连续调用的关键，他表示把流转关系转交到下一个中间件或路由

##### 定义中间件

```js
const mv = function(req,res,next){
    console.log("这是一个简单的中间件函数")
    next()
}
```

##### 注册全局中间件

```js
const express = require('express')
const app = express()
app.listen(80,()=>{
    
})
//中间件函数
const mv = function(req,res,next){
    next()
}
//全局注册中间件
app.use(mv)
```

注意，中间件代码位置要放在**路由前面**，否则不生效

##### 错误级别中间件

```js
const mv = function(err,req,res,next){
    console.log(err)
    res.send(err)
}
app.use(mv)
```

注意，错误中间件代码位置要放在**所有路由后面**，否则不生效

####  内置中间件

##### express.static

快速托管静态资源的内置中间件

##### express.json

解析JSON格式的请求体数据

##### express.urlencoded

解析URL-encoded 格式的请求体数据

##### 接收不同格式数据

1. 接收JSON格式数据

   ```js
   //服务端通过 req.body 来接收JSON格式数据，但是如果 没有注册全局 express.json 中间件，则 req.body 默认值是 undefined
   app.use(express.json())
   ```

2. 接收urlencoded格式数据 

   ```js
   app.use(express.urlencoded({extend:false}))
   ```

   

#### 第三方中间件

##### body-parser

解析请求体中的数据

```bash
npm i body-parser
const parser = require('body-parser')
app.use(parser.urlencoded({extend:false}))
```

####  自定义中间件

1. 定义中间件

2. 监听 req.data 事件

   ```js
   let str = ""
   req.on('data',(chunk)=>{
       str += chunk
   })
   ```

   

3. 监听 req.end 事件

   ```js
   req.on('end'()=>{
       //str中存放的是完整的请求体数据，解析成对象格式
       console.log(str)
   })
   ```

   

4. 使用 querystring 模块解析请求体数据 

   ```js
   const querystring = require('querystring')
   const querystring.parse(str)
   ```

   

5. 将解析出来的数据挂载到 req.body

   ```js
   req.on('end',()=>{
       const body = qs.parse(str)
       req.body = body
       console.log("req.body",req.body)
       next()
   })
   ```

   

6. 将自定义中间件封装为模块

#### 总结Express

1. 创建express服务器

   ```js
   const express = require('express')
   const app = express()
   app.listen(端口,()=>{
       console.log("服务器已启动")
   })
   ```

   

2. 使用app.use()进行注册，自定义

   ```js
   //自定义
   app.use((req,res,next)=>{
       console.log("自定义中间件")
       next()//必须要有，负责数据无法下放共享
   })
   
   //注册
   const err = function(err,req,res,next){
       res.send("404页面")
   }
   app.use(err)
   ```

   

#### 跨域

##### cors中间件

cors是Express的一个第三方中间件。通过安装和配置cors中间件，可以很方便地解决跨域问题。

使用步骤如下三步：

1. ```
   npm install cors //安装中间件
   ```

2. ```
   const cors = require('cors') //导入中间件
   ```

3. ```
   app.use(cors()) //配置中间件，路由调用前
   ```

##### 设置响应头 Access-Control-Allow-Origin

```
Access-Control-Allow-Origin:<origin> | *
```

<origin>：代表具体的地址，如https://www.baidu.com，表示只允许百度请求

*：代表所有网页都可以请求

##### 设置响应头 Access-Control-Allow-Headers

```
//多个响应头之间用英文的逗号分割
res.setHeader(' Access-Control-Allow-Headers','Content-Type,X-Custom-Header')
```

##### 设置响应头 Access-Control-Allow-Methods

默认情况下，CORS 仅支持客户端发起GET、POST、HEAD请求。

如果客户端希望通过PUT、DELETE等方式请求服务器资源，则需要在服务器端，通过Access-Control-Allow-Methods来指明实际请求所允许使用的HTTP方法

```js
//只允许 POST,GET,DELETE,HEAD 请求方法
res.setHeader('Access-Control-Allow-Methods','POST,GET,DELETE,HEAD')

//允许所有的 HTTP 请求方法
res.setHeader('Access-Control-Allow-Methods','*')
```

##### 预检请求

只要符合以下任何一个条件的请求，都需要进行预检请求

1. 请求方式为：GET、POST、HEAD**之外的请求**Method类型
2. 请求头中 包含自定义头部字段
3. 向服务器发送了 application/json 格式的数据

在浏览器与服务器正式通信前，浏览器会发送OPTION请求进行预检，以获得服务器是否真正允许该实际请求，所以这一所次的OPTION请求称为"预检请求"，服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据

#### JWT

安装JWT相关包

```bash
npm i jsonwebtoken express-jwt
```

- jsonwebtoken 用于 生成 JWT 字符串
- express-jwt 用于将 JWT 字符串解析还原成JSON对象

```js
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')
```

###  web服务器

#### 初始化项目

```bash
npm init -y
npm i express
```

```js
const express = require('express')
const app = express()
app.use((req,res,next)=>{
	console.log("中间件执行了")
	next()
})
app.get('/',(req,res)=>{
	console.log("get请求响应了")
})

app.listen(1998,()=>{
	console.log("服务已启动，http://localhost:1998")
})

app.use((err,req,res,next)=>{
	res.send("404")
})
```

#### 配置跨域

```bash
npm i cors
```



```js
const cors = require('cors')
app.use(cors)
```

#### 配置解析表单数据的中间件

```js
app.use(express.urlencoded({extended:false}))
```

