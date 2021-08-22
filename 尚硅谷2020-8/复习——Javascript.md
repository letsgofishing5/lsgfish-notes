### 原型

1. 原型在执行函数定义的时候就产生了显示原型，在实例化的时候隐士原型也产生了 

2. instanceOf：**运算符**用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

   1. A instanceOf B

   2. 如果B的prototype属性指向的原型对象是A这个实例对象的原型链上的某个对象，返回 true，否则返回false

   3. 例题

      ```js
      function Foo()
      const f1 = new Foo()
      const f2 = new Foo()
      const o1 = new Object()
      const o2 = {}
      //对于 A instanceOf B A是实例对象，B是构造函数
      console.log(Foo instanceOf Object)//true
      console.log(Foo instanceOf Function)//true
      console.log(Object instanceOf Object)//true
      console.log(Function instanceOf Function)//true
      console.log(Function instanceOf Object)//true
      console.log(Object instanceOf Foo)//false
      console.log(f1 instanceOf Function)//false
      console.log(f1 instanceOf Object)//true
      ```

      

### 预解析

函数与变量提升时，同名的变量被忽略

先有作用域，再有预解析，然后有执行上下文环境

### 闭包

##### 1、闭包的理解

闭包产生三条件：

1. 嵌套函数
2. 内部函数引用了外部函数变量
3. 外部函数执行了
4. 内部函数定义的时候，闭包产生。（顺序不能乱）

##### 2、什么是闭包

说白了就是一种引用关系，引用关系不存在于内部。闭包 会延长内部函数的生命周期，当内部函数成为垃圾对象的时候闭包就会消失

##### 3、闭包优缺点

有点：延长内部函数的生命周期

缺点：内存泄漏，内存溢出

### this

call/apply：他们会改变this的指向，同时会调用方法

bind：只改变指向，不调用方法

异步请求：this在严格模式下是undefined，非严格模式下指向window

### 同步与异步

页面渲染：先执行初始化同步代码——执行微任务——执行页面渲染——执行宏任务

### 事件轮询

1. 分线程管理机制
2. 事件队列，先进先出

**宏任务微任务**：任务就是回调，任务的本质就是回调

**宏队列微队列**：队列的本质就是数组，用来保存`n`个**宏/微任务**的队列容器

先执行初始化同步代码，将各个回调放在不同的管理模块中进行管理。管理模块在分线程中执行，不影响`js`执行，在初始化的过程中，有回调任务被调用的时候，管理模块会将他放回待执行的回调队列中等待执行

执行初始化同步代码时，会有各种回调，这些回调都会放到对应的分线程管理模块里，等到了回调任务需要被调用的时候，会进入到事件队列中，等待同步代码执行完成后立刻执行事件队列中的回调。事件队列是先进先出

