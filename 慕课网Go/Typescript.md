tsc

tsc，从网上查询的描述：是typescript的脚手架。可以通过tsc命令去完成ts文件编译

### 安装tsc

```bash
#首先全局安装tsc
npm i -g typescript
#查看是否安装成功
tsc
```

### 编译文件

tsc使用大致分两种，一种是直接使用命令行方式编译文件；一种是配合tsconfig.json文件进行文件编译

#### 命令行方式

```bash
#查看tsc的可执行命令都有哪些
tsc -h
COMMON COMMANDS

  tsc
  编译当前文件 (tsconfig.json 文件要在工作目录中)

  tsc app.ts util.ts
  忽略tsconfig.json文件, 使用默认的编译选项编译执行的文件：app.ts, util.ts    

  tsc -b 
  在工作目录中，建立复合项目

  tsc --init
  创建一个tsconfig.json文件，并在工作目录中使用推荐的设置
        

  tsc -p ./path/to/tsconfig.json
  编译ts项目中指定路径的文件

  tsc --help --all
  当前信息的扩展版本，展示所有编译的可能选项

  tsc --noEmit
  tsc --target esnext
  使用其他设置编译当前项目

COMMAND LINE FLAGS（命令行标记）

     --help, -h  打印帮助信息

    --watch, -w  监听输出文件的变化

          --all  展示所有编译选项

  --version, -v  输出版本信息

         --init  初始化TypeScript项目，并创建一个 tsconfig.json 文件.      

  --project, -p  编译当前项目指定的路径文件，或者当前指定的路径文件下有tsconfig.json文件

    --build, -b  如果过时了，建立一个或多个项目和对应的依赖

   --showConfig  打印最终的配置而不是构建

COMMON COMPILER OPTIONS（常见的编译器选项）

               --pretty  能够对typescript的输出文件启用颜色和格式化，从而使得编译错误更容易阅读
                  type:  boolean
               default:  true

           --target, -t  设置发行的JavaScript语言版本，包含包括兼容的库声明
                one of:  es3, es5, es6/es2015, es2016, es2017, es2018, es2019, es2020, es                         2021, es2022, esnext
               default:  es3

           --module, -m  指定生成的代码模块
                one of:  none, commonjs, amd, umd, system, es6/es2015, es2020, es2022, es                         next, node12, nodenext
               default:  undefined

                  --lib  指定一组描述目标运行时环境的捆绑库声明文件。
           one or more:  es5, es6/es2015, es7/es2016, es2017, es2018, es2019, es2020, es2                         021, es2022, esnext, dom, dom.iterable, webworker, webworker.imp                         ortscripts, webworker.iterable, scripthost, es2015.core, es2015.                         collection, es2015.generator, es2015.iterable, es2015.promise, e                         s2015.proxy, es2015.reflect, es2015.symbol, es2015.symbol.wellkn                         own, es2016.array.include, es2017.object, es2017.sharedmemory, e                         s2017.string, es2017.intl, es2017.typedarrays, es2018.asyncgener                         ator, es2018.asynciterable/esnext.asynciterable, es2018.intl, es                         2018.promise, es2018.regexp, es2019.array, es2019.object, es2019                         .string, es2019.symbol/esnext.symbol, es2020.bigint/esnext.bigin                         t, es2020.promise, es2020.sharedmemory, es2020.string, es2020.sy                         mbol.wellknown, es2020.intl, es2021.promise/esnext.promise, es20                         21.string, es2021.weakref/esnext.weakref, es2021.intl, es2022.ar                         ray/esnext.array, es2022.error, es2022.object, es2022.string/esn                         ext.string, esnext.intl
               default:  undefined

              --allowJs  允许所有的JavaScript文件项目中的一部分。在这些文件中使用chekcJS选项去获取错误
                  type:  boolean
               default:  false

              --checkJs  在类型检查的JavaScript文件中启用错误报告。
                  type:  boolean
               default:  false

                  --jsx  指定生成什么JSX代码
                one of:  preserve, react, react-native, react-jsx, react-jsxdev
               default:  undefined

      --declaration, -d  在你的项目中Typescript、Javascript文件中生成 .d.ts文件
                  type:  boolean
               default:  `false`, unless `composite` is set

       --declarationMap  为 d.ts文件创建一个sourcemaps
                  type:  boolean
               default:  false

  --emitDeclarationOnly  仅输出 d.ts文件而不输出JavaScript文件
                  type:  boolean
               default:  false

            --sourceMap  为发布的JavaScript文件创建一个source map文件
                  type:  boolean
               default:  false

              --outFile  指定一个将所有输出捆绑到一个JavaScript文件中的文件。如果' declaration '为真，也指定一个捆绑的文件。所有.d.ts输出。指定一个文件绑定所有输出到一个JavaScript文件中，如果编译选项 `declaration`为true，则设计文件要绑定所有的.d.ts输出

               --outDir  对所有输出文件指定输出目录

       --removeComments  禁止发布评论
                  type:  boolean
               default:  false

               --noEmit  禁止编译时发布编译文件
                  type:  boolean
               default:  false

               --strict  可以对所有选项进行严格类型检测
                  type:  boolean
               default:  false

                --types  指定要包含而不在源文件中引用的类型包名称。

      --esModuleInterop  发布额外的JavaScript去更简单的支持导入CommonJS模块。这个可以在`allowSyntheticDefaultImports`选项中进行选择是否启用
                         compatibility.
                  type:  boolean
               default:  false

你可以在这个链接中学到更多编译选项 https://aka.ms/tsconfig-reference   
```



#### tsconfig.json方式

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



## Typescript

ts是JavaScript的超集。他的作用在我看来就是给JavaScript实现了类型校验。让JavaScript代码在编写时就能提前发现一些不必要的错误，并提示我们解决这些错误，从而使得JavaScript代码更加的健壮

### 数据类型

#### 基本类型

| 类型      | 鉴定类型方法                       |
| :-------- | :--------------------------------- |
| string    | `typeof s === "string"`            |
| number    | `typeof n === "number"`            |
| boolean   | `typeof b === "boolean"`           |
| undefined | `typeof undefined === "undefined"` |
| function  | `typeof f === "function"`          |
| array     | `Array.isArray(a)`                 |

#### 枚举类型

```tsx
//定义枚举类型变量
enum HttpsStatus {
    Ok,
    Not_Found
}
//枚举赋值
enum HttpsStatus {
    Ok = 200,
    Not_Found = 404
}
//匿名枚举
let demo: 200|300|500
```

### 函数式编程

函数作为“—等公民”:

1. 变量类型可以是函数
2. 值(literal)可以是函数
3. 对象的字段可以是函数
4. 函数的参数可以是函数
5. 函数的返回值可以是函数