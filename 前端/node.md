## npm

#### 包的版本号规则

1.0.0

第一位代表大版本更迭，

第二位代表功能增加

第三位表示bug修复

每次高位数字变更，低位数字需要清零

#### 初始化package.json

```
npm init -y
```

注意：上述命令只能在项目文件夹的名称使用英文命名，不要使用中文，不能出现空格

##### dependencies

package.json 文件中，有一个 dependencies 节点，专门用来记录您使用 npm install 命令安装了哪些包

##### DevDependencies

如果某些包只在项目开发阶段会用到，在项目上线后不会用到，则建议把这些包记录到DevDependencies 节点中

```
//简写
npm i 包名 -D
//完整写法
npm install 包名 --save-dev
```

#### 解决包下载慢问题

安装淘宝镜像

```
# 查看当前包镜像源
npm config get registry
# 切换淘宝镜像
npm config set registry=https://registry.npm.taobao.org/
# 检查镜像是否安装成功
npm config get registry
```

#### nrm

安装nrm工具，利用nrm提供的终端命令，可以快速查看和切换下包的镜像源

```
# 通过npm 包管理器，将nrm 安装为全局可用的工具
npm i nrm -g
# 查看所有可用的镜像源
nrm ls
# 将下包的镜像源切换为 Taobao 镜像
nrm use taobao
```

#### 包分类

- 项目包（node_modules）
  - 开发依赖包（DevDependencies，开发期间会用到。命令：npm i 包名 -D）
  - 核心依赖包（dependencies，开发和上线期间都会用到。命令：npm i 包名）
- 全局包（执行 npm install 命令时，提供了 -g 参数）

#### 规范的包结构

必须要有：name，version，main（入口文件），

更多详情：https://yarnpkg.com/zh-Hans/docs/package-json

#### 模块加载机制

1. 内置模块与第三方模块同名时，加载的是内置模块
2. 自定义模块加载时，必须以 ./ 或 ../ 开头的路径标识符。如果没有指定 ./ ../ 这样的路径标识符，则node会把他当做内置模块或第三方模块进行加载
3. 在引入自定义模块时，如果省略了文件的扩展名，则 node.js 会按顺序分别尝试加载以下的文件
   1. 按照确切的文件名加载
   2. 补全 .js 扩展名
   3. 补全 .json 扩展名
   4. 补全 .node 扩展名
   5. 加载失败，终端报错

#### 跨域

##### cors中间件

cors是Express的一个第三方中间件。通过安装和配置cors中间件，可以很方便地解决跨域问题。

使用步骤如下三步：

1. ```
   npm install cors //安装中间件
   ```

2. ```
   const cors = require('cors') //导入中间件
   ```

3. ```
   app.use(cors()) //配置中间件，路由调用前
   ```

##### 设置响应头 Access-Control-Allow-Origin

```
Access-Control-Allow-Origin:<origin> | *
```

<origin>：代表具体的地址，如https://www.baidu.com，表示只允许百度请求

*：代表所有网页都可以请求

##### 设置响应头 Access-Control-Allow-Headers

```
//多个响应头之间用英文的逗号分割
res.setHeader(' Access-Control-Allow-Headers','Content-Type,X-Custom-Header')
```

##### 设置响应头 Access-Control-Allow-Methods

默认情况下，CORS 仅支持客户端发起GET、POST、HEAD请求。

如果客户端希望通过PUT、DELETE等方式请求服务器资源，则需要在服务器端，通过Access-Control-Allow-Methods来指明实际请求所允许使用的HTTP方法

```js
//只允许 POST,GET,DELETE,HEAD 请求方法
res.setHeader('Access-Control-Allow-Methods','POST,GET,DELETE,HEAD')

//允许所有的 HTTP 请求方法
res.setHeader('Access-Control-Allow-Methods','*')
```

##### 预检请求

只要符合以下任何一个条件的请求，都需要进行预检请求

1. 请求方式为：GET、POST、HEAD**之外的请求**Method类型
2. 请求头中 包含自定义头部字段
3. 向服务器发送了 application/json 格式的数据

在浏览器与服务器正式通信前，浏览器会发送OPTION请求进行预检，以获得服务器是否真正允许该实际请求，所以这一所次的OPTION请求称为"预检请求"，服务器成功响应预检请求后，才会发送真正的请求，并且携带真是数据