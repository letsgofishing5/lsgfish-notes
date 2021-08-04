# let 和 const 关键字

## 1 let 关键字

### 1.1 作用

同关键字 `var` 类似，用于声明变量。

```js
let 变量名 = value;
```

### 1.2 let 声明的变量与 var 声明的变量的区别

1）不能重复声明。

2）变量不会提升。

3）不再是顶层全局对象的属性。

4）具有块级作用域。

## 2 块级作用域

一对花括号 `{}` 中的语句属于一个块，在这之中定义的所有变量在代码块外都是不可见的，我们称之为块级作用域。

```js
// 条件语句
if () {}

// switch语句
switch () {}

// for / while循环语句
for () {}
while () {}

// try...catch语句
try () catch (err) {}

// 单大括号
{}
```

> **注意：** 对象的大括号内不是一个块级作用域, 因为它里面不能直接声明变量;。

## 3 const 关键字

### 3.1 作用

基本使用 声明只读常量

```js
const 常量名 = value;
```

### 3.2 const 声明的常量的语法特点

1）值无法修改，更不能重复声明。

2）与 let 声明的变量一样，不会提升。

3）也不再作为顶层全局对象的属性。

4）也具有块级作用域。

# 解构赋值

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

## 1 数组的解构赋值

以前，变量赋值，只能这么写

```js
var a = 1;
var b = 2;
var c = 3;
```

现在，也可以这么写

```js
let [a, b, c] = [1, 2, 3];
```

上面代码表示，可以从数组中提取值，按照对应位置，对变量赋值。

**本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值**。下面是一些使用嵌套数组进行解构的例子。

```js
let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3
```

如果解构不成功，变量的值就等于 `undefined`。

如果等号左边的形式是数组，而右边不是数组，将会报错。

解构变量可以有默认值。

```js
let [foo = true] = [];
foo // true

let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
```

## 2 对象的解构

解构不仅可以用于数组，还可以用于对象

```js
let { foo, bar } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"
```

对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

如果变量名与属性名不一致，必须写成下面这样。

```js
var { foo: baz } = { foo: 'aaa', bar: 'bbb' };  
baz // "aaa"

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // 'hello'
l // 'world'
```

这实际上说明，对象的解构赋值是下面形式的简写。

```js
let { foo, bar } = { foo: "aaa", bar: "bbb" };
// 等同于
let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
```

和数组一样，解构也可以用于嵌套解构的对象

```js
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p: [x, { y }] } = obj;
x // "Hello"
y // "World"
```

注意，这时p是模式，不是变量，因此不会被赋值。

对象的解构也可以指定默认值

```js
var {x, y = 5} = {x: 1};
x // 1
y // 5

var { message: msg = 'Something went wrong' } = {};
msg // "Something went wrong"
```

## 3 特殊对象形式的解构赋值

JavaScript 中一切皆对象，像字符串、布尔值、数值都可以被解构，而且字符串可以当做字符组成的数组，类数组对象也可以当做数组结构。

```js
// 数组和字符串
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"

// 数组和类数组之间进行结构
var btns = document.querySelectorAll('button');
let [e,h,i,g] = btns;

// 对象和字符串
let {length : len} = 'hello';   //因为字符串具有属性length
len // 5

// 对象和数值
let {toString: s} = 123;
s === Number.prototype.toString // true
```

## 4 函数传参解构赋值

函数的参数传递可以使用解构赋值。

```js
// 利用数组形式解构赋值
function fn([m,n]) {
  console.log(m,n);
}
fn([100, 200]);


// 利用对象形式结构赋值
function demo({name, age}) {
  console.log(name, age);
}
demo({name: 100, age: 200});


// 参数可以设置默认值
function swiper({id, autoPlay=false, duration=3000, click=false}) {
  console.log(id, autoPlay, duration, click);
} 
swiper({
  id: '#myPlay',
  autoPlay: true,
  duration: 5000,
});
```

## 5 解构赋值实际应用

1） 交换两个变量的值。

```js
let x = 1;
let y = 2;

[x, y] = [y, x];
```

2）提取JSON数据

```js
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]
```

3）函数返回多个值

```js
function getInfo() {
  return {
      name: '曹操',
      age: 100
  }
}

let {name, age} = getInfo();
console.log(name, age);
```

4）获取模块的指定方法

```js
const { SourceMapConsumer, SourceNode } = require("source-map");
```

# 字符串新增特性

## 1. 模板字符串

### 1.1 模板字符串作用

传统的JavaScript语言，输出模板通常是这样写的。

```javascript
$('#result').append(
  'There are <b>' + basket.count + '</b> ' +
  'items in your basket, ' +
  '<em>' + basket.onSale +
  '</em> are on sale!'
);
```

上面这种写法相当繁琐不方便，ES6 引入了模板字符串解决这个问题。

```javascript
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);
```

### 1.2 模板字符串语法特点

1）模板字符串（template string）是增强版的字符串，用反引号 ` 标识。适合用来定义多行字符串。

2）模板字符串中嵌入变量，需要将变量名写在`${}`之中。

3） 大括号内部可以放入任意的JavaScript表达式，可以进行运算，以及引用对象属性。

4）如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。

```javascript
`User ${user.name} is not authorized to do ${action}.`
`${x} + ${y} = ${x + y}`
`foo ${fn()} bar`
```

## 2 字符串新增方法

### 2.1 字符串重复方法 repeat()

```javascript
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""
```

### 2.2 字符串查找 includes() / startsWith() / endsWith()

- includes()：返回布尔值，表示是否找到了参数字符串。
- startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
- endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。

```javascript
let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true
```

这三个方法都支持第二个参数，表示开始搜索的位置。

```javascript
let s = 'Hello world!';

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
```

# 数值新增特性

## 1 二进制和八进制的表示方式

```js
//二进制表示 ES6表示方式
var n1 = 0b1010010;

// 八进制表示 ES6之前的表示方式  严格模式不可用
var n2 = 017; 

// 八进制表示, ES6表示方式
var n3 = 0o17;
```

## 2 Number 构造函数本身新增的方法和属性

| 方法名或属性名          | 含义                                                         |
| ----------------------- | ------------------------------------------------------------ |
| Number.isNaN()          | 同全局函数 isNaN()                                           |
| Number.isFinite()       | 同全局函数 isFinite()                                        |
| Number.parseInt()       | 同全局函数 parseInt()                                        |
| Number.parseFloat()     | 同全局函数 parseFloat()                                      |
| Number.isInteger()      | 返回布尔值，用来判断一个数值是否为整数                       |
| Number.isSafeInteger()  | 返回布尔值，是否是安全的整数，整数范围在-2^53到2^53之间视为安全整数（不包含两个端点） |
| Number.MAX_SAFE_INTEGER | 安全整数的上限                                               |
| Number.MIN_SAFE_INTEGER | 安全整数的下限                                               |
| Number.EPSILON          | 它表示 1 与大于 1 的最小浮点数之间的差，是 JavaScript 能够表示的最小精度 |

```js
Number.isInteger(25) // true
Number.isInteger(25.1) // false
Number.isInteger(25.0) // true

// 如果参数不是数值，Number.isInteger返回false。
Number.isInteger() // false
Number.isInteger(null) // false
Number.isInteger('15') // false
Number.isInteger(true) // false

// 这个小数的精度达到了小数点后16个十进制位，转成二进制位超过了53个二进制位，导致最后的那个2被丢弃了。
Number.isInteger(3.0000000000000002) // true 

// 如果一个数值的绝对值小于Number.MIN_VALUE（5E-324），即小于 JavaScript 能够分辨的最小值，会被自动转为 0。
Number.isInteger(5E-324) // false
Number.isInteger(5E-325) // true
```

## 3 Math 新增的方法

| 方法名       | 含义                                                         |
| ------------ | ------------------------------------------------------------ |
| Math.trunc() | 去除一个数的小数部分，返回整数部分                           |
| Math.sign()  | 判断一个数到底是正数、负数、还是零。 参数为正数，返回+1； 参数为负数，返回-1； 参数为 0，返回0； 其他返回 NaN。 |
| Math.cbrt()  | 计算一个数的立方根                                           |
| Math.hypot() | 返回所有参数的平方和的平方根                                 |

```js
Math.trunc(4.1) // 4
Math.trunc(4.9) // 4
Math.trunc(-4.1) // -4
Math.trunc(-4.9) // -4
Math.trunc(-0.1234) // -0

Math.sign(-5) // -1
Math.sign(5) // +1
Math.sign(0) // +0
Math.sign(-0) // -0
Math.sign(NaN) // NaN

Math.hypot(3, 4);        // 5
Math.hypot(3, 4, 5);     // 7.0710678118654755
```

# 函数新增特性

## 1. 函数参数的默认值

ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。

```javascript
function log(x, y = 'World') {
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello
```

## 2. rest 参数

ES6 引入 rest 参数（形式为 `...变量名`），用于获取函数的多余参数，用来代替 arguments 对象。

rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

```js
//计算所有参数的和
function sum(...numbers) {
  return numbers.reduce(function(res, item){
    return res + item;
  });
}

console.log(sum(10,20,30,40,50,60));
```

> **注意:**
>
> rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
>
> rest 参数是真正的数组，数组的方法都可以使用；而 arguments 是类数组对象。

## 3. 箭头函数

### 3.1 语法

```javascript
var f = v => v;
//等同于
var f = function(v) {
  return v;
};

var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};
```

如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用 return 语句返回。

```javascript
var sum = (num1, num2) => { 
    let sum =  num1 + num2; 
    return sum; 
}
```

箭头函数的一个用处是简化回调函数

```javascript
// 正常函数写法
var result = values.sort(function (a, b) {
    return a - b;
});

// 箭头函数写法
var result = values.sort((a, b) => a - b);
```

### 3.2 箭头函数的特点

1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

3）箭头函数内不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

# 数组新增特性

## 1 扩展（spread）运算符

### 1.1 用法

扩展（spread）运算符是三个点 `...` 。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。

```javascript
function fn(a, b, c) {
  console.log(a, b, c, a+b+c);
}

var nums = [100,200,300,250];

fn(nums);     // 输出 [100, 200, 300, 250] undefined undefined "100,200,300,250undefinedundefined"
fn(...nums);  // 输出 100 200 300 600
```

### 1.2 应用场景

#### ① 函数传参

将数组中每个元素的值，按顺序依次赋值给形参。

```js
function fn(a, b, c) {
  console.log(a, b, c, a+b+c);
}
var nums = [100,200,300,250];

fn(...nums);  // 输出 100 200 300 600

fn.call({}, ...nums);  // 输出 100 200 300 600

Math.max(...nums);  // 计算数组中值最大的元素 这里得到 300

var names = ['曹操', '张仁', '刘备'];
nums.push(...names);  // [100, 200, 300, 250, "曹操", "张仁", "刘备"]
```

#### ② 复制数组

数组是复合的数据类型，直接复制的话，只是复制了指向底层数据结构的指针，而不是克隆一个全新的数组。

```javascript
const a1 = [1, 2];
// 写法一
const a2 = [...a1];
// 写法二
const [...a2] = a1;
```

#### ③ 合并数组

```js
// ES5 实现方式
[1, 2].concat(more)
// ES6 实现方式
[1, 2, ...more]
var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];

// ES5的的方式合并数组
arr1.concat(arr2, arr3);       // [ 'a', 'b', 'c', 'd', 'e' ]

// 使用 ES6 扩展运算符合并数组
[...arr1, ...arr2, ...arr3];    // [ 'a', 'b', 'c', 'd', 'e' ]
```

#### ④ 可遍历对象转为纯数组

扩展运算符可以将**可遍历对象（定义了遍历器（Iterator）接口的对象）**转为真正的数组。

```js
[...'hello']    // [ "h", "e", "l", "l", "o" ]

let nodeList = document.querySelectorAll('div');
let array = [...nodeList];  // [div,div,div,div]
```

> **注意：**很多原生的类数组对象都是可遍历对象，但是二者并不完全一致！

#### ⑤ 与解构赋值结合

扩展运算符可以与解构赋值结合起来，用于生成数组。

```javascript
const [first, ...seconds] = [1, 2, 3, 4, 5];
first;     // 1
seconds;   // [2, 3, 4, 5]
```

## 2 Array 构造函数本身新增的方法

### 2.1 Array.from()

`Array.from()` 方法用于将类数组对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map转为真正的数组。

```javascript
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
     length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```

### 2.2 Array.of()

`Array.of()` 方法用于将一组值，转换为数组。

`Array.of()` 基本上可以用来替代 `Array()` 或 `new Array()`，它的行为非常统一，不会因为参数不同行为有差异。

```javascript
Array.of(3, 11, 8);    // [3,11,8]
Array.of(3);    // [3]
Array.of('jack', 'anni');    // ["jack", "anni"]
Array.of();  // []
```

## 3 Array 实例新增的方法

### 3.1 find() 和 findIndex() 方法

数组实例的 find 方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为 true 的成员，然后返回该成员。如果没有符合条件的成员，则返回 undefined。

```javascript
[1, 4, -5, 10].find((n) => n < 0)  // -5
```

数组实例的 findIndex 方法的用法与 find 方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回 -1。

```js
[1, 4, -5, 10].find((n) => n < 0)  // 2
```

### 3.2 fill() 方法

`fill()`方法使用给定值，填充一个数组。可以填满稀疏数组。

```js
['a', 'b', 'c'].fill(7);    // [7, 7, 7]  数组中已有的元素，会被全部抹去。
new Array(3).fill(7);    // [7, 7, 7] 用于空数组的初始化非常方便
```

`fill`方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。

```js
['a', 'b', 'c'].fill(7, 1, 2)        // ['a', 7, 'c']
```

### 3.3 entries()，keys() 和 values() 方法

三个方法都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是 keys() 是对键名的遍历、values() 是对键值的遍历，entries() 是对键值对的遍历。

```javascript
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```

# 对象新增特性

## 1. 属性的简洁表示法

### 1.1 属性的简化写法

```javascript
var foo = 'name1';
var bar = 'name2';
function fn(){

}

var obj = {foo,bar,fn};    //等同于 var obj = {foo:foo, bar:bar, fn:fn}
```

### 1.2 方法的简化写法

```javascript
{
    fn:function(){
    }
}
//可简化为
{
    fn(){
    }
}
```

## 2 属性名表达式

```js
var obj = {
  name: '曹操',
  [username]: '关云长',
  [10*45]: '刘备',
  ['age']:100
};
console.log(obj);  // {450: "刘备", name: "曹操", 张飞: "关云长", age: 100}
```

## 3 super 关键字

`this` 关键字总是指向调用方法的对象； `super`关键字指向当前对象的原型对象。

`super` 的指向只与方法定义的地方所在的对象有关，与哪个对象调用方法无关。

```js
// 定义对象
var obj = {
  name: 'obj',
  say() {
    console.log('My Name is '+this.name);
    console.log('My Name is '+super.name);
  },
};
//在obj的原型上添加属性
Object.prototype.name = 'obj proto';
obj.say();
// this: My Name is obj
// super: My Name is obj proto

// ----------------------------
// 定义对象并指定原型对象
var obj1 = Object.create({name: 'obj1 proto'});
obj1.name = 'obj1';
obj1.say = obj.say;
obj1.say();
// this: My Name is obj1
// super: My Name is obj proto
```

`super` 关键字表示原型对象时，只能用在简化写法定义的方法中，其他形式定义的方法都会报错。

```js
// 报错
const obj = {
  foo: super.foo
}

// 报错
const obj = {
  foo: () => super.foo
}

// 报错
const obj = {
  foo: function () {
    return super.foo
  }
}
```

## 4 Object 构造函数本身新增的方法

### 4.1. Object.is() 全等

它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。

不同之处只有两个：一是 +0 不等于 -0 ，二是 NaN 等于自身。

```js
Object.is('foo', 'foo');    // true
Object.is({}, {});    // false
Object.is(+0, -0);    // false
Object.is(NaN, NaN);    // true
```

### 4.2 Object.assign() 合并对象

Object.assign 方法用于对象的合并，将源对象（source）的所有**可枚举属性**，复制到目标对象（target）。

Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。

```js
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
Object.assign(target, source1, source2);
console.log(target);    // {a:1, b:2, c:3}
```

**注意**：如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。

```js
const target = { a: 1, b: 1 };
const source1 = { b: 2, c: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target);    // {a:1, b:2, c:3}
```

**该方法的常见用途如下：**

1）克隆对象

```js
// 用这种方法克隆，只能克隆原始对象自身的值，不能克隆它继承的值
function clone(origin) {
  return Object.assign({}, origin);
}

// 想要保持继承链，可以采用下面的写法
function clone(origin) {
  let originProto = Object.getPrototypeOf(origin);
  return Object.assign(Object.create(originProto), origin);
}
```

2）合并多个对象

3）为属性指定默认值

```js
const DEFAULTS = {
  logLevel: 0,
  outputFormat: 'html'
};

function processContent(options) {
  options = Object.assign({}, DEFAULTS, options);
  console.log(options);
  // ...
}
```

### 4.3 Object.setPrototypeOf() 和 Object.getPrototypeOf()

`Object.setPrototypeOf`方法用来设置一个对象的原型对象，返回参数对象本身。

`Object.getPrototypeOf`方法与`Object.setPrototypeOf`方法配套，用于读取一个对象的原型对象。

```js
let proto = {};
let obj = { x: 10 };
Object.setPrototypeOf(obj, proto);

Object.getPrototypeOf(obj); // proto
```

### 4.4 Object.keys()，Object.values()，Object.entries()

ES5 引入了`Object.keys`方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。

ES2017引入，`Object.values`方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。

ES2017引入，`Object.entries`方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。

## 5 Object 实例新增属性

`__proto__`属性（前后各两个下划线），用来读取或设置当前对象的原型对象。

`__proto__`前后的双下划线，说明它本质上是一个内部属性，而不是一个正式的对外的 API，只是由于浏览器广泛支持，才被加入了 ES6。

# Class 语法

## 1. 定义类

JavaScript 中，定义构造函数与普通函数并无差别，这种写法跟传统的面向对象语言（比如 C++ 和 Java）差异很大，很容易让新学习这门语言的程序员感到困惑。

ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过 class 关键字，可以定义类。

```js
//定义类
class Person {
  //把所有的属性在这里声明 属性会添加到实例上
  name = null;
    age = null;

  //定义构造方法 实例化的时候自动执行
  constructor(name, age=10) {
    this.name = name;
    this.age = age;
  }

  // 定义方法，会添加到原型上
  say() {
    console.log('MY Name is '+this.name);
  };

  eat() {
    console.log('My age is '+this.age);
  }
}


console.log(typeof Person);  // function
Person(); // 不能被调用，会报错

// 实例化
let p = new Person();
p instanceof Person; // true；
```

上面方式定义的类，具有如下特点：

1）ES6 的类，本质上还是构造函数，使用 typeof 查看类的类型，返回`function`。

2）类可以被实例化，但是不能被调用，这是与之前的构造函数的主要区别。

3）上述代码中定义的属性，会添加到类的实例上。

4）上述代码中定义的方法，会添加到类的实例的原型上。

5）constructor 被称之为构造方法，会在实例化的时候自动调用，可用于对属性初始化赋值。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。

6）类中的方法内使用 this，它默认指向类的实例，任然遵循谁调用指向谁的规则。

7）类中可以定义属性和方法，但不能写其他语句，否则会报错；当然，方法的里面就可以写任何的语句了。

## 2 静态方法

方法前面加`static` 关键字，就表示该方法不会添加到实例的原型上，而是添加到类本身上，被称为**静态方法**。

如果静态方法包含 this 关键字，这个 this 默认指向的是类本身，任然遵循谁调用指向谁的规则。

```javascript
class Foo {
  static classMethod() {
    return 'hello';
  }
}

Foo.classMethod() // 'hello'

var foo = new Foo();
foo.classMethod()
// TypeError: foo.classMethod is not a function
```

> **注意：**
>
> 在属性名前面添加 static 关键字也可以创建**静态属性**，也就是给类本身添加属性，但这个语法还在提案中，还处于 Stage3 阶段！

## 3 定义访问器属性

class 语法可以直接添加访问器属性，不用像 ES5 那样使用 Object.defineProperty() 方法。

下面代码添加了访问器属性 fullName。

```js
//定义类
class Person {
  //定义属性
  firstName = '尼古拉斯';
    lastName = '赵四';

  //当获取fullName属性值的时候 自动调用
  get fullName() {
    return this.firstName + '·' + this.lastName;
  }

  //当设置fullName属性值的时候 自动调用  接受一个参数，是要给fullName属性设置的新值
  set fullName(val) {
    this.firstName = val.split('·')[0];
    this.lastName = val.split('·')[1];
  }
}
```

## 4 Class 实现继承

### 4.1 使用 extends 关键字实现继续

class 可以通过 extends 关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。

```javascript
class Point {
}

class ColorPoint extends Point {
}

let p = new Point();
let cp = new ColorPoint();

cp.__proto__ instanceof Point; // true
ColorPoint.__proto__ === Point;  // true
```

上面代码中，ColorPoint 这个类就继承了 Point 这个类，我们把 ColorPoint 称为**子类**，Point 称为**父类**。

继承之后，如有如下特点：

1）子类的实例的原型会指向父类的一个实例，所以子类的实例会继承父类实例的属性和方法。

2）子类本身的原型会指向父类，所以子类也会继承父类的静态方法。

> **注意：**一个父类可以有多个子类，但一个子类只能有一个父类。

### 4.2 方法和属性的重写

子类中如果定义了与父类中同名的属性和方法，那么子类的实例就会按照子类中定义的来。我们称为**方法重写**和**属性重写**。

```js
class Point {
  name = 'Point';
    age = 100;

  say() {
    console.log('Point say')
  }

  sleep() {
    console.log('Point sleep');
  }

}

class ColorPoint extends Point {
  name = 'Color Point';
  grade = '115';

  eat() {
    console.log('ColorPoint eat');
  }

  say() {
    console.log('ColorPoint say');
  }
}


let cp = new ColorPoint();

console.log(cp);  // {name: "Color Point", age: 100, grade: "115"}
cp.sleep(); // Point sleep
cp.say(); // ColorPoint say
```

### 4.3 super关键字

前面我们学到过，super 这个关键字与 this 是相对的，super 指向方法所属对象的原型。

除此之外，在子类的构造方法中，super 可以作为函数调用，代表父类的构造方法；子类重写父类构造方法的时候通过调用 super 可以把父类构造方法中的代码执行一遍。

ES6 要求，子类的构造函数必须执行一次 super 函数。

```javascript
class A {}

class B extends A {
  constructor() {
    super();
  }
}
```

作为函数调用，super() 只能用在子类的构造函数之中，用在其他地方就会报错。

### 4.4 继承原生构造函数

ES6 允许继承原生构造函数定义子类

```javascript
class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }
}

var arr = new MyArray();
arr[0] = 12;
arr.length // 1
```

# 新增原始类型 Symbol

## 1 创建 Symbol 类型的数据

1）Symbol 是 JavaScript 新增的一种**原始类型**数据，typeof 会返回 `symbol`。

2）通过调用 Symbol() 可以创建 Symbol 类型的数据，注意， Symbol 只能调用不能实例化。

```js
//创建 Symbol
let s = Symbol();

//new Symbol(); // 报错！Symbol is not a constructor

typeof s; // symbol
```

3）每创建一个 symbol 类型的数据，都是唯一的。其实，对象类型的数据，每创建一个实例也都是唯一了，而 symbol 作为一个原始类型，具有了对象类型的这一个特点。

```js
let s1 = Symbol();
let s2 = Symbol();
s1 === s2; // false
```

4）创建 symbol 类型数据的时候，可以通过参数的形式指定描述信息。

```js
let s1 = Symbol("UP");
let s2 = Symbol("UP");

s1 === s2; // false  描述相同的 symbol 数据依然是不同的。
```

## 2 作为对象的属性名

对象的属性名要求是字符串或者 symbol 类型的数据。作为对象的属性名是 symbol 类型的数据最主要的作用。

注意，在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。

```js
let up = Symbol('up');

let game = {
  name: "飞机大战",
  [up]: function(){
    console.log("向上")
  },
  [Symbol('down')]: function(){
    console.log("向下");
  }
};

game[up]();
```

symbol 类型的属性名具有如下特点：

1）for...in、for...of、Object.keys()、Object.values()、Object.entries()、Object.getOwnPropertyNames() 这些方法都取不到属性名时Symbo l类型的属性。

2）`Object.getOwnPropertySymbols()` 专门获取类型是 symbol 的属性名。

3）Reflect.ownKeys(obj) 获取对象自身所有的属性（不论属性名是什么类型）。

## 3 Symbol 本身的属性和方法

### 3.1 Symbol.for() 方法

`Symbol.for()`方法创建一个 symbol 类型的数据，它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局。

```js
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');

s1 === s2 // true
```

`Symbol.for()`与`Symbol()`这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。`Symbol.for()`不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的`key`是否已经存在，如果不存在才会新建一个值。

### 3.2 Symbol.keyFor() 方法

`Symbol.keyFor()`方法返回一个已登记的 Symbol 类型值的`key`。

```js
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"

let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined
```

### 3.3 内置属性

除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法。

| 属性                      | 含义                                                         |
| ------------------------- | ------------------------------------------------------------ |
| Symbol.hasInstance        | 对象的`Symbol.hasInstance`属性，指向一个内部方法，当其他对象使用`instanceof`运算符，判断是否为该对象的实例时，会调用这个方法。比如，`foo instanceof Foo`在语言内部，实际调用的是`Foo[Symbol.hasInstance](foo)`。 |
| Symbol.isConcatSpreadable | 对象的`Symbol.isConcatSpreadable`属性等于一个布尔值，表示该对象用于`Array.prototype.concat()`时，是否可以展开。 |
| Symbol.species            | 对象的`Symbol.species`属性，指向一个构造函数。创建衍生对象时，会使用该属性。 |
| Symbol.match              | 对象的`Symbol.match`属性，指向一个函数。当执行`str.match(myObject)`时，如果该属性存在，会调用它，返回该方法的返回值。 |
| Symbol.replace            | 对象的`Symbol.replace`属性，指向一个方法，当该对象被`String.prototype.replace`方法调用时，会返回该方法的返回值。 |
| Symbol.search             | 对象的`Symbol.search`属性，指向一个方法，当该对象被`String.prototype.search`方法调用时，会返回该方法的返回值。 |
| Symbol.split              | 对象的`Symbol.split`属性，指向一个方法，当该对象被`String.prototype.split`方法调用时，会返回该方法的返回值。 |
| Symbol.iterator           | 对象的`Symbol.iterator`属性，指向该对象的默认遍历器方法。    |
| Symbol.toPrimitive        | 对象的`Symbol.toPrimitive`属性，指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。 |
| Symbol.toStringTag        | 对象的`Symbol.toStringTag`属性，指向一个方法。在该对象上面调用`Object.prototype.toString`方法时，如果这个属性存在，它的返回值会出现在`toString`方法返回的字符串之中，表示对象的类型。也就是说，这个属性可以用来定制`[object Object]`或`[object Array]`中`object`后面的那个字符串。 |
| Symbol.unscopables        | 对象的`Symbol.unscopables`属性，指向一个对象。该对象指定了使用`with`关键字时，哪些属性会被`with`环境排除。 |

```js
// 1 Symbol.hasInstance
class MyClass {
  [Symbol.hasInstance](foo) {
    return foo instanceof Array;
  }
}
[1, 2, 3] instanceof new MyClass() // true


// 2 Symbol.isConcatSpreadable 
let arr1 = ['c', 'd'];
['a', 'b'].concat(arr1, 'e') // ['a', 'b', 'c', 'd', 'e']
arr1[Symbol.isConcatSpreadable] // undefined
let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
['a', 'b'].concat(arr2, 'e') // ['a', 'b', ['c','d'], 'e']

// 3 Symbol.species
class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}
const a = new MyArray();
const b = a.map(x => x);
b instanceof MyArray // false
b instanceof Array // true

// 4 Symbol.match
class MyMatcher {
  [Symbol.match](string) {
    return 'hello world'.indexOf(string);
  }
}
'e'.match(new MyMatcher()) // 1

// 5 Symbol.replace 
const x = {};
x[Symbol.replace] = (...s) => console.log(s);
'Hello'.replace(x, 'World') // ["Hello", "World"]

// 6 Symbol.search
class MySearch {
  constructor(value) {
    this.value = value;
  }
  [Symbol.search](string) {
    return string.indexOf(this.value);
  }
}
'foobar'.search(new MySearch('foo')) // 0

// 7 Symbol.split
class MySplitter {
  constructor(value) {
    this.value = value;
  }
  [Symbol.split](string) {
    let index = string.indexOf(this.value);
    if (index === -1) {
      return string;
    }
    return [
      string.substr(0, index),
      string.substr(index + this.value.length)
    ];
  }
}
'foobar'.split(new MySplitter('foo')); // ['', 'bar']
'foobar'.split(new MySplitter('bar'));    // ['foo', '']
'foobar'.split(new MySplitter('baz'));    // 'foobar'

// 8 Symbol.iterator
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable] // [1, 2, 3]

// 9 Symbol.toPrimitive
let obj = {
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return 123;
      case 'string':
        return 'str';
      case 'default':
        return 'default';
      default:
        throw new Error();
     }
   }
};
2 * obj // 246
3 + obj // '3default'
obj == 'default' // true
String(obj) // 'str'


// 10 Symbol.toStringTag
class Collection {
  get [Symbol.toStringTag]() {
    return 'xxx';
  }
}
let x = new Collection();
Object.prototype.toString.call(x) // "[object xxx]"

// 11 Symbol.unscopables
class MyClass {
  foo() { return 1; }
  get [Symbol.unscopables]() {
    return { foo: true };
  }
}
var foo = function () { return 2; };
with (MyClass.prototype) {
  foo(); // 2
}
```

# 新增 Set 和 Map 类型

## 1 Set数据结构

### 1.1 定义

ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

### 1.2 Set构造函数

Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。

```js
// 例一
const s = new Set();
[...s]; // []

// 例二
const set = new Set([1, 2, 3, 4, 4]);
[...set]; // [1, 2, 3, 4]

// 例三
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size // 5

// 例四
const set = new Set(document.querySelectorAll('div'));
set.size // 56
```

### 1.3 Set实例的方法和属性

| 方法或属性    | 含义                                           |
| ------------- | ---------------------------------------------- |
| add(value)    | 添加某个值，返回 Set 结构本身。                |
| delete(value) | 删除某个值，返回一个布尔值，表示删除是否成功。 |
| has(value)    | 返回一个布尔值，表示该值是否为Set的成员。      |
| clear()       | 清除所有成员，没有返回值。                     |
| keys()        | 返回键名的遍历器                               |
| values()      | 返回键值的遍历器                               |
| entries()     | 返回键值对的遍历器。                           |
| forEach()     | 使用回调函数遍历每个成员。                     |
| size 属性     | 返回Set实例的成员总数。                        |

### 1.4 Set 应用

#### 实现数组去重

```js
var arr = [100,200,200,300, 'hello', 'hello', 0, '', true, false, {}, {}];
var newArr = [...new Set(arr)];
```

## 2.WeakSet 数据结构

### 2.1 定义

WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。

1）首先，WeakSet 的成员只能是对象，而不能是其他类型的值。

2）WeakSet 不可遍历

### 2.2 WeakSet 构造函数

作为构造函数，WeakSet 可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数。该数组的所有成员，都会自动成为 WeakSet 实例对象的成员。

作为参数的数组（或者具有 iterable 接口的其他数据结构）的成员只能是对象。

```js
const ws1 = new WeakSet();

const a = [[1, 2], [3, 4]];
const ws2 = new WeakSet(a);    // WeakSet {[1, 2], [3, 4]}
```

### 2.3 WeakSet 实例的方法

| 方法名        | 含义                                                |
| ------------- | --------------------------------------------------- |
| add(value)    | 向 WeakSet 实例添加一个新成员                       |
| delete(value) | 清除 WeakSet 实例的指定成员。                       |
| has(value)    | 返回一个布尔值，表示某个值是否在 WeakSet 实例之中。 |

## 3. Map数据结构

### 3.1 定义

它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。

### 3.2 Map构造函数

```javascript
const map = new Map();
```

任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数

```javascript
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

const set = new Set([
  ['foo', 1],
  ['bar', 2]
]);
const m1 = new Map(set);
```

### 3.3 Map 实例的方法和属性

| 方法或属性      | 含义                                                         |
| --------------- | ------------------------------------------------------------ |
| set(key, value) | 设置键名 key 对应的键值为 value，然后返回整个 Map 结构。 如果key已经有值，则键值会被更新，否则就新生成该键。 set 方法返回的是当前的Map对象，因此可以采用链式写法。 |
| get(key)        | get 方法读取 key 对应的键值，如果找不到 key，返回undefined。 |
| has(key)        | has 方法返回一个布尔值，表示某个键是否在当前 Map 对象之中    |
| delete(key)     | delete 方法删除某个键，返回true。如果删除失败，返回false。   |
| clear()         | clear 方法清除所有成员，没有返回值。                         |
| keys()          | 返回键名的遍历器。                                           |
| values()        | 返回键值的遍历器。                                           |
| entries()       | 返回所有成员的遍历器。                                       |
| forEach()       | 遍历 Map 的所有成员。                                        |
| size 属性       | 返回 Map 结构的成员总数                                      |

## 5 WeakMap

### 5.1 定义

WeakMap结构与Map结构类似，也是用于生成键值对的集合，WeakMap 与Map 的区别有两点：

1）WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。

2）不可遍历。

### 5.2 WeakMap 构造函数

```js
// WeakMap 可以使用 set 方法添加成员
const wm1 = new WeakMap();
const key = {foo: 1};
wm1.set(key, 2);
wm1.get(key) // 2

// WeakMap 也可以接受一个数组，
// 作为构造函数的参数
const k1 = [1, 2, 3];
const k2 = [4, 5, 6];
const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
wm2.get(k2) // "bar"
```

### 5.3 WeakMap 实例的方法

| 方法名          | 含义                                                         |
| --------------- | ------------------------------------------------------------ |
| set(key, value) | 添加或修改值                                                 |
| get()           | 根据 key，获取 value                                         |
| has(key)        | has 方法返回一个布尔值，表示某个键是否在当前 WeakMap 对象之中 |
| delete()        | delete 方法删除某个键，返回true。如果删除失败，返回false。   |

# Iterator 遍历器

## 1 iterator 遍历器对象

### 1.1 什么是遍历器

1）iterator （遍历器）是一种接口，为各种不同的数据结构提供统一的访问机制，任何数据结构只要部署 iterator 接口，就可以完成遍历操作。

2）每个 iterator （遍历器）对象都有一个 next() 方法。

3）iterator （遍历器）对象内部存在一指针， 指向起始指向遍历器的第一个数据， 调用 next()，会取出指针指向的数据，并且指针下移。

4）每一次调用 next() 方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含 `value` 和 `done` 两个属性的对象。其中，`value` 属性是当前成员的值，`done` 属性是一个布尔值，表示遍历是否结束。

```js
var set = new Set([100,200,300,400,500]);
var setIterrator = set.keys();
let res = null;
do {
  res = setIterrator.next();
  if (res.value !== undefined) {
    console.log(res.value);
  }
} while(!res.done);
```

### 1.2 如何得到一个遍历器对象

1）Array类型、Set类型、Map类型的对象，都有三个方法， keys()、values()、entries() 都返回 iterator（遍历器） 对象。

2）字符串的 matchAll() 也返回 iterator（遍历器）对象

## 2 iterable 可遍历对象

### 2.1 什么是 iterable 可遍历对象

1）把部署了 iterator（遍历器对象） 接口的数据结构，称之为 iterable（可遍历对象）。

2）iterator 接口部署在了数据结构的 Symbol.iterator 属性上，换句话说一个对象，只有具有 Symbol.iterator 属性，且该属性指向一个返回 iterator 的函数， 该对象就是 iterable（可遍历对象）。

```js
const obj = {
  [Symbol.iterator] : function () {
    return {
      next: function () {
        return {
          value: 1,
          done: true
        };
      }
    };
  }
};
```

### 2.2 原生实现了 iterator 接口的数据结构 （可遍历对象）

```
Array
Set
Map
String
Arguments
NodeList
HTMLcollection
```

### 2.3 调用 iterator 接口的场合

1）解构赋值

2）扩展运算符

3）yield*

4）由于数组的遍历会调用遍历器接口，所以任何接受数组作为参数的场合，其实都调用了遍历器接口。下面是一些例子。

```
- for...of
- Array.from()
- Map(), Set(), WeakMap(), WeakSet()（比如new Map([['a',1],['b',2]])）
- Promise.all()
- Promise.race()
```

## 3 for ... of

iteator（遍历器对象） 和 iterable （可遍历对象）都可以使用 for ... of 进行遍历。

```js
const arr = ['red', 'green', 'blue'];

for(let v of arr) {
  console.log(v); // red green blue
}

for (let pair of arr.entries()) {
  console.log(pair);
}
```

## 4 转为纯数组

iteator（遍历器对象） 和 iterable （可遍历对象）都可以转为数组。

```
[...iterrator 对象]
Array.from(iterator 对象)

[...iterable 对象]
Array.from(iterable 对象)
```

# Generator 生成器

## 1 什么是生成器

generator（生成器）就是生成 （iterator）遍历器的函数。

## 2 定义生成器

```js
function* 生成器名() {
     yield 值;
     yield 值;
     yield 值;
     yield 值;
}
```

## 3 yield 关键字

1）yeild 关键字返回一个值， 遍历的时候每次得到就是 yield 的值。

2）调用 next()，执行到 yield 就会停止； 下一次调用 next()，执行到下一个 yield 停止。

> 调用生成器函数的时候，函数内代码不会执行；当调用 next() 的时候，才开始执行生成器函数内的代码； 执行到 yield 停止。

## 4 使用生成器函数给对象部署 iterator 接口

```js
let obj = {
    name: '曹操',
    age: 12,
    sorce: 90,
    height: 170
};

// 把obj变为一个 iterable
// 部署iterator接口
obj[Symbol.iterator] = function* (){
    for (let i in obj) {
        yield [i, obj[i]];
    }
};

for (let i of obj) {
    console.log(i);
}
```

# ES6模块

## 1 概述

历史上，JavaScript 一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。

在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器。

## 2 ES6 Module使用

ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。

### 2.1 模块中导出数据

```js
// module2.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
// module2.js
function say() {}
function eat() {}

export default {
  say,
  eat
}
```

### 2.2 导入模块

```js
import {firstName, lastName, year} from './module1.js';
import myModule from './module2.js';
```

## 3. 浏览器中Module的应用

下列浏览器版本或以上版本已经开始支持 Module：

- Safari 10.1
- Chrome 61
- Firefox 54 打开 `about:config`启用 dom.modules.enabled
- Edge 15 打开 `about:flags`启用“实验性 Java 功能”

浏览器加载 ES6 模块，也使用`<script>`标签，但是要加入`type="module"`属性。