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





