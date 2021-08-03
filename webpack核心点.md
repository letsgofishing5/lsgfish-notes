## webpack指南导读

阅读webpack首先阅读他的指南，跟着指南一步一步走

## 安装

```bash
npm init -y
npm install webpack webpack-cli --save-dev
```



## 核心点

#### 入口：entry

```js
module.exports = {
    entry:"入口js文件路径"
}
module.exports = {
    entry:{
        index:"可以指定打包后的js文件名为index.js",
        index02:"可以指定打包后的js文件名为index02.js"
    }
}
```



#### 出口：output

```js
module.exports = {
    output:{
        filename: '[name].bundle.js',//打包后的文件名，[name]可以找到入口文件指定的打包文件名
    	path: path.resolve(__dirname, 'dist'),//打包后的文件路径
    	clean:true//是否在每次打包时清除上次打包的目录
    }
}
```



#### 加载器：loader

#### 插件：plugin

##### HTML输出模板

```js
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: '走我们钓鱼去的webpack练习',
    }),
  ],
}
```



#### 模式：mode

默认是生产模式，会压缩文件

```js
mode:"development"//开发模式，不会压缩文件
```



#### 环境：environment

#### 浏览器兼容：browser

## 笔记点

### 开发工具

#### watch 

观察模式，在package.json的脚本中加入

```json
"script":{
    "watch":"webpack --watch"
}
```

#### webpack-dev-server

webpack-dev-server提供了一个基本的web server，并具有live reloading(实时重新加载) 功能。设置如下：

```bash
npm install --save-dev webpack-dev-server
```

修改配置文件，告知 dev server，从什么位置查找文件：

**webpack.config.js**

```js
module.exports = {
	devServer: {
  	  contentBase: './dist',
  	},
}
```

以上配置告知 `webpack-dev-server`，将 `dist` 目录下的文件 serve 到 `localhost:8080` 下。（译注：serve，将资源作为 server 的可访问文件）

