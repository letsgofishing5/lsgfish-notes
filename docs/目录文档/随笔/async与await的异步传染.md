::: info 关键字

promise、async、await、异步

:::

## async/await的异步传染性

传染性案例

```js
async function getUser(){
    return await fetch("./index.json")
}
async function m1(){
    return await getUser()
}
async function m2(){
    return await m1()
}
async function m3(){
    return await m2()
}
/**
 * 函数调用，需要一层一层使用async/await，异步传染性极强
 */
async function main(){
    return await m3()
}
```

## 解决方案
通过抛出错误，然后在捕获这个错误后，自动的调用函数，再次获取第一次请求的结果

```javascript
function getJson() {
    return fetch("./index.json")
}
function run(func) {
    console.log('执行了run ');

    cache = {
        state: "pending",
        value: null
    }
    // 先保存改造前的fetch
    const oldFetch = window.fetch

    window.fetch = function (...args) {
        console.log('走了请求fetch');

        // 判断缓存
        if (cache.state === "fulfilled") {
            return cache.value
        } else if (cache.state === "rejected") {
            throw cache.value
        }
        // 发送真实请求
        const promise = oldFetch(...args).then(resolve => {
            cache.state = "rejected"
            cache.value = resolve
        }, reject => {
            cache.state = "rejected"
            cache.value = reject
        })
        // 抛出错误
        throw promise
    }
    // 执行函数入口
    try {
        func()
    } catch (err) {
        if (err instanceof Promise) {
            err.then(func, func)
        }
    }
}
run(getJson)
```

::: info 解决方案的理解

首先备份fetch的方法，然后对fetch方法进行改造
fetch方法体中同步代码立即抛出 Promise 对象，目的是达到代码同步执行，同时还可以获取 异步的操作对象
然后在外部方法调用时，通过try/catch方式，去捕获内部抛出的 Promise 对象
然后通过 Promise.then(resolve,reject) 的方式监听内部抛出的 Promise 对象的状态，
而内部 Promise 在获取返回结果后，对缓存做了赋值操作，当请求再次调用时，判断缓存是否有数据，有数据则走缓存

:::