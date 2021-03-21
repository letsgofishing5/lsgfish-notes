# ES6语法

### 块级作用域

1. var会导致变量提升，他允许重复声明
2. let具有块级作用域，不允许重复声明，不允许变量提升
3. const：声明常量

### 对象解构赋值

```html
<script>
	let [abc=true]=[]
    //默认赋值true，在后面[]中写上false，则abc=false
</script>
```

```html
<script>
	let [length:len]="hello"
    console.log(len)
    //length赋值给len，从前往后赋值
    
    var str="cth";
    for(let i of str){//of,取得的值是内容，in，取得的值是下标
        console.log(i)
    }
</script>
```

#### 模板字符串

```html
<script type="text/javascript">
    var name="zs"
    var age=23
    console.log(`姓名：${name},年龄：${age}`)
</script>
```

### 数组

#### 展开运算符

```html
<script type="text/javascript">
    var array=[3,2,5,6,23,34]
    var array2=[3,2,5,6,23,34]
    console.log(array,array2)
    console.log(...array,...array2)
</script>
```

#### Array.from();将类数组转换成真正的数组

```html
<script type="text/javascript">
    function interator(){
        console.log(arguments)
    }
    interator(1,2,3);
</script>
```

#### Array.of()

将一组值，转换成数组

```html
<script type="text/javascript">
    var a=Array.of(3,2,5,24)
    console.log(a)
</script>
```

### module

#### 提到的关键字

1. 静态优化

#### export

正确的写法是下面这样。

```javascript
// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};
```

#### import

```javascript
foo();

import { foo } from 'my_module';
```

上面的代码不会报错，因为`import`的执行早于`foo`的调用。这种行为的本质是，`import`命令是编译阶段执行的，在代码运行之前。

注意，`import`命令具有提升效果，会提升到整个模块的头部，首先执行。

如果多次重复执行同一句`import`语句，那么只会执行一次，而不会执行多次。

```javascript
import 'lodash';
import 'lodash';
// 等同于
import { foo, bar } from 'my_module';
```

#### export default 命令

```javascript
// import-default.js
import customName from './export-default';
customName(); // 'foo'
```

上面代码的`import`命令，可以用任意名称指向`export-default.js`输出的方法，这时就不需要知道原模块输出的函数名。需要注意的是，这时`import`命令后面，**不使用**大括号。

下面比较一下默认输出和正常输出。

```javascript
// 第一组
export default function crc32() { // 输出
  // ...
}

import crc32 from 'crc32'; // 输入

// 第二组
export function crc32() { // 输出
  // ...
};

import {crc32} from 'crc32'; // 输入
```

上面代码的两组写法，第一组是使用`export default`时，对应的`import`语句不需要使用大括号；第二组是不使用`export default`时，对应的`import`语句需要使用大括号。

`export default`命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此`export default`命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应`export default`命令。

本质上，`export default`就是输出一个叫做`default`的变量或方法，然后系统允许你为它取任意名字。所以，下面的写法是有效的。

### 容器

set容器，和Java一样，不可重复

map容器，和Java一样，键值对存储

```html
<script type="text/javascript">
   var set=new Set();
    console.log(set.__proto__)
    var map=new Map();
    console.log(map.__proto__)
</script>
```

### 可选链操作

?.

该符号用来判断是否有属性

```js
function main(config){
    const dbHost = config?.db?.host;
    console.log(dbHost);
}
main({
    db:{
        host:'127.0.0.1';
        username:'root'
    },
    cache:{
        host:'192.168.1.200'
        username:'admin'
    }
})
```



### 简化类

ES6允许在大括号里，直接写入变量和函数，作为对象的属性和方法

```js
const c = {
    name:"zs",
    function(){
        
    }
}
```

### 箭头函数

箭头函数中，`this`是静态的，`this`始终指向函数声明时所在作用域下的`this`的值

```js
//第一种写法
let result=n=>n;
//完整表达式
let result = function(n){
    return n;
}

//第二种写法
let result2 = ()=>n
//完整表达式
let result2 = function(){
    return n;
}

//总结，暂时只想到这两种写法。简单来说就是将原来的一个完整函数表达式给简化了，但是简化过头，初学者可能比较懵，比如我。简化后的表达式，即：参数=>方法体
//如果函数只有一个参数和返回值，那么只需要写：参数=>返回值
//如果函数没有参数或者多个参数，那么需要用小括号代替参数的位置或者用小括号将多个参数囊括起来：()=>返回值
//如果方法体不止只有返回值，那么需要些：参数 => {console.log("test");return n;}
```



### 参数默认值

给函数形参赋默认值，一般位置靠后

```js
function test(a,b,c=10){
    return a+b+c;
}
```

### rest参数

类似于Java中的可变参数，需要放置末尾

```js
function rest(a,b,...args){
    console.log(a),
    console.log(b),
    console.log(args)
}
rest(1,2,3,4,5,6);
```

### Symbol数据类型

[视频](https://www.bilibili.com/video/BV1uK411H7on?p=15)

ES6引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型，是一种类似于字符串的数据类型。
**Symbol特点**

1.  Symbol的值**是唯一**的，用来解决命名冲突的问题
2. Symbol值**不能与其他数据进行运算**
3. Symbol定义的对象属性不能使用for...in循环遍历，但是可以使用Reflect.ownKeys来获取对象的所有键名

```js
//创建Symbol
let s = Symbol();
//第二种方式创建
let s2=Symbol.for("创建");
console.log(s2.description)
```

使用Symbol，添加属性

```js
//第一种方式
let game={}
let methods={
    up:Symbol(),
    down:Symbol(),
}
//必须使用中括号才能进行添加
game[methods.up]=function(){
    console.log("向上")
}
game[methods.down]=function(){
    console.log("向下")
}
//第二种方式
let youxi={
    [Symbol("say")]:function(){
        console.log("say");
    },
    [Symbol("haha")]:function(){
        console.log("哈哈");
    }
}
console.log(youxi)
```

### 迭代器

1. for...of遍历数组值，键值
2. for...in遍历数组下标，键名

```js
//声明生成器函数，必须要有*号
function * gen(){
    console.log("hello generator")；
    yield 111；
}
//执行获取迭代器对象
let iterator = gen();
//调用执行gen()
iterator.next();
//可以通过next方法传入实参
iterator.next("传入参数，他会直接替代yield 111的返回值")
```

### 生成器

生成器是一个特殊的函数，异步编程，纯回调函数：node fs ajax mongodb

```js
function * gen(){
    console.log("hello world")
}
let iterator = gen()
iterator.next();
```

#### 生成器函数参数

```js
function * gen(args){
    yield 111;
    let two = yield 222;//传入的参数是yield的返回值
    console.log(two)
    yield 333;
}
let iterator = gen('AAA')
console.log(iterator.next('BBB'));//next可以传入实参
console.log(iterator.next());
console.log(iterator.next());
```



### Promise

[promise自定义封装视频](https://www.bilibili.com/video/BV1GA411x7z1?p=25)

封装读取文件（安装node）

```js
let fs = require('fs')
fs.readFile('./test.html',(e,data)=>{
	if(e)throw e;
	console.log(data.toString())
})
```



`promise`是一个构造函数，通过`resolve`与`reject`来改变`p `的状态，来判断调用`then`中的第几个函数

```js
const p = new Promise(function(resolve,reject){
    resolve(value);//方法执行成功执行调用resolve()方法，p的状态变为true，调用then中的第一个函数
    reject(reason);//方法执行失败执行调用reject()方法，p的状态变为false，调用then中的第二个函数
})
p.then(
	function(value){},//方法执行成功，调用第一个函数，value参数与resolve（参数）保持一致
    function(reason){}//方法执行失败，调用第二个函数，reason参数与reject（参数）保持一致
)
```

##### allsettled

返回的结果永远都是Promise成功

```js
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('成功 - 1')
    },1000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      //  resolve('成功 - 2')
        reject('失败 - 1')
    },1000)
})
const result = Promise.allSettled([p1,p2])
console.log(result)
```

##### all

只有返回结果都是成功，才会返回Promise成功，否则返回Promise失败

```js
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('成功 - 1')
    },1000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      //  resolve('成功 - 2')
        reject('失败 - 1')
    },1000)
})
const result = Promise.all([p1,p2])

```

allSettled与all都是用来做批量异步请求处理

##### util.promisify方法进行promise风格转换

```js
//引入util模块
const util = require('util')
//引入fs模块
const fs = require('fs')
//返回一个新的函数
let newFun = util.promisify(fs.readFile)//将fs里的读取文件函数传进去，返回一个promise函数
newFun('文件路径').then(data=>{
    console.log(data.toString())
})
```

##### promise状态

1. pending变为resolved / fullfilled：成功
2. pending变为rejected：失败

##### promise的异常处理

异常穿透，可以直接在最后catch处理

##### 中断promise链

有且只有一个方式

```js
return new Promise(()=>{})
//使用pending状态，即无状态，无状态的时候then方法无法执行
```

##### async函数

1. async函数的返回值结果为promise对象
2. promise对象的结果由async函数执行的返回值决定

##### await函数

1. await右侧的表达式一般为promise对象，但也可以是其他值：await new Promise（）
2. 如果表达式是promise对象，await返回的是promise成功的值
3. 如果表达式是其他值，直接将此值作为await的返回值

总结：await就是用来获取promise成功后的值，如果返回的是失败的值，通过捕获来获取

```js
async function main(){
    let p = new Promise((resolve,reject)=>{
        resolve("error")
    })
    let q = await p;
    console.log(q)
     let p1 = new Promise((resolve,reject)=>{
        reject("error")
    })
     try{
    	let q1 = await p1;
     }catch(e){
         console.log(e)
     }
}
```



注意：

1. await必须写在async函数中，但async函数中可以没有await
2. 如果await的promise失败了，就会抛出异常，需要通过try/catch捕获处理

### Set

```js
let arr = [1,2,3,3,3,2,2,3,5,5,5]
//去重
let arr2 = [...new Set(arr)]
//交集
let result = [...new Set(arr)].filter(item => {
    let s2 = new Set(arr2)
    if(s2.has(item)){
        return true
    }else{
        return false
    }
})
console.log(result)
//并集
let concat = [...arr,...result]
//差集
let diff = [...new Set(arr)].filter(item => !(new Set(arr2).has(item)))
```

### Map

```js
//1.声明
let map = new Map()
//2.添加
map.set('name','尚硅谷教我学ES6')
//3.获取大小
map.size
//4.删除
map.delete("name")
//5.获取
map.get("name")
//6.清空
map.clear();
//7.遍历
for(let v of map){
    console.log(v)
}
```

### class类

```js
//ES5写法
function Phone(name,price)
{
    this.name=name;
    this.price=price;
}
let phone = new Phone("华为",1999)
//ES6写法
class Phone{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
}
let phone = new Phone("小米",1999)
```

#### 私有属性

```js
class Person{
    //公有属性
    name;
    //私有属性
    #age;
    #weigth;
    //构造方法
    constructor(name,age,weight){
        this.name = name;
        this.#age = age;
        this.#weight = weight;
    }
intro(){
    console.log(this.name);
    console.log(this.#age);
                console.log(this.#weight);
                }
}
let person = new Person('大明',18,'50kg')
person.intro();
```



#### 构造函数继承

```js
class Phone{
    constructor(brand,price){
        this.brand=brand;
        this.price=price;
    }
    call(){
        console.log("我可以打电话！！")
    }
}
class SmartPhone extends Phone{
    constructor(brand,price,color,size){
        super(band,price);
        this.color=color;
        this.size=size;
    }
    photo(){
		console.log("拍照")
    }
}
```

#### get与set

内置了get与set方法，但是我们可以重写他，进行增强，但是set方法一定要给参数

### 数值扩展

#### Number

0. Number . EPSILON 是JavaScript 表示的最小精度
EPSILON 属性的值接近于2.2204460492503130808472633361816E-16
1. 二进制和八进制
2. Number . isFinite
    检测一个数值是否为有限数
3. Number. isNaN 检测一个数值是否为NaN 
4. Number . parseInt Number . parseFloat字符串转整数
5. Number . isInteger 判断一个数是否为整数
6.  Math. trunc 将数字的小数部分抹掉
7. Math.sign 判断一个数到底为正数负数还是零
   1. 为正数返回1
   2. 为负数返回-1
   3. 零返回0

#### Object

1. `0bject.is(val1,val2)`判断两个值是否完全相
2. `0bject.assign(target,source1,source2)`对象的合并，后面的参数会将前面的参数覆盖
3. `Object.setPrototype0f(father,son)` `Object.getPrototypeof`

### 模块化

ES6之前的模块规范化有：

1. CommonJS = => NodeJS、Browserify
2.  AMD ==> requireJS
3. CMD ==> seaJS

ES6规范化

`import`与`export`

1. export let  a = "对外暴露方式1"

2. let b = "对外暴露方式2"

   export {a,b}

3. export default{

​	`let c = "对外暴露方式3";`

​	`let d = "默认暴露代码块内部数据"`

}

在HTML中引入需要将type改成module

```html
<script type="module">
	import bieming from "./test.js"//引入默认暴露，该引入方法只能引入默认暴露
    
    import {b1,b2} from "./test.js"//解构赋值引入
    
    import * as bieming from "./test.js"//通用导入方式
    
    import {default as beiming} from "./test.js"
    

</script>
```

### babel

babel是一个JavaScript的编译器

1. 安装工具：babel-cli、babel-preset-env、browserify(webpack)

步骤：

- 打开命令行：npm init --yes
- npm i babel-cli babel-preset-env browserify -D
- 安装完毕，-D：代表依赖
- npx：局部安装，npm：全局安装
- 局部安装（将ES6转换ES5）：npx babel src/js -d dist/js --presets=babel-preset-env
- 全局安装：去掉npx即可
- 打包（将转换后的app.js进行打包）：npx browserify dist/js/app.js -o dist/bundle.js
- 引入打包好的bundle.js文件

导入其他npm包

- 引入jQuery包
  - 执行：npm i jquery
  - 引入：import $ from "jquery";//

### async 函数

```js
async function fn(){
    //返回的是一个Promise 类型的对象
    //内部抛出异常则返回一个失败的promise
}
```

#### await表达式

await必须包含在async函数中，会得到 Promise 的一个返回值

```js
//返回成功的值
let p = new Promise((resolve,reject)=>{
    resolve("cs")
})
async function f(){
    let result = await p;
    console.log(result)
}
f();
//返回失败的值，需要使用try/catch来捕获
let p = new Promise((resolve,reject)=>{
    reject("失败啦")
})
async function f(){
    try{
        let result = await p;
        console.log(result)
    }catch(e){
        console.log(e)
    }

}
f();
```

#### Object方法

##### Object.keys()

获取对象的所有的键值

##### Object.values()

获取所有对象的值

##### Object.entries()

将对象的键值对转换成一个小的数组

#### 数组

##### array.flat

将多维数组转换成低位数组

```js
const arr = [1,2,3,4,[5,6]]
console.log(arr.flat())
//如果时三维数组，则需要添加参数，参数代表深度
const arr2 = [1,2,3,[4,5,[6,7,8]]]
console.log(arr2.flat())
console.log(arr2.flat(2))

```

##### array.flatMap

将多维数组合并为一个数组

```js
const arr = [1,2,3]
const result = arr.flatMap(item => [item * 10])
console.log(result)
```



## ES9

#### rest 参数

Rest 参数与spread扩展运算符在ES6中已经引入，不过ES6中只针对于数组，
在ES9中为对象提供了像数组一样的rest.参数和扩展运算符

```js
function connect({host,port,...user}){
    console.log(host)
    console.log(port)
    console.log(user)
}
connect({
    host:"localhost",
    port:"8080",
    username:"zs",
    password:123123,
})
```

#### 正则命名分组

1. 分组

```js
let str = '<a href="http://www. atguigu. com" >尚硅谷</a>';
const reg = /<a href="(?<url>. * )I">(?<text>. *)<\/a>/;
const result = reg. exec(str );
console.log(result.groups.url);
console.log(result.groups.text);
```

2. 断言

```js
//声明字符串
let str = ' JS5211314你知道么555啦啦啦' ;
//正向断言
// const reg = /\d+(?=啦)/;
// const result = reg.exec(str);
//反向断 言
const reg = /(?<=么)\d+/ ;
const result = reg.exec(str);
console. log( result);
```



## 问题
##### 1.call与apply调用

##### 2.函数中arguments变量

##### 3.this详解

##### 4.生成器函数

##### 5. 读取文件

##### 6. 异步任务





