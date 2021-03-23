# Webpack

### 概念

1. entry：入口，以哪个文件为入口进行打包
2. output：输出，打包后的资源bundles输出到哪里，以及如何命名
3. loader：处理非JavaScript文件
4. plugins：插件，用于执行范围更广的任务，从打包优化压缩，一直到重新定义环境变量中的变量
5. module：模式，分为开发模式和生产模式

### 使用

#### 安装

执行：npm i webpack webpack-cli -g //全局安装

新建src、build目录。build是打包后的资源

新建index.js，这是webpack入口文件

##### 运行指令

```js
开发环境: webpack ./src/index.js -o ./build/built.js --mode=development
webpack会以./src/index.js 为入口文件开始打包，打包后输出到./build/built.js整体打包环境，是开发环境
生产环境: webpack ./src/index.js -o ./build/built.js --mode=production
webpack会以./src/index.js为入口文件开始打包，打包后输出到./build/built.js整体打包环境，是开发环境
```

##### 结论

1. webpack能处理js /json资源，不能处理css/img等其他资源
2. 生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化~
3. 生产环境比开发环境多一个压缩js代码。

#### 打包样式资源

1. webpack配置文件：webpack.config.js

```js
//resolve用来拼接绝对路径
const {resolve} = require('path')
module.exports={
    entry:'./src/index.js'
    output:{
    filename:'built.js'
    path:resolve(__dirname,'build')//__build代表当前文件的目录绝对路径
    module:{
        rules:[
            //详细loader配置
            {
                //匹配哪些文件，正则表达式
                test:/\.css$/,
                use:[
                    //创建style标签，将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    //将css文件变成commonjs模块加载js中，里面的内容是样式字符串
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        //详细plugins的配置
    ],
    mode:'development'//开发模式
}
}
```

