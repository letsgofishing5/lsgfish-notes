## 编译选项

1. 自动编译

   ```bash
   tsc xxx.ts -w
   ```

2. 自动编译整个项目

   ```bash
   #使用tsc编译整个项目，前提需要添加tsconfig.json配置文件
   tsc --init #生成配置文件
   ```

3. 配置选项

   1. `include`：用来指定哪些`ts`文件需要被编译
   2. `exclude`：用来指定哪些`ts`文件不需要被编译
   3. extends：定义被继承的配置文件
   4. compilerOptions：编译器的选项

#### tsconfig.json

想要知道配置想中有哪些值可以用，只要输入一个错误的值，编辑器就会有错误提示，可以用哪些值

```json
{
    "include": [
        "./src/**/*"
    ],
    "exclude":[
        "./src/hello/**/*"
    ],
    "extends":"./configs/base",
    "complierOptions":{
        "target":"ES5",//文件编译成ES5的代码
        "module":"es6",//指定使用的模块化类型
        "lib":["dom"],//指定项目中要使用的库
        “outDir:"./dist",//指定编译后的文件所在的目录
        "outFile":"./test",//将代码合并为一个文件，非模块化代码
        "removeComments":true,//是否移除注释
        "noEmit":false,//不生成编译后的文件
        "onEmitOnError":false,//当有错误时，不生成编译后的文件
        "alwaysStrict":false,//用来设置编译后的文件使用严格模式
        "noImplicitAny":true,//不允许隐式的any类型
        "strictNullChecks":false,//严格的检查空值
        "strict":true,//所有严格检查的总开关
    }
}
```

## webpack打包

```bash
#初始化项目
npm init -y
#安装webpack,ts,ts-loader,webpack-cli
npm i -D webpack webpack-cli typescript ts-loader 
# 安装webpack-dev-server
npm i -D webpack-dev-server
# 安装html-webpack-plugin
npm i -D html-webpack-plugin

```

#### babel

```bash
npm i -D @babel/core @babel/preset-env babel-loader core-js
```

## 抽象类

使用`abstract`修饰的类是抽象类

```ts
abstract class Person {
    name: string = "张三李四"
    age: number = 23  
}
//抽象方法，抽象方法在被继承时，必须要被实现
abstract class Person {
    name: string = "张三李四"
    age: number = 23
    abstract say(): string
}
```

## 属性封装



