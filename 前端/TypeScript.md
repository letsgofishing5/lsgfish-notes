# TypeScript

### 环境搭建

1. 安装node.js
2. 使用npm全局安装typescript
   1. 执行：npm i -g typescript
3. 创建ts文件
4. 使用tsc对ts文件进行编译
   1. 进入ts文件所在目录，cmd
   2. 执行命令：tsc xxx.ts，进行文件编译

### 语法

#### 类型声明

```ts
//声明一个变量a，并赋值
let a : number = 123
let b = 123//这样写和第一种写法是一样的，ts可以自动对变量进行类型检测
```

##### 函数声明

```ts
function fun(a:number,b:number):number{//a,b类型是number，fun函数的返回值类型是：number类型
    retrun a+b;
}
```

#### ts中的类型

1. 字面量

   ```ts
   let a : 10//10 就是字面量，a只能是10，赋值其他数字或者其他内容则报错，类似于常量
   //常用场景
   let b : 'male' | 'female'//表示要么是male，要么是female。联合类型
   ```

2. any

   ```ts
   //any表示的是任意类型，设置了any相当于对该变量关闭了TS的类型检测
   //使用any相当于不使用ts，就是js
   let a;//隐式声明any
   let a : any;//显示声明any
   ```

3. unknown

   ```ts
   //unknown表示未知类型，不能直接赋值给其他变量，可以通过typeof来解决赋值问题
   let e : unknown
   let s : string
   if(typeof e === 'string'){
       s = e
   }
   //第二种方式：类型断言，用来告诉解析器变量的实际类型
   //语法：
   // 变量 as 类型
   s = e as string
   ```

4. void、never

   ```ts
   //一般用于函数返回值，函数返回值没有声明时，为void。可以自动类型检测
   //如果直接声明了void，则表示没有返回值，空值（undefined）
   
   //never 表示永远不会返回结果，没有值
   function fun():never{
       throw new Error("报错了")
   }
   ```

5. object

   ```ts
   //object 表示的是一个js对象
   let a : object
   a = {}
   a = function(){
       
   }
   //{} 用来指定对象中可以包含哪些属性
   //语法：{属性名：属性值，属性名：属性值}
   //在属性名后面加上?，表示属性是可选的，如果没有?号，则必须保持属性一致
   let b : {name:string,age?:number}
   b = {
       name: '孙悟空', age: 18
   }
   
   //[propName: string]: any 表示任意类型的属性
   let c: {name: string,[propName: string]:any}
   c = {
       name:'猪八戒'，
       age:18,
       gender:'男'
   }
   
   //设置函数结构的类型声明
   let d : (a:number,b:number)=>number;//表示声明一个函数，有两个number类型的参数，返回值也是number类型
   
   d = function(n1,n2){
       return n1+n2
   }
   ```

6. Array

   ```ts
   let a : string[]
   a = ['a','b','c']
   
   let b : Array<number>;
   b = [1,2,3,4]
   ```

7. 元组，元组就是固定长度的数组

   ```ts
   let a: [string,string]
   a = ['a','b']
   ```

8. enum 枚举

   ```ts
   let i:{name:string,gender:string}
   i={
       name: '孙悟空',
       gender:'男'
   }
   ```

### TS编译

执行：tsc test.ts -w

持续监视编译ts文件

在目录下执行：tsc 命令来编译整个目录下的文件

需要一个配置文件：tsconfig.json

```tsx
//配置文件是一个json，输入一个{}
//ts的json文件可以写注释
//include：表示包含
//exclude：表示排除
{
	"include":[
        "./src/**/*" //双*号表示任意目录，一个*表示任意文件
    ],
    "exclude":[
        "./src/hello/**/*" //表示hello下的文件不需要被编译
    ]
}
```

执行：tsc -w 对整个目录下的文件进行编译监视

##### 编译选项

outFile："./dist" //将代码合并到一个文件中

allowJS：是否对 JS 文件进行编译（Boolean）

checkJs：检查JS语法是否符合语法规范（Boolean）

removeComments：是否移除注释

noEmit：不生成编译后的文件

noEmitOnError：当有错的时候不生成编译后的文件

alwaysStrict：设置编译后的文件是否开启严格模式：use strict

strict：所有严格检查总开关，如果设置了true，其他选项可以不用设置都为true

