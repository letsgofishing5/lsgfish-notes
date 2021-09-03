#  promise

基本介绍请看文档

[promise](https://www.runoob.com/w3cnote/javascript-promise-object.html)

[async](https://www.runoob.com/w3cnote/es6-async.html)

### 总结

1. `Promise`构造器中的代码是同步的，只有回调是异步的（微任务）

   ```js
   let res = new Promise((resolve,reject) => {
       console.log('promise内部代码，执行resolve之前')
       resolve('succ')
       console.log('promise内部代码，执行resolve之后')
   })
   res.then(data => {
       console.log(data)
   })
   console.log("执行结束")
   ```

   

2. `promise`的`then`、`catch`都会返回一个新的`promise`，而`finally`不接收任何参数，也不返回`promise`，同时也不会影响到`Promise`执行链向后执行

   ```js
   let res = new Promise((resolve,reject)=>{
       resolve('succ')
   })
   res.then(data=>{
       throw new Error("err")
   }).catch(err=>{
       console.log(err)
       throw new Error("抛出异常")
   }).finally(()=>{
       console.log("finally执行了")
   }).then(data=>{
       console.log("finally后面的then执行了",data)
   }).catch(err=>{
       console.log("捕捉 到异常了",err)
   })
   ```

   

3. `then、catch`中的参数必须是函数，不能是其他的，如果省略两个参数或提供非函数参数，那么当前`then、catch`则将被忽略，但不会产生任何错误。同时也不会打断promise执行链继续向下执行

   ```js
   Promise.resolve(1)
       .then(() => 2)
       .then(3)
       .then((value) => value * 3)
       .then(Promise.resolve(4))
       .then(data => {
       console.log(data)
   })
   ```

   

4. `async`修饰的函数返回一个`promise`

   ```js
   async function test(){
       
   }
   let res = tes()
   console.log(res)
   ```

   

5. `async`修饰的函数、`then`、`catch`如果没有返回值，则默认返回`resolve(undefined)`状态。如果抛出异常或者主动调用`Promise.reject('err')`，则返回`reject('err')`

   ```js
   async function test() {
   
   }
   let res = test()
   res.then(data => {
       return 'succ'
   }).then(()=>{}).then(data => {
       console.log(data)
   })
   console.log(res)
   async function test2(){
       throw new Error("error")
   }
   let res2 = test2()
   console.log(res2)
   res2.catch(()=>{
       
   }).then(data=>{
       console.log(data)
   })
   ```

   

6. async中的await，会等待一个promise的状态，他只为等待返回一个promise的状态，至于其中的异步操作一概不管，并且返回值是promise对象则解析他，如果不是则直接返回对应的值

   ```js
   async function test(){
       setTimeout(()=>{
           console.log("test异步任务setTimeout")
       },1000)
       return 'test'
   }
   async function test2(){
       return new Promise((resolve,reject)=>{
           setTimeout(()=>{
               console.log("test2异步任务执行了setTimeout")
               resolve('test2')
           },1000)
       })
   }
   async function test3(){
       let res1 = await test()
       console.log(res1)
   
       let res2 = await test2()
       console.log(res2)
   }
   test3()
   ```

   

### 最后的练习

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

# 请斧正

