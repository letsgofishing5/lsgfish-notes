## 数据类型

1. 数字类型（number）
2. 字符串类型（string）
3. 数组类型（array）
4. 元组类型（tuple）
5. 枚举类型（enum）
6. 任意类型（any）
7. void 类型
8. never 类型（包括：null 和 undefined）

```tsx
//定义基础类型
const num: number = 1
//定义数组
const arr: number[] = [1, 2]
const arr: Array<number> = [1, 2]
//定义元组
const tup: [number, string] = [1, "2"]
//定义枚举类型
enum mj {
    MAN = '男人', FELMAN = '女人'
}
```

## 函数

### 函数定义

```tsx
//函数定义
function t(): string {
    return "hello world"
}
const fun = function (): string {//匿名函数定义
    return "hello world"
}
function t(arg1: string): string {//有参函数
    return arg1
}
function t(...arg: any): void {//可变参数
    console.log("执行了：", ...arg);
}
function t(arg1?: number): void {//可选参数，一定要放在参数列表的最后面
    console.log("执行了：", arg1);
}
function t(arg1: string = "hello world"): void {//默认参数
    console.log("执行了：", arg1);
}
```

### 函数重载

```ts
//定义重载函数
function css(name: string): string;
function css(age: number): number;
function css(args: any): any {
    if (typeof args === 'string') {
        console.log("我的名字：", args);
        return args
    } else {
        console.log("我的年龄：", args);
        return args
    }
}
```

## 类

```ts
class Person {
    private name: string;
    private age: number;
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    say() {
        console.log(`我的个人信息：姓名：${this.name},年龄：${this.age}`);
    }
    setName(name) {
        this.name = name
    }
    setAge(age) {
        this.age = age
    }
}
```

### 属性修饰符

| 修饰符    | 类中 | 类中、子类 | 类中、子类、类外面 |
| --------- | ---- | ---------- | ------------------ |
| public    | √    | √          | √                  |
| protected | √    | √          |                    |
| private   | √    |            |                    |

### 抽象类

> 使用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法必须也只能在派生类中实现
>
> 抽象类和抽象方法就是用来定义标准的

```ts
abstract class Person {//抽象类
    private name: string;
    private age: number;
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    abstract say()//抽象方法
    static run() {
        console.log("run了")
    }
    setName(name) {
        this.name = name
    }
    setAge(age) {
        this.age = age
    }
}

```

## 接口

> 接口的作用：在面向对象的编程中，接口是一种规范的定义，他定义了行为和动作的规范，在程序设计里，接口起到了一种限制和规范的作用。
>
> 接口不关心这些类的内部数据状态，也不关心这些类里方法的实现细节，他只规定这些类中必须提供某些方法，提供这些方法的类就可以满足实际需要。

```ts
interface Fun {
    name: string;
    age: number
}
function fn(args: Fun): void {
    console.log(args.age, args.name);
}
fn({
    name: '张三',
    age: 12
})
//函数类型接口：对方法传入的参数，以及返回值进行约束
interface fn {
    (key: string, val: string): string
}
var res: fn = function (key: string, val: string): string {
    return key + val
}
console.log(res("str1", "str2"));

//可索引接口：数组、对象的约束（不常用）
interface arr {
    [index: number]: string
}
const array: arr = ['123', '456']

//类 类型接口：对类的约束 和 抽象类有点相似
interface Person {
    name: string;
    eat(): string
}
class P1 implements Person {
    name: string;
    eat(): string {
        console.log("name:", this.name);
        return null
    }
    constructor(name: string) {
        this.name = name
    }
}
const obj = new P1("张三")
obj.eat()
```

## 泛型

> 泛型就是解决 类 接口 方法的复用性、及对不特定数据类型的支持

```ts
//泛型定义
function t<K>(value: K): K {
    return value
}
//泛型接口
interface Test {
    <T>(value: T): T
}
const res: Test = function <T>(val: T) {
    console.log("返回值：", val);
    return val
}
```

## 模块化

> 内部模块被命名为：命名空间，外部模块被命名为：模块。
>
> 模块在其自身的作用域里执行，而不是在全局作用域里。这意味着定义一个模块里的变量，函数，类等，在模块外部是不可见的。除非你明确的使用export形式之一导出。相反，如果想使用其他模块导出的变量，函数，类，接口等，必须要导入他们，使用import形式之一。

### 导入导出

```ts
//fn.ts
export function t2(): string {
    console.log("t2执行了");
    return "hello"
}
function t(): void {
    console.log("t执行了");
}
export {
    t
}

//index.ts
import { t2, t } from "./fn";
t2()
t()
```

### 命名空间

> namespace关键字

```ts
//ns.ts
export namespace A {
    export const a: string = "Hello Typescript"
}
    
//index.ts
import { A } from './ns'
console.log(A.a);

```

## 装饰器

> 装饰器：装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为
>
> 通俗的讲：装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能
>
> 常见的装饰器：类装饰器、属性装饰器、方法装饰器、参数装饰器
>
> 装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可传参）
>
> 装饰器是过去几年中JS最大的成就之一，已是ES7的标准特性之一

```ts
//类装饰器
function zsq(value) {
    console.log(value);
}
@zsq
class Person {
    name: string;
    age: number;
    say() {
        console.log(`${this.name}说话了`);

    }
    eat() {
        console.log(`${this.name}吃饭了`);

    }
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
```

