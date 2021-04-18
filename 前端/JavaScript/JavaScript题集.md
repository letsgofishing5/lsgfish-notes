###  this 

```js
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // 结果是什么？
/*
这是因为设置 this 的规则不考虑对象定义。只有调用那一刻才重要。

这里 makeUser() 中的 this 的值是 undefined，因为它是被作为函数调用的，而不是通过点符号被作为方法调用。

this 的值是对于整个函数的，代码段和对象字面量对它都没有影响。

所以 ref: this 实际上取的是当前函数的 this。

我们可以重写这个函数，并返回和上面相同的值为 undefined 的 this：
*/
```

