### 处理CSS文件

需要使用 style-loader 和 css-loader

处理静态资源，除了需要loader之外，还需要对应的包

例如：less

```bash
npm i -D less less-loader
```

### 处理图片字体

webpack5 可以使用内置的 type:'asset/resource' 

#### 处理Html中的图片

使用 html-loader

### 性能优化

#### 打包构建速度

1. **HMR**：热模替换
   1. **Js**文件默认不适用**HMR**功能
   2. **html**文件默认不使用**HMR**功能，同时会导致**html**文件不能热更新了。解决方法：修改**entry**入口，将**html**文件引入

#### 优化代码调试

1. 开发环境
   1. 速度快，（eval>inline>cheap）
   2. 调试更友好，（source-map>cheap-module-source-map>cheap-source-map）
2. 生产环境
   1. hidden-source-map：只隐藏源代码，会提示构建后代码错误
   2. nosources-source-map：全部隐藏

### tree shaking

1. 必须是使用了ES6模块化
2. 开启生产环境：production

### 代码分割



## 总结

**loader**是处理各种文件的加载器

html文件对应着html-loader

css文件对应这css-loader

……

### entry

```js
//打包成单文件
entry:'src/index.js'//打包成一个文件
entry:['src/index.js','src/another.js']//将两个文件打包成一个文件
//打包成多文件
entry:{
    index:'src/index.js',
    another:'src/another.js'
}//对应的文件打包到对应的文件里，
```

### output

```js
output:{
    filename:'js/[name].[hash:5].js',//文件名称
    path:resolve(__dirname,'dist'),//输出文件的路径
    publicPath: '/',//静态资源拼接地址的前缀，比如在 img/a.jpg 静态资源前面添加前缀 / ，则为 /img/a.jpg
    chunkFilename: '[name]_chunk.js'//非入口文件chunk的名称，比如import导入的文件
}
```

### module

```js
module:{
    rules:[
        {
            test:/\.js/,
            exclude:/node_modules/,//排除node_modules目录下的js文件
            include: resolve(__dirname,'src'),//只检查src下的js文件
            enforce:'pre',//pre:优先执行，post:延后执行
            loader:'eslint-loader'
        }
    ]
}
```

### resolve

解析模块规则

```js
resolve:{
    alias:{
        '@':resolve(__dirname,"src"),//配置路径别名，src目录路径使用 @ 符号代替
    }，
    //配置省略文件后缀名
    extensions:['.js','json','jsx'],
	//告诉webpack解析模块是去哪个目录
    modules:[resolve(__dirname,'../../node_modules'),'node_modules']
}
```

### devServer

```js
//用于开发环境
devServer:{
    port:1998,//执行服务端口
    hot:true,//开启HMR
    compress:true,//开启gzip压缩
    host:'localhost',//域名
    open:true,//自动打开浏览器
    clientLogLevel:'none',//不要显示启动服务器日志信息
    quite：true,//除了一些基本启动信息以外，其他内容都不显示
    overlay:false,//如果出错，不要全屏提示
    proxy:{//服务器代理，用来解决跨域问题
        '/api':{//devServer服务器接收到/api/**请求，则代理到target路径
            target:'http://localhost:3000',
            pathRewrite:{//路径重写，把/api从访问路径中去掉
                '^/api':''
            }
        }
    }
}
```

### optimization

https://webpack.docschina.org/plugins/split-chunks-plugin/

```js
optimization:{
    splitChunks:{
        chunks:'all',
        minSize:30*1024,//分割的chunk最小为30kb
        maxSize:0,//没有最大限制
        minChunks:1,//要提取的chunk最少被引用一次
        ……
    }
}
```

