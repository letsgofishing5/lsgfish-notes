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

这个任意属性，可以输入**任意数量**、**任意属性名称**，类型为`any`的属性

也可以不输入属性名称，即不使用

可以声明多个类型：`[propName: string]:number | string`

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

### 数组

