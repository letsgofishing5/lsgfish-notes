## Hello world

```js
const Koa = require('koa')
const app = new Koa()

app.use((ctx) => {
    ctx.body = 'Hello World'
})

app.listen(1998, () => {
    console.log("http://localhost:1998 已启动")
})
```

### 安装

```bash
npm i koa
```

### 路由中间件

```bash
npm i koa-router
```

#### 路由基础使用

```js
const Router = require('koa-router')
const router = new Router()
router.get('/',(ctx)=>{
    ctx.body = '首页'
})
```

#### 路由拆分

```js
//list路由
const Router = require('koa-router')
const list = new Router()
list.get('/',ctx=>{
    ctx.body = '这是list页面'
})
module.exports = list
```



```js
//总路由
const Router = require('koa-router')
const router = new Router()
const list =  require('./list')                        //引入list路由
router.use('/list',list.routes(),list.allowedMethods())//挂载list路由
module.exports = router
```



### MySQL数据库

```js
//db.js
let mysql = require('mysql')
var pool = mysql.createPool({
    host:'localhost',
    port:3306,
    database:'xxx',
    user:'root',
    password:'123456'
})
//对数据库增删改操作
function query(sql,callback){
    pool.getConnection(function(err,connection){
        connection.query(sql,function(err,rows){
            callback(err,rows)
            connection.release()//中断连接
        })
    })
}
module.exports = query
```

#### MySQL基础查询 

```bash
#查询有哪些数据库
show databases;
#查询有哪些表
show tables;
#切换数据库
use database-name;
#创建表格
create table table-name(
	id int primary key auto increment
)
```

### 跨域

```bash
npm i koa2-cors -D
```

```js
const cors = require('koa2-cors')
app.use(cors());//需要写在路由挂载之前
```

### 读取静态资源文件

```bash
npm i koa-static -D
```

```js
const static = require('koa-static')
app.use(static(path.join(__dirname,'./assets')))
```

### 解析post请求数据

```bash
npm i koa-bodyparser
```

```js
const bodyparser = require('koa-bodyparser')
router.use(bodyparser());
router.post('/',(ctx)=>{
	console.log(ctx.request.body)
})
```

### JWT

```bash
#用于生成token
npm i jsonwebtoken
```

```js
const jwt = require('jsonwebtoken')
let token = jwt.sign({account:name,password:pwd},'secret',{expiresIn:3600})//需要转码的内容，加密，有效期：一小时
```

