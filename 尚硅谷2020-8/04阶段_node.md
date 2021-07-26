## node安装

```
//正常显示版本号就可以
node -v
```

#### 配置环境变量

```
//Path变量，添加node的安装目录
```

### 使用

#### 执行JS文件

```
//写完js文件后，直接使用命令
node test.js
```

在 nodejs 环境下，不能使用 BOM 和 DOM ，也没有全局对象 window，全局对象的名字叫 global

#### Buffer 

Buffer 是一个和数组类似的对象，不同是 Buffer 是专门用来保存二进制数据的。

**特点：**

- 大小固定：在创建时就确定了，且无法调整
- 性能较好：直接对计算机的内存进行操作
- 每个元素大小为 1 字节（byte）

#####  创建 Buffer

- 直接创建 `Buffer.alloc()`
- 不安全创建 `Buffer.allocUnsafe()`
- 通过数组和字符串创建 `Buffer.from()`

##### 读取Buffer

- 使用 [] 配合索引

#### 文件读写

```js
const fs = require('fs')
//读文件
fs.readFile()
fs.readFileSync()
//写文件 
fs.writeFile()
fs.writeFileSync()
//追加
fs.appendFile()
fs.appendFileSync()
//拷贝
fs.copyFile()
fs.copyFileSync()
//删除文件、目录
fs.unlink()
fs.unlinkSync()
//文件、目录重命名/移动位置
fs.rename()
fs.renameSync()
//目录操作,
fs.mkdir()//创建目录
fs.readdir()//读取目录内容
fs.rmdir()//删除目录
```

##### 读取文件路径

```js
console.log(__dirname)//绝对文件目录路径
console.log(__filename)//绝对文件名
```

#### 流操作

```js
const rs = fs.createReadStream(绝对路径)//创建读取流
const ws = fs.createWriteStream(绝对路径)//创建写入流
rs.on('data',chunk=>{//监听data事件，获取读取数据 
    console.log(chunk)
})
ws.write('写入内容')
```

##### 管道操作 

```js
rs.pipe(ws)//读取流 直接 流入 写入流 中（实现大文件操作）
```

##### 其他操作

```js
fs.access()//判断文件是否存在
```

#### Http网络协议

##### 端口号

0-1023是公认端口号，而  1024-65535 ，用户可以自己定义这些端口的作用

##### Http协议

http协议也叫 **超文本传输协议**，是一种基于 TCP/IP 的应用层通信协议，这个协议详细规定了浏览器和万维网服务器之间互相通信的规则。

协议主要规定了两方面的内容：

1. 客户端向服务器发送数据，称之为**请求报文**。
2. 服务器向客户端返回数据，称之为**响应报文**。

#### node创建web服务

```js
//导入 http 模块
const http = require('http')
//创建 http 服务
const server = http.createServer((request, response) => {
  //当有人请求这个服务时，函数被调用
  //响应请求
  response.end('hello world')

})
server.listen(1998, () => {
  console.log("1998端口被访问")
})
```

##### 响应内容设置字符集编码

```js
const server = http.createServer((request, response) => {
    //设置字符集编码
    response.setHeader('Content-Type', 'text/html;charset=utf8')
})
```

##### 杀死进程

```cmd
netstat -ano | findstr 8080
找到资源管理器，杀死进程
```

##### 获取请求头和请求行信息

```js
const server = http.createServer((request, response) => {
  //当有人请求这个服务时，函数被调用
  console.log(request.httpVersion)//协议版本
  console.log(request.method)
  console.log(request.url)
  //获取请求头信息
  console.log(request.headers)
})
```

##### 处理url

```js
const urlTool = require('url')
const server = http.createServer((request, response) => {
  let url = urlTool.parse(request.url,true)
  console.log(url)
})
```

##### 处理请求体的数据

```js
const server = http.createServer((request,response)=>{
    let body = ''
    //data事件，接收流
    request.on('data',chunk=>{
        body += chunk
    })
    //end结束事件，
    request.on('end',()=>{
        console.log(body)
    })
})
```

##### 设置响应报文

```js
const server = http.createServer((request,response)=>{
    response.statusCode = 200//状态码
    response.statusMessage = OK//状态信息
    response.setHeader('content-type','text/html;charset=utf8')
})
```

## npm

#### 包的版本号规则

1.0.0

第一位代表大版本更迭，

第二位代表功能增加

第三位表示bug修复次数

每次高位数字变更，低位数字需要清零

#### 初始化package.json

```bash
npm init;  //npm init -y;生成默认的一些信息
```

- 包名不可是中文
- 包名不可大写

生产一个 `package.json` 文件

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

#### 搜索

```bash
npm search 包名
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

### npm常用命令

```bash
npm i 包; npm i 包 --save; npm i 包 -S ：局部安装生产环境
npm i 包 --save-dev; npm i 包 -D ：局部安装开发环境的包
npm uninstall 包 -g : 卸载全局安装包

npm init -y : 生产项目的package.json文件

```

## 模块化

模块化指的就是将一个大的功能拆分为一个一个小的模块，通过不同的模块的组合来实现一个大功能。

1. 在node中一个 js 文件就是一个模块
2. 模块内部代码对于外部来说都是不可见的，可以通过两种方式向外部暴露

#### 创建模块

```js
function test(){
    console.log('test');
}

// 对外暴露数据
module.exports = test;
```

**模块内对外暴露数据注意以下几点：**

1）模块内如果没有暴露数据，引人模块的时候会得到一个空对象。

2）`module.exports` 可以暴露任意数据。

```js
module.exports = true;
module.exports = 5211314;
module.exports = "ilovemingge";
module.exports = function(){
    console.log(123456);
}
```

3）可以使用 `module.exports` 暴露多个数据。

```js
// 1. 直接暴露一个对象
module.exports =  {
    school: "克莱登大学",
      name: "铭哥",
      age: 100
}

//2. 或者，使用 exports.xxx 语法暴露数据
module.exports.isNB = true;
module.exports.msg = 'hahaha';
```

4）`exports` 也可以暴露数据，不过不能使用 `exports = xxx` 的形式。

```js
exports.isNB = true;
exports.msg = "old man";
exports.fn = function(){
    console.log("OK");
}

// 但是不能直接给 exports 赋值，这样是没法导出数据的
exports = "测试";
```

#### 引入模块

使用 require 引入文件即可

```js
var test = require('./test.js');
```

**引入模块需要注意以下几点：**

1）如果没有加文件后缀，会按照以下后缀加载文件：

- `.js` fs 模块同步读取文件编译执行。
- `.json` fs 模块同步读取文件，用 `JSON.parse()` 解析返回结果。
- `.node` 这是 c/c++ 编写的扩展文件，通过 `dlopen()` 方法编译。

2）其他扩展名，文件内容会被当做 JavaScript 代码去解析。

3）如果是文件夹则会默认加载该文件夹下 package.json 文件中 main 属性对应的文件，如果 main 属性对应的文件不存在，则自动找 `index.js` 、 `index.json`。

4）如果是**内置模块**或者是 **npm 安装的模块**，直接使用包名字即可，报名前面无需加 `./` 等路径。

5）npm 引入包时，如果当前文件夹下的 node_modules 没有，则会自动向上上级目录中的 node_modules 查找，一直到根目录。

## HTTP 数据压缩介绍

1）HTTP压缩是指在 Web 服务器和浏览器间传输压缩文本内容的方法。

2）通过开启服务器端的HTTP压缩功能，也可以提高网站的浏览速度，对优化Ext库文件的传输也不失为一种好的方法。只是该方法会提高服务器 CPU 的负荷。如果服务器CPU本身负荷就大，就需要好好地斟酌了。

3）HTTP压缩的原理是服务器接收到客户端的HTTP请求后，检查浏览器是否支持HTTP压缩，如果支持，则根据配置压缩相应的网页文件，压缩文件下载到客户端后，由浏览器解压文件后再浏览。

4）HTTP压缩的比较通用的算法是 GZIP，所以开启服务端的HTTP压缩功能一般是指开启服务器端的GZIP功能。

####  2 HTTP 数据压缩实现流程

1）请求报文中的请求头 Accept-Encoding，会告知服务器客户端支持的压缩方式。

2）响应报文中的响应头 Content-Encoding，会告知客户端响应数据所使用的压缩方式。

####  3. 常用压缩方式及 Node 中的实现

#### 3.1 gzip

gzip 的实现算法是在 deflate 格式上增加了文件头和文件尾，

gzip 是最常用的压缩算法，比较推荐。

```js
const zlib = require('zli');

zlib.gzip(data, (err, d) => {

});
```

#### 3.3 defalte

deflate是同时使用了LZ77算法与哈夫曼编码的一个无损数据压缩算法,deflate压缩与解压的源代码可以在自由,通用的压缩库zlib上找到算法实现。

```js
const zlib = require('zli');

zlib.deflate(data, (err, d) => {

});
```

#### 3.3 br

br 全称 brotliCompress，适合压缩较大的文件。

```js
const zlib = require('zli');

zlib.brotliCompress(data, (err, d) => {

});
```



#### 规范的包结构

必须要有：name，version，main（入口文件），

更多详情：https://yarnpkg.com/zh-Hans/docs/package-json

## Express

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

```js
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use((req,res,next)=>{
	console.log("中间件执行了")
	res.setHeader('Access-Control-Allow-Headers','Content-Type,X-Custom-Header')
	res.setHeader('Access-Control-Allow-Methods','POST,GET,DELETE,HEAD')
	res.setHeader('Access-Control-Allow-origin','*')
	next()
})
app.get('/',(req,res)=>{
	console.log("get请求响应了")
	res.send("响应")
})

app.listen(1998,()=>{
	console.log("服务已启动，http://localhost:1998")
})

app.use((err,req,res,next)=>{
	res.send("404")
})
```

