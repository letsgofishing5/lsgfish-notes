### async

async放置在函数的前面，用来使函数总是返回一个promise

```js
async function f() {
  return 1;
}
```

也可以显式的返回一个promise

```js
async function f() {
  return 1;
}

f().then(alert); 
```



### await

```js
async function f() {
  // 只在 async 函数内工作
  let value = await promise;
  return 1;
}
```

关键字 `await` 让 JavaScript 引擎等待直到 promise 完成（settle）并返回结果。

`await`关键字声明后 ，会一直等到当前代码中的所有操作执行完才执行，这个所有操作包含了各种异步任务

这里的例子就是一个 1 秒后 resolve 的 promise：

```javascript
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // 等待，直到 promise resolve (*)

  alert(result); // "done!"
}

f();
```