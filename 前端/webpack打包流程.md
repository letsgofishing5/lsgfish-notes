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

## loader 加载器

## 资源模块

1. asset/resource
   1. 他会发送一个单独的文件并导出URL
2. asset/inline
   1. 他会导出一个资源的Data URL
3. asset/source
   1. 会导出资源的源代码
4. asset
   1. 他会在导出一个Data URL 和 发送一个单独的文件之间自动进行选择



## 插件

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

## 零散点

1. 清空dist目录
   1. 在output中设置 clean：true
   2. 使用插件 CleanWebpackPlugin，在插件中寻找
2. 配置sourceMap
   1. 配置： devtool:'inline-source-map'

## 文章阅读

https://segmentfault.com/a/1190000040392408
