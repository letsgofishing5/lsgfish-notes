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
    filename:'js/[name].[hash:5].js',
    path:resolve(__dirname,'dist'),
    publicPath: '/',
    chunkFilename: '[name]_chunk.js'
}
```

