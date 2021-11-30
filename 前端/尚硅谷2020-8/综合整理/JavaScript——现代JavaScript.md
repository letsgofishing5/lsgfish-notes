# 基础

### 变量声明

1. 数字、字母下划线，$符组成
2. 不能以数字开头

### 数据类型

JavaScript 中，数据类型分两大类：

1. 原始数据类型（primitive），有七种
   - Number
   - String
   - Boolean
   - Null
   - Undefined
   - BigInt
   - Symbol
2. 对象数据类型（object）
   - Object
   - Array
   - Function
   - ……

#### 检查数据类型的方法

1. typeof
2. Object.prototype.toString.call



#### 类型转换

| 原始值    | 转Number | 转String    | 转Boolean |
| --------- | -------- | ----------- | --------- |
| 1         | 1        | "1"         | true      |
| 0         | 0        | "0"         | false     |
| -1        | -1       | "-1"        | true      |
| "001"     | 001      | "001"       | true      |
| ""        | 0        | ""          | false     |
| null      | 0        | "null"      | false     |
| undefined | NaN      | "undefined" | false     |
| true      | 1        | "true"      | true      |
| false     | 0        | "false"     | false     |

##### 特别的转换规则

1. 数字vs布尔，布尔转换为数字
2. 字符串vs布尔，布尔转换为数字
3. 字符串vs数字，字符串转换为数字
4. 对象vs布尔，对象转到Number原始类型，因为无法转换，所有只能先toString转String类型
5. 当将==应用到null或undefined时，不会发生数字转换。 Null只等于Null或undefined，不等于其他任何东西。 undefined也是
6. JSON没有未定义的值，它被替换为空的JSON数据类型

#### 计算符

1. 取余

   ```js
   let a = 5,b=3
   a % b = 2
   ```

2. 求幂

   ```js
   alert( 2 ** 2 ); // 4  (2 * 2，自乘 2 次)
   alert( 2 ** 3 ); // 8  (2 * 2 * 2，自乘 3 次)
   alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2，自乘 4 次)
   ```

3. 一元运算符 +

   ```js
   //但是如果运算元不是数字，加号 + 则会将其转化为数字。
   // 转化非数字
   alert( +true ); // 1
   alert( +"" );   // 0
   ```

4. 自增/自减

   自增/自减只能应用于变量。

   

#### 类型比较

1. 对不同类型的值进行比较时，JavaScript 会首先将其转化为数字（number）再判定大小。
2. String同类型比较，按字典顺序
3. == 比较时，undefined和null相互等于，跟其他任何值都不等

#### 运算符

1. &&

   ```js
   //判断第一个值是否为假，假则输出第一个值，否则输出第二个值
   console.log(0 && 2)
   ```

2. ||

   ```js
   //判断第一个值是否为真，真则输出第一个值，否则输出第二个值
   console.log(1 && 2)
   ```

3. ？？

   ```js
   //??用于判断第一个值是否已定义，如果是已定义，输出第一个值，否则输出第二个值
   console.log(null ?? 12)
   console.log(1 ?? 21)
   ```

#### 常用的数字类型内置方法

```js
let num = 111
//固定输出两位小数
num.toFixed(2)
//以其他进制输出
num.toString(2)//2进制输出，最高32进制
//其他进制转十进制
parseInt(num,8)//num以八进制身份输入，十进制身份输出
//比较NaN是否相等
Object.is(NaN,NaN)//true
//字符串中提取数字，整数/浮点数
parseInt/parseFloat
//生成范围内的随机数
Math.random()*5//生成一个小于5的随机数
```



### 流程控制语句

流程控制语句：循环

#### 关键字

1. break

   停掉整个循环，跳循环

2. continue

   `continue` 指令是 `break` 的“轻量版”。它不会停掉整个循环。而是停止当前这一次迭代，并强制启动新一轮循环（如果条件允许的话）。


#### switch

 `switch` 从第一个 `case` 分支开始将 `a` 的值与 `case` 后的值进行比较，第一个 `case` 后的值为 `3` 匹配失败。

然后比较 `4`。匹配，所以从 `case 4` 开始执行直到遇到最近的 `break`。

**如果没有 `break`，程序将不经过任何检查就会继续执行下一个 `case`。**

switch中，case比较的时严格相等（===）

```js
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
  case 4:
    alert( 'Exactly!' );
  case 5:
    alert( 'Too big' );
  default:
    alert( "I don't know such values" );
}
```



### 函数

一个函数应该只包含函数名所指定的功能，而不是做更多与函数名无关的功能。

两个独立的行为通常需要两个函数，即使它们通常被一起调用（在这种情况下，我们可以创建第三个函数来调用这两个函数）。

### 对象

对象可以通过`delete`进行属性删除

#### 计算属性

当创建一个对象时，我们可以在对象字面量中使用方括号。这叫做 **计算属性**。

```js
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // 属性名是从 fruit 变量中得到的
};

alert( bag.apple ); // 5 如果 fruit="apple"
```

我们可以在方括号中使用更复杂的表达式：

```js
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
```

#### 检测对象是否存在某个属性

请注意，`in` 的左边必须是 **属性名**。通常是一个带引号的字符串。`in` 会顺着原型链找

`Object.prototype.hasOwnProperty()` 也可以检查对象是否存在某个属性，但是不会顺着原型链找

```js
let user = { name: "John", age: 30 };

alert( "age" in user ); // true，user.age 存在
alert( "blabla" in user ); // false，user.blabla 不存在。
```



### 垃圾回收

1. 引用计数（IE9及以下）
   - 对象有个引用标记
   - 如果对象进行了引用 标记 +1
   - 取消了对象的引用 标记 -1
   - 当引用标记=0的时候，变成垃圾对象，并删除
   - 优点：及时清除垃圾对象
   - 缺点：导致内存泄漏
2. 标记清除（除了IE和新的IE）
   - 标记阶段：从根对象出发，每一个可以从根对象访问到的对象都会被添加一个标记，于是这个对象就被表示为可到达对象
   - 清除阶段：垃圾回收器，会对内存从头到尾进行线性遍历，如果发现有对象没有被标记为可到达对象，那么就将此对象占用的内存收回，并且将原来标记为可到达对象的标识清除，以便下次垃圾回收操作
   - 优点：不会内存泄漏
   - 缺点：深度递归，定时的标记定时清除

## 模块

1. 浏览器中引入模块，使用type=module

```html
<script type='module'>
	import {test} from './test.js'
</script>
```

2. 模块始终默认使用 `use strict`，
3. 每个模块都有自己的顶级作用域
4. 模块代码仅在第一次导入时被解析
   1. 如果同一个模块被导入到多个其他位置，那么它的代码仅会在第一次导入时执行，然后将导出（export）的内容提供给所有的导入（importer）。
   2. 如果某个导入地方修改了 导入模块的值，其他的模块也能看到这个修改。
5. 在一个模块中，`this` 是 undefined
6. 下载外部模块脚本 `<script type="module" src="...">` 不会阻塞 HTML 的处理，它们会与其他资源并行加载。
7. 模块脚本会等到 HTML 文档完全准备就绪（即使它们很小并且比 HTML 加载速度更快），然后才会运行。
8. 保持脚本的相对顺序：在文档中排在前面的脚本先执行

### 导入导出

export有两种导出方式

1. export
2. export default
   1. 默认导出一个模块只能使用一次

import（）

`import(module)` 表达式加载模块并返回一个 promise，该 promise resolve 为一个包含其所有导出的模块对象。我们可以在代码中的任意位置调用这个表达式。
