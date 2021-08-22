# Promise

### 什么是promise

1. `promise`是`ES6`推出的新的异步编程解决方案，用来解决回调地狱的问题，
2. 它与`async/await`相互配合，从而更好的解决回调地狱问题
3. `promise`可以通过`.then()、.cathc()`的语法链式调用，每次`.then()、.cathc()`语法都会返回一个新的`Promise`对象
4. `promise`对象有三个状态：`pending`（初始状态）、`resolved/fulfilled` （成功状态）、`rejected`（失败状态）
5. `promise`可以通过`resolve`('传递信息')/`reject`('传递信息')改变状态传递信息，传递的信息在`.then()、.cathc()`语法中直接接收到

### promise使用语法

```js
//1，通过构造函数
let promise1 = new Promise((resolve,reject)=>{
    resolve('success')
    reject('error')
})
//2，通过静态方法
let promise2 = Promise.resolve('success')
let promise3 = Promise.reject('error')
```

### Promise使用需要注意

1. `.then()、.cathc()` 方法会返回一新的`Promise`对象的**状态**根据`.then()、.cathc()`语法的**返回值**和有无抛出**异常**决定
   - resolved/fulfilled状态
     - return Promise.resolve('')
     - return 其他任何值（非Promise.reject('')）
     - 没有显式返回值（自动返回undefined）
   - rejected
     - return Promise.reject('')
     - 抛出异常
2. `.then()`语法中的参数，必须是一个**函数**，不能是其他的，否则会直接跳过（忽略）该`.then()`语法，并延续上一个`promise`状态
3. `.finally()`语法，并不会影响到`Promise`执行链，他也不会接收到任何参数

### 题目

从网上拷来的题目，请思考最终的输出结果

##### 1

```js
Promise.resolve(1)
.then(() => 2)
.then(3)
.then((value) => value * 3)
.then(Promise.resolve(4))
.then(data=>{
  console.log(data)
})
```

##### 2

```js
Promise.resolve(1)
.then((val) => {
  console.log(val)
  return val + 1
}).then((val) => {
  console.log(val)
}).then((val) => {
  console.log(val)
  return Promise.resolve(3)
    .then((val) => {
      console.log(val)
    })
}).then((val) => {
  console.log(val)
  return Promise.reject(4)
}).catch((val) => {
  console.log(val)
}).finally((val) => {
  console.log(val)
  return 10
}).then((val) => {
  console.log(val)
})
```



答案：拷贝代码运行一遍，答案自现

# 请斧正

如果文章有写的不对的地方，请斧正，谢谢