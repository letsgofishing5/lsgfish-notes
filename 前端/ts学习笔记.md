# 初始化

通过全局安装或者局部安装的方式，将Typescript可以用于项目开发

全局安装：

- 安装ts：npm i -g typescript
- 初始化ts配置文件：npx tsc --init

局部安装：

- 初始化一个项目：npm init -y
- 安装ts：npm i -D typescript
- 初始化ts配置文件：tsc --init

## 官方引荐

[tsconfig.json · TypeScript中文网 ](https://www.tslang.cn/docs/handbook/tsconfig-json.html)

### 关于 .d.ts 文件的作用

[typescript 声明文件加载机制以及在不同场景下的正确使用方式 - 知乎](https://zhuanlan.zhihu.com/p/133344957)

很多初学者（比如我）刚开始接触 ts 时，一直分不清 .ts 和 .d.ts 的区别，不知道 .d.ts 存在的意义是什么。刚开始跟着各种教程搭建好了 ts 开发环境，写好了 hello world 时，发现就算没有写 .d.ts 文件，编辑器（这里以及之后的编辑器均指宇宙第一编辑器 vscode ）也可以获得代码提示，甚至就算写的不是 ts 而是 js，只要 import 的依赖关系明确，对于一些简单的函数依然能获得最基本的入参、返回值的形参提示。从而就想知道 .d.ts 文件存在的意义是什么。

其实这个问题稍微思考一下就能知道。假设我们用 ts 开发了一个 npm 库，经过编译打包之后发布到了 npm 上，其他用户下载了我们这个库，下载到他本地的一般是一个 dist/index.js ，package.json 里的 main 指向这个 dist/index.js 文件。这时候不管这个用户开发使用的是 ts 还是 js，当他 import 我们这个库的时候都无法获得代码提示。

**.d.ts 文件主要是 for 第三方库，让第三方库的使用者可以获得良好的代码和接口提示**。本文主要介绍 .d.ts 文件的加载机制以及在**纯 js**开发环境中如何使用 .d.ts 声明文件，获得代码提示和接口声明。



## 配置文件中配置对象

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
        "types": [],                           // 自动引入包含的类型声明文件
        "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

        /* Source Map Options */
        "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
        "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
        "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
        "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

        /* 其他选项 */
        "experimentalDecorators": true,        // 启用装饰器
        "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
    },
    include:[],
    files:[],
    exclude:[],//能级最低，如果指定了 "files"或"include"，则exclude指定也没用
    extends:"",//继承其他配置文件
    compileOnSave:boolean,
}
```





# 类型

### 类型

#### any与unknow的区别

any表示typescript会**关闭类型检查**，

而unknow则需要在使用之前确定其类型，进行验证

### 关键字

#### typeof

K typeof T ：在typescript中，typeof的作用是克隆 T 的类型，包含了 T 的属性类型

```ts
const person = {
    name: "wan",
    age: 28
}

type Person = typeof person // {name: string, age: number}, in javascript it will show "object"

const anotherPerson: Person = {
   name: 'whatever'.
   age: 31
}
```

相关链接：

- [“typeof” Type Queries_51CTO博客_](https://blog.51cto.com/u_15127640/3455896)



#### keyof

可以获取一个对象接口的所有`key`值

```tsx
interface Person {
    name: string
    age: number
}
type p = keyof Person
```



#### infer

使用角度来说，要配合 extends 关键字使用

```tsx
type GetLabelTypeFromObject<T> = T extends ? { label: infer R } ? R : never
//如果 T 传入的类型结构符合 {label: any}，则返回 any，否则返回 never

type Result = GetLabelTypeFromObject<{ label: string }>;
// type Result = string
```

##### 推断类型，与推断值

```tsx
//推断类型
type GetLabelTypeFromObject<T> = T extends ? { label: infer R } ? R : never
//推断值
type First<T extends any[]> = T extends [infer Item, ...any[]] ? Item : never;
//如果数组中存在一个元素，则返回第一个元素值，否则返回 never
```



##### 协变与逆变

协变或逆变与 `infer` 参数位置有关。

在 TypeScript 中，

- 对象、类、数组和**函数的返回值**类型都是协变关系；
- 而**函数的参数**类型是逆变关系，所以 `infer` 位置如果在函数参数上，就会遵循逆变原则

```tsx
//协变 |
type item3 = ArrayElementType<[number, string]>;// string | number

//逆变 &
type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void }
  ? U : never
type T21 = Bar<{ a: (x: string) => void; b: (x: number) => void }>; // string & number
```

##### 总结

1. 只能配合 extends 进行条件运算使用
2. 如果在 函数参数中出现则是逆变&，否则协变|

#### extends

- 继承并扩展类型
- 条件判断
- 分配条件
  - 如果extends前面的参数是一个**泛型类型**，当传入该参数的是**联合类型**，则使用分配律计算最终的结果。分配律是指，将联合类型的联合项拆成单项，分别代入条件类型，然后将每个单项代入得到的结果再联合起来，得到最终的判断结果。

```tsx
//继承并扩展类型
interface Dog {
    eat: () => void
}
interface Cat {
    run: () => void
}
interface Animal extends Dog, Cat {}

//条件判断
type A = Animal extends Dog ? string : number

//分配条件
type P<T> = T extends 'x' ? string : number;
type A3 = P<'x' | 'y'>  // A3的类型是 string | number
```

相关链接：

- https://juejin.cn/post/6998736350841143326#heading-4

