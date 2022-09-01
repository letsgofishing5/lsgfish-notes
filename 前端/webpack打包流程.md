# webpack打包多页应用流程笔记

### 初始化项目

```bash
# 初始化项目
npm init -y
# 安装webpack及webpack-cli
npm i -D webpack webpack-cli
# 安装html模板编译插件
#https://github.com/jantimon/html-webpack-plugin
npm install -D html-webpack-plugin
# 清空dist
npm install -D clean-webpack-plugin 
# 启用HMR
npm install -D webpack-dev-server
```

### 创建webpack.config.js文件

```js
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

```



## entry 入口

## output 出口

#### 资源分管输出

```js
output:{
    filename:[name][contenthash][ext],//
    clean:true,//清理dist目录
    assetModuleFilename:'image/[contenthash][ext]',//图片输出目录
}
```



## loader 加载器

#### css-loader

```bash
npm i -D css-loader style-loader
```

```js
module;{
    rules:[
        {
            test:/\.css/,
            use:['style-loader','css-loader'],//加载器执行顺序从后往前
        }
    ]
}
```

#### css抽离与压缩

##### 抽离

```bash
npm i -D mini-css-extract-plugin
```

```js
plugins:[
     // css抽离
    new MiniCssExtractPlugin({
      filename: "styles/[contenthash].css",
    }),
],
module:{
    rules:[
        {
            test:/\.css$/,
            use:[MiniCssExtractPlugin.loader,css-loader]
        }
    ]
}
```

##### 压缩

> 首先要安装插件，然后把mode设置为production生产环境

```bash
npm i -D css-minimizer-webpack-plugin
```

```js
optimization:{
    minimizer:[
        new CssMinimizerWebpackPlugin()
    ]
}
```

#### 加载字体

> 使用资源模块进行加载



#### 自定义JSON模块parser

> toml、yaml、json5等文件

```bash
npm i yaml json5 -D
```

```js
module:{
    rules:[
        {
            test:/\.toml$/,
            type:'json',
            parser:{
                parse:toml.parse
            }
        }，
        {
            test:/\.yaml$/,
            type:'json',
            parser:{
                parse:yaml.parse
            }
        }，
        {
            test:/\.json5$/,
            type:'json',
            parser:{
                parse:json5.parse
            }
        }，
    ]
}
```

index.yaml

```yaml
name: 藏三
```

index.js

```js
import yaml from './index.yaml'
consolo.log(yaml.name)//藏三
```







## module

### 资源模块

> 资源模块可以用于加载任何类型的资源文件，包括字体

1. asset/resource
   1. 他会发送一个单独的文件（图片或其他对应的文件）并导出URL（图片地址……）
2. asset/inline
   1. 他会导出一个资源的Data URL（会把图片变成base64保持在代码中）
3. asset/source
   1. 会导出资源的源代码
4. asset
   1. 他会在导出一个Data URL 和 发送一个单独的文件之间自动进行选择

```js
module:{
    rules:[
        {
            test:/\.png$/,
            type:'asset/resource'
        }
    ]
}
```

#### 控制资源文件的输出信息

##### 控制文件输出路径和名称

1. 方式一（优先级较低）

   ```js
   output:{
       assetModuleFilename:'images/[contenthash][ext]',//根据内容hash生成名字后缀保持不变
   }
   ```

2. 方式二（优先级较高）

   ```js
   module:{
       rules:[
           {
               test:/\.png$/,
               type:'asset/resource',
               generator:{
                   filename:'images/[contenthash][ext]'
               }
           }
       ]
   }
   ```


##### 控制文件输出base64还是编译文件

```js
//
module:{
    rules:[
        {
            test:/\.png$/,
            type:'asset',//他会在导出一个Data URL 和 发送一个单独的文件之间自动进行选择
            parser:{
                dataUrlCondition:{
                    maxSize: 1 * 1024 * 1024 //1MB大小，超过1MB输出文件，否则输出base64
                }
            }
        }
    ]
}
```





## plugins插件

### 清空dist目录

```bash
# 清空dist
npm install -D clean-webpack-plugin 
```

```js
plugins: [
    // 清空dist目录
    new CleanWebpackPlugin(),
    
],
```

### html模板自动引入资源

```bash
# 安装html模板编译插件
#https://github.com/jantimon/html-webpack-plugin
npm install -D html-webpack-plugin
```

```js
plugins: [
    // html模板
    new HtmlWebpackPlugin({
        template: "./index.html",
    }),
],
```

### HMR

```bash
# 启用HMR
npm install -D webpack-dev-server
```

```js
// HMR
devServer: {
    compress: true,
        port: 9000,
},
```

## Hooks

> 配置git读取自定义钩子文件

```bash
# git读取当前目录下的cus_hooks文件夹下的钩子文件
git config core.hooksPath ./cus_hooks
# 通过以下命令查看是否添加成功
cd .git
cat config
```





## 零散点

1. 清空dist目录
   1. 在output中设置 clean：true
   2. 使用插件 CleanWebpackPlugin，在插件中寻找
2. 配置sourceMap
   1. 配置： devtool:'inline-source-map'
3. 代码分离
   1. 入口起点
      1. 使用 entry 配置手动地分离代码

         ```js
         entry:{
             index:{
                 import:'./src/index.js',
                 dependOn:'shared'
             },
             another:{
                 import:'./src/another.js',
                 dependOn:'shared'
             },
             shared:'lodash',//lodash是两个入口文件中都引入的文件，可以通过shared达到代码去重的作用
         }
         ```
      
         
      
   2. 防止重复
      1. 使用entry dependencies 或者 SplitChunksPlugin 去重和分离代码
   
         ```js
         optimization:{
             splitChunks:{
                 chunks:all,//将公共代码抽离
             }
         }
         ```
      
         
      
   3. 动态导入
      1. 通过模块的内联函数调用来分离代码

## 总结

处理图片、字体等资源可以使用内置的 asset 资源模块处理

清空dist目录可以通过 output设置，或者插件

## 文章阅读

https://segmentfault.com/a/1190000040392408
