### 静态mock
    1. 设计json数据
    2. 修改webpack-dev-server的配置
       vue.config.js:
            const banners = require("./src/mock/json/banners.json")
            const floors = require("./src/mock/json/floors.json")
            devServer:{
               before(app){
                   //app:express核心对象
                   app.get("/banners",(req,res)=>{res.json({ data: banners,code:200})});
                   app.get("/floors",(req,res)=>{res.json({ data: floors,code:200})})
               }
            }

### 动态mock
    官网:http://mockjs.com/
    安装:npm install mockjs
    使用:在脚手架中执行如下代码:
        import Mock from "mockjs";
        var data = Mock.mock("/test",{
          'name':"@cname",
          "address":"@county",
          "age|1-100":0
        })