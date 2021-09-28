const Koa = require('koa')//引入koa
const router = require('./router/index')//引入路由
const app = new Koa()//koa实例
app.use(router.routes(),router.allowedMethods())//挂载路由
app.use( async ( ctx ) => {
  ctx.body = 'hello koa2'
})

app.listen(1998,()=>{
  console.log("端口号：1998已启动");
})//监听端口