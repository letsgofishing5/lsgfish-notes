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

#### 优化代码运行性能



## 总结

**loader**是处理各种文件的加载器

html文件对应着html-loader

css文件对应这css-loader

……