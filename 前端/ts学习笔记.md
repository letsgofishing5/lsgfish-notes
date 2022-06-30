# ts学习笔记

## 配置文件

tsconfig.json

```json
{
  "compilerOptions": {

    /* 基本选项 */
    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [],                             // 指定要包含在编译中的库文件
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outFile": "./",                       // 将输出文件合并为一个文件
    "outDir": "./",                        // 指定输出目录
    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
    "removeComments": true,                // 删除编译后的所有的注释
    "noEmit": true,                        // 不生成输出文件
    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
    "isolatedModules": true,               // 将每个文件作为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true,                        // 启用所有严格类型检查选项
    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true,              // 启用严格的 null 检查
    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                       // 包含类型声明的文件列表
    "types": [],                           // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true,        // 启用装饰器
    "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
  }
}
```



#### ts热更新

- 方法一：

  > 先要执行**tsc --init**，生成**tsconfig.json**配置文件，之后在根目录下执行**tsc -w**，则会监听根目录下的所有文件。**tsc+文件名称 -w** 在编译的文件后面加上-w ，w的意思就是watch的意思，就是监听，这个是监听一个文件，如果说同时监听多个文件，值需要运行 tsc -w这个命令就行了，我发现tsc -w这个命令是走tsconfig配置文件的，会输出到指定的文件夹位置，tsc+文件名称 -w这个命令会编译到当前文件夹下，不会走配置文件

- 方法二：

  > 第二种就是在终端上进行配置，点击终端，运行任务，选择监视

## 数据类型

### 基础类型

- 布尔类型( boolean) 

- 数字类型(number)

- 字符串类型(string)

- 数组类型(array)

- 元组类型(tuple)

- 枚举类型(enum) 

  ```ts
  enum gender {
      man = 1, //如果没有赋值，则默认为下标值
      woman = 0
  }
  console.log(gender.man);
  ```

  

- 任意类型(any)

- null和undefined 

- void类型

- never类型：是其他类型（包括null 和 undefined）的子类型，代表从不会出现的值

### 函数

同 js 中的函数

#### 可选参数

必须写到参数列表的最后面

```ts
function demo01(name?:string):void{
    console.log("name是可选参数")
}
```

#### 默认参数

必须写到参数列表的最后面

```ts
function demo01(name:string="张三"):void{
    console.log("name：",name)
}
```

#### 剩余参数

```ts
function demo01(name:string,...arg:number[]):void{
    console.log("name：",name,arg)
}
```

#### 重载函数

```ts
function demo01(name: string): void;
function demo01(age: number): void;
function demo01(str: any): any {
    if (typeof str === 'string') {
        console.log("重载方法，执行name参数", str)
    } else if (typeof str === 'number') {
        console.log("重载方法，执行age参数", str)
    }
}
demo01("张胜男")
```

### 接口

接口是一种规范的定义，它定义了行为和动作的规范

通过关键字：`interface`定义接口

#### 属性接口

对json的约束

```ts
function demo01(info:{label:string}):void{
    console.log("参数是一个对象，并且必须要")
}
```

#### 可选属性

```ts
interface Demo(){
    name?:string
    age:number
}
```

#### 函数类型接口

对方法传入的参数 以及 返回值进行约束

```ts
interface demo {
  (name: string, age: number): string
}
var example: demo = function (name: string, age: number): string {
  return name + age
}
example('张三', 234)

```

#### 类类型接口

对类的约束 和 抽象类有点相似

```ts
interface Animal{
    name:string;
    eat(str:string):void;
}
class Dog implements Animal{
    name:string;
    constructor(name:string){
        this.name = name
    }
    eat(){
        console.log(this.name+"类类型接口")
    }
}
const dog = new Dog("小黑")
dog.eat()
```

#### 接口的扩展

```ts
interface Animal {
  eat(): void
}
interface Dog extends Animal {
  work(): void
}
class XiaoDog implements Dog {
  work(): void {
    throw new Error('Method not implemented.')
  }
  eat(): void {
    console.log('小狗吃eat')
  }
}
const xg = new XiaoDog()
xg.eat()
```

### 泛型

泛型就是用来解决 类 接口 方法 的复用性。以及对不特定数据类型的支持

```ts
function demo<T>(value:T):T{
    console.log("泛型，在调用时决定数据类型",value)
    return value
}
demo<string>("张三")
```

## 命名空间

通过`export`暴露模块，用`import`导入模块

```ts
export namespace A{
    export interface demo{
        name:string;
        age:number;
    }
}
//调用命名空间方法

```

## 装饰器

- 装饰器:装饰器是一种特殊类型的声明， 它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。
- 通俗的讲装饰器就是一一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。
- 常见的装饰器有:类装饰器、属性装饰器、方法装饰器、参数装饰器
- 装饰器的写法:普通装饰器(无法传参)、装饰器工厂(可传参)
- 装饰器是过去几年中js最大的成就之一，已是Es7的标准特性之一
