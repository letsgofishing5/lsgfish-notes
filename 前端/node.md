# node

是基于Chrome V8 引擎的，JavaScript运行环境

node处理请求时是单线程，但是在后台拥有一个I/O线程池

DOS窗口下，执行：node 文件全名，可以执行js文件

### 模块

使用require()，返回一个对象，这个对象代表的是这个模块

```js
var md = require("test")
```

在node中，一个js文件就是一个模块

在node中，每个js文件的js代码都是独立运行在一个函数中的，而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问

我们可以通过exports 来向外部暴露变量和方法，只需要将需要暴露给外部的变量和方法设置为exports的属性即可

```js
exports.x = "test.js";
```

arguments.callee：这个属性保存的是当前执行的函数对象

### 包package

包实际上就是一个压缩文件，解压以后还原为目录。符合规范的目录，应该包含如下文件

1. package.json：描述文件，该文件很重要，该文件不可写注释
2. bin：可执行二进制文件
3. lib：js代码
4. doc：文档
5. test：单元测试

### Buffer

buffer的大小一旦确定，则不可改变。Buffer实际上是对底层内存的直接调用

```js
var buff = Buffer.alloc(10)//创建一个指定大小的Buffer，空间为10
buff[2]="aa";
//只要数字在控制台或页面中输出一定是10进制，
console.log(buff[2].toString(16))//传入参数：16，代表以16进制输出
Buffer.from(str)//将一个字符串转换为buffer
```

### 系统文件——fs

```js
var fs = require('fs')//fs是核心模块，不需要下载，直接引入即可
```

#### 同步与异步操作

文件写入：

- 手动操作过程

  - 打开文件

    ```js
    fs.openSync(path,flags[,mode])
    //path:文件路径
    //flags:设置权限：只读r，只写w，读写
    //mode 设置文件的操作权限，一般不传
    //1.打开文件
    var fd = fs.openSync("hello.txt","w");
    //2.向文件中写入内容
    fs.writeSync(fd,"今天天气真不错，就是电脑鼠标不能用了");
    //3.关闭文件
    fs.closeSync(fs)
    ```

  - 向文件中写入内容

  - 保存文件并关闭

异步方法不会有返回值，结果都是通过回调函数的参数返回的