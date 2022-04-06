## tsc

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

