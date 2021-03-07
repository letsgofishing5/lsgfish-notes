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

1.  Symbol的值是唯一的，用来解决命名冲突的问题
2. Symbol值不能与其他数据进行运算
3. Symbol定义的对象属性不能使用for...in循环遍历，但是可以使用Reflect.ownKeys来获取对象的所有键名

```js
//创建Symbol
let s = Symbol();
//第二种方式创建
let s2=Symbol.for("创建");
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

### Promise

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

### 集合

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



### 问题

##### 1.call与apply调用

##### 2.函数中arguments变量

##### 3.this详解

##### 4.生成器函数

##### 5. 读取文件

##### 6. 异步任务





