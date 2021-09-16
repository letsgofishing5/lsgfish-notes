### TypeScript

`ts`是`js`的超集，始于`js`，归于`js`

`ts`是静态类型，编译阶段会经行类型检查

ts是弱类型，类型系统会隐式转换

### 安装

```bash
#全局安装
npm install -g typescript
#查看版本
tsc -v
#项目生成配置文件
tsc --init
#编译
tsc
```

### 类型声明 

类型分两大类：原始类型（Primitive）和对象类型（Object）

原始类型又分为：布尔值、数值、字符串、`null`、`undefined` 以及 ES6 中的新类型 [`Symbol`](http://es6.ruanyifeng.com/#docs/symbol) 和 ES10 中的新类型 [`BigInt`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)。

#### 主动声明类型

```ts
let num :number =  123
let numStr :number | string = 123  //联合类型，即一个变量声明多个类型
```

#### 类型推导

```ts
//类型推导仅在初始化时赋值（没有声明类型情况下）时生效，如果初始化未赋值，类型为any
let bool = true
console.log(typeof bool)
```



### 接口

#### 接口与对象

```ts
//定义接口
interface Person{
    name:string;
    age:number;
}
//使用接口 
let p :Person = {
    name:"张三",
    age:23
}
```

**使用接口时，属性不能多也不能少，要保持一致**

#### 接口与函数

```ts
interface Person{
    (str:string):void
}
let fn:Person = function(str:string):void{
    console.log("void表示没有 返回值")
}
```

#### 接口与 类

```ts
interface Person{
    say():void
}
class Xiaoming implement Person{
    name:string
    constructor(name:string){
        this.name = name
    }
    say(){
        console.log("接口中的方法，必须要在类中实现")
    }
}
```



####  可选属性

使用 ?: 组合符号，可以达到**可选属性**条件。

可选属性：即可以用，也可以不用，不用不会报错

```ts
interface Person{
    name:string;
    age?:number;
}
let p :Person = {
    name:"张三",
}
```

#### 任意可选属性

使用 `[propName: string]:any` 定义了任意属性属性名为 `string` 类型，属性值为`any`类型。

这个任意属性，可以输入**任意数量**、**任意属性名称**，属性值类型为`any`的属性

一旦确认了**任意属性的类型**，那么接口中的其他**已确认类型**的**属性**，他们的类型必须是**任意属性**的类型的**子集**。可以给任意属性使用**联合属性**来解决这个问题

可以声明多个类型：`[propName: string]:number | string`

`propName`字段可以随意起名，写index、prop等等，都是可以的

```ts
interface Person {
    name: string;
    [propName: string]: any;
}
//不使用任意属性
let tom: Person = {
    name: 'Tom',
};
//使用任意属性
let jk:Person = {
    name: 'jk',
    age: 23
}
```

#### 只读属性

只读属性，只有在初始化时被赋值，之后属性值不可更改。类似于常量

使用`readonly`修饰属性

```ts
interface Person{
    readonly id:number
}
let p :Person = {
    id:12
}
p.id = 24   //error TS2540: Cannot assign to 'id' because it is a read-only property.
```

###  函数

```ts
function sum(x: number, y: number): number {
    return x + y;
}
sum(1, 2, 3);
```

#### 接口定义函数

```ts
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
```

#### 可选参数

前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选的参数呢？

与接口中的可选属性类似，我们用 `?` 表示可选的参数：

```ts
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```

需要注意的是，可选参数必须接在必需参数后面。换句话说，**可选参数后面不允许再出现必需参数了**

#### 可变参数（剩余参数）

`items` 是一个数组。所以我们可以用数组的类型来定义它：

```ts
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a = [];
push(a, 1, 2, 3);
```

#### 参数默认值

```ts
function buildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```

#### 重载

重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。

比如，我们需要实现一个函数 `reverse`，输入数字 `123` 的时候，输出反转的数字 `321`，输入字符串 `'hello'` 的时候，输出反转的字符串 `'olleh'`。

利用联合类型，我们可以这么实现：

```ts
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```

**然而这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。**

这时，我们可以使用重载定义多个 `reverse` 的函数类型：

```ts
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```
