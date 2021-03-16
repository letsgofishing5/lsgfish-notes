### 使用express

执行：npm i express

```js
const express = require('express')
//创建应用对象
const app = express()
//创建路由规则
app.get('/',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应体
    response.send("Hello world")
})
//监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已启动，8000端口监听中。。。")
})
```

### axios

```js
axios.defaults.baseURL="http://localhost:8080"
axios.get('/',{
    params:{
        id:100,
        age:23
    },
    headers:{
        name:'cth'
    }
})
```

