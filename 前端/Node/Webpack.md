# Webpack

### 概念

1. entry：入口，以哪个文件为入口进行打包
2. output：输出，打包后的资源bundles输出到哪里，以及如何命名
3. module：处理非JavaScript文件
4. plugins：插件，用于执行范围更广的任务，从打包优化压缩，一直到重新定义环境变量中的变量
5. mode：模式，分为开发模式和生产模式

### 使用

#### 查看npm包历史版本信息

```bash
npm view <packagename> versions --json
```



#### 安装

```bash
npm i webpack webpack-cli -g
npm i webpack webpack-cli -D
```

新建src、build目录。build是打包后的资源

新建index.js，这是webpack入口文件

##### 运行指令

```js
开发环境: webpack ./src/index.js -o ./build/built.js --mode=development
webpack会以./src/index.js 为入口文件开始打包，打包后输出到./build/built.js整体打包环境，是开发环境
生产环境: webpack ./src/index.js -o ./build/built.js --mode=production
webpack会以./src/index.js为入口文件开始打包，打包后输出到./build/built.js整体打包环境，是开发环境
```

##### 结论

1. webpack能处理js /json资源，不能处理css/img等其他资源
2. 生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化~
3. 生产环境比开发环境多一个压缩js代码。
4. HTML文件不需要引入 入口文件中，因为有插件对他进行打包，其他的文件需要引入

#### 打包样式资源

1. webpack配置文件：webpack.config.js

```js
//resolve用来拼接绝对路径
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    entry:'./src/index.js'
    output:{
        filename:'built.js'
        path:resolve(__dirname,'build')//__build代表当前文件的目录绝对路径
	},
    module:{
        rules:[
            //详细loader配置，loader都要先下载，才能使用
            {
                //匹配哪些文件，正则表达式
                test:/\.css$/,
                //要使用多个加载器loader处理用use
                use:[
                    //创建style标签，将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    //将css文件变成commonjs模块加载js中，里面的内容是样式字符串
                    'css-loader'
                ],
                
            },
            {
                test:/\.(jpg|png|gif)$/,
                //使用一个loader
                //下载url-loader file-loader
                loader:'url-loader',
                options:{
                    //图片大小小于8kb，就会被base64处理
                    //有点：减少请求数量（减轻服务器压力）
                    //缺点：图片体积会更大（文件请求速度更慢）
                    limit:8 * 1024,
                    //url-loader默认使用es6模块化解析，
                    //解析时会出现问题：[object Module]
                    //解决：关闭url-loader的ES6模块化，使用commonJS解析
                    esModule:false,
                    //给图片重命名，取hash前10位，后缀名保持不变
                    name:'[hash:10].[ext]',
                    //将图片文件都打包放入imgs目录中
                    outputPath:'imgs'
                }
            },
            {
                test: /\.(less|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    //这里是less-loader或者是scss-loader加载器
                    //需要先npm i less-loader@4.1.0 -D
                    //然后再npm i less
                    //预处理器版本不能过高，不然容易出错
                    'less-loader'
                ]
            }
            {
                test:/\.html$/,
                //处理HTML文件的img图片（负责引入img，从而能被url-loader进行处理
                loader: "html-withimg-loader"
            },
            //打包其他资源：凡是不需要处理（加载器啥的）的资源都是其他资源
            {
                //排除前面处理过的文件资源，其他都参与打包
				exclude:/\.(css|html|js|less|jpg|png|gif)$/,
                loader:'file-loader'
            }
        ]
    },
    plugins:[
        //详细plugins的配置，先下载html-webpack-plugin，再引入才能使用
        //功能：默认创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
        new HtmlWebpackPlugin({
            //需求：需要有结构的HTML文件，复制下面路径下的文件，并自动引入所有资源文件
            template:'./src/index.html'
        });
    ],
    mode:'development',//开发模式
    //开发服务器devServer:用来自动化（自动编译，自动打开浏览器，自动刷新浏览器）
    //特点：只会在内容中编译打包，不会有任何输出
    //启动devServer指令为：webpack-dev-server，需要下载这个包，
    //遇到问题：Error: Cannot find module 'webpack'
    //解决办法：npm i webpack webpack-cli -D
    //遇到问题：Error: Cannot find module 'webpack-cli/bin/config-yargs
    //解决办法：npx webpack serve
    devServer:{
  		//运行的目录
        contentBase: resolve(__dirname,'build'),
        //启动gzip压缩
        compress:true,
        //端口号
        port:8080,
        //自动打开浏览器
    }
}

```

### 指定node运行环境

```js
process.env.NODE_ENV = 'development'
```



### 生产环境配置

#### 提取CSS文件

1. 安装插件：mini-css-extract-plugin

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    module:{
        rules:[
            {
                test://,
                use:[
                //将style-loader替换成下面的这个插件loader。
                //作用：提取JS中的CSS成单独文件
                	MiniCssExtractPlugin.loader,
                	'css-loader'
                ]
            }
        ]
    },
    plugins:[
    	new MiniCssExtractPlugin()
	]
}

```

#### CSS兼容性处理

css兼容性处理：postcss-->postcss-loader postcss-preset-env

安装处理器：postcss-loader postcss-preset-env

```js
rules:[
    {
        test://,
        use:[
        	MiniCssExtractPlugin.loader,
        	'css-loader',
        //使用loader默认配置
        //'postcss-loader',
        //修改loader的配置
        	{
        		loader:'postcss-loader',
        		option:{
        			ident:'postcss',
        			plugins: () => [
					    //postcss的插件，postcss-preset-env是帮postcss找到package.json中的browserslist里面的配置，通过配置加载指定的css兼容性样式，默认是以生产环境运行的，可以通过设置node环境变量来指定运行环境：process.env.NODE_ENV = 'development'
    					require('postcss-preset-env')()
					]
    			}
    		}
        ]
    }
]
```

##### package.json配置

```json
"browserslist":{
    "development":[
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version",
    ],
    "production":[
        ">0.2%",
        "not dead",
        "not op_mini all"
    ]
}
```

#### 压缩CSS

安装插件：optimize-css-assets-webpack-plugin

```bash
npm i optimize-css-assets-webpack-plugin -D
```

调用这个插件即可

```js
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

plugins:[
    //压缩css
    new OptimizeCssAssetsWebpackPlugin()
]
```

### JS 语法检查

安装：eslint eslint-loader eslint-config-airbnb-base eslint-plugin-import

语法检查：eslint-loader eslint

设置检查规则：package.json中的eslintConfig中设置

```json
package.json
"eslintConfig":{
    "extends":"airbnb-base"
}
```

```js
rules:[
    {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'eslint-loader',
        options:{
            //自动修复
            fix:true
        }
    }
]
```

#### JS语法兼容

1. 基本js兼容性处理--> @babel/preset -env
   问题:只能转换基本语法，如promise不能转换
2. 全部js兼容性处理--> @babel/ polyfill
   问题: 我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了~
3. 需要做兼容性处理的就做:按需加载--> core-js

```js
{
    test:/\.js$/,
    exclude:/node_modules/,
    loader:'babel-loader',
    options:{
        presets:[
            ' @babel/preset-env',
            {
                //按需加载.
                useBuiltIns:' usage',
                //指定core-js版本
                corejs:{
                	version: 3
                },
                //指定兼容性做到哪个版本浏览器
                targets:
                chrome: ' 60',
                firefox: ' 60',
                ie:'9',
                safari:' 10',
                edge: '17'
        }
}
```

#### JS 与 HTML 压缩

JS压缩，只要将模式调为生产环境即可

HTML压缩，只需要在 html-webpack-plugin 下添加两个配置即可

```js
plugins:[
    new HtmlWebpackPlugin({
        template:'./src/index.html',
        minify:{
            //移除空格
            collapseWhitespace:true,
            //移除注释
            removeComments:true
        }
    })
]
```

### 开发环境性能优化

#### 热模块替换/模块热替换

作用：一个模块发送变化，只会重新打包这个模块（而不是打包所有模块，极大提升构建速度）

1. 样式文件:可以使用HMR功能:因为style - loader内部实现了~
2. js文件:默认不能使用HMR功能--> 需要修改js代码，添加支持HMR功能的代码
   注意: HMR功能对js的处理，只能处理非入口js文件的其他文件。
3. html文件:默认不能使用HMR功能.同时会导致问题: html 文件不能热更新了~ (不用 做HMR功能)
   解决:修改entry入口， 将html文件引入

```js
devServer:{
    hot:true
}
```

