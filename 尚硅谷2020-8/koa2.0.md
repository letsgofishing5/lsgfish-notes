## 使用

1. 安装并引入

   ```bash
   ```





### node 中包查找机制

通过`node`内置的`module.path`来找目录，找到目录后再找目录中的`package.json`文件，根据`package.json`中的main对应的目录找文件，如果信息错误或者没找到则默认找当前目录下的`index.js`文件，如果也没有，则报错

### 中间件

`koa`中，可以注册多个中间件，但是需要显式调用`next()`

```js
app.use((ctx,next)=>{
    next()
})
```

1. 所有的中间件都要是异步函数

2. 所有的next()都要await

3. 所有的异步逻辑都要封装成promise，而且要被await住 

### 路由

```bash
npm i @koa/router
```



```js
const KoaRouter = require('@koa/router')
const router = new KoaRouter
router.get('/user',(ctx,next)=>{
    ctx.body="hello world"
})
```

#### 客户端携带数据后台有能力 获取

1. 函数之间数据传递：一般通过js属性来解决
2. 页面之间数据传递：一般通过localStorage
3. 组件直接数据传递：通过vuex；props……
4. 前后端数据传递：
   1. 通过url的query数据（get、delete）
   2. 通过url的Params数据（get、delete、post、put、patch）
   3. 通过请求体 body （post、put、patch）
   4. 通过请求头 header （get、delete、post、put、patch）