# this指向

正常情况下，this的指向分为以下几种情况

1. 如果是个构造函数，this指向新生成的对象
2. 如果是个箭头函数，this指向函数声明位置处，外面包裹着他的**函数**，
3. 如果函数调用，但是没有显式的调用者，默认为window（全局），不管他的位置在哪里，嵌套有多深
4. 如果函数调用，有显式调用者，则指向调用者
5. 通过call 、bind 、 apply 显式改变

### 迷惑性较高

```js
const obj = {
    dev: 'bfe',
    a: function() {
        return this.dev
    },
    b() {
        return this.dev
    },
    c: () => {
        return this.dev
    },
    d: function() {
        return (() => {
            return this.dev
        })()
    },
    e: function() {
        return this.b()
    },
    f: function() {
        return this.b
    },
    g: function() {
        return this.c()
    },
    h: function() {
        return this.c
    },
    i: function() {
        return () => {
            return this.dev
        }
    }
}

console.log(obj.a())
console.log(obj.b())
console.log(obj.c())
console.log(obj.d())
console.log(obj.e())
console.log(obj.f()())
console.log(obj.g())
console.log(obj.h()())
console.log(obj.i()())
```

### 解析

相同的函数

```js
const obj = {
  dev: 'bfe',
  a: function() {
    return this.dev
  },
  b() {
    return this.dev
  },
}

console.log(obj.a()) // bfe
console.log(obj.b()) // bfe
```

箭头函数

```js
const obj = {
  dev: 'bfe',
  c: () => {
    //当我们使用一个箭头函数作为对象属性，他创造出一个新的上下文环境，this指向window，this.dev不存在
    return this.dev
  },
}
console.log(obj.c()) // undefined
```

立即执行函数与箭头函数

```js
const obj = {
  dev: 'bfe',
  d: function() {
    //立即执行函数和箭头函数同时使用，立即执行函数只用于执行箭头函数，this会以箭头函数为准，指向d:function()
    return (() => {
      return this.dev
    })()
  },
  e: function() {
    return this.d()
  },
}
console.log(obj.d()) // bfe
console.log(obj.e()) // bfe
const obj = {
  dev: 'bfe',

  b() {
    return this.dev
  },

  f: function() {
   	//这里 被解析为两部分，b() {return this.dev}和()()，合在一起就是(b() {return this.dev})()
    //变成了一个立即执行函数，无显式调用者，this指向window
    return this.b
  },
  g: function() {
   //这里也可以拆分成两部分，() => { return this.dev }和()()，但是这里要注意箭头函数，箭头函数的this只跟他声明的地方的，包裹着他的函数有关，跟其他无关，所以this指向window
    return this.c()
  },
  h: function() {
   	//同 g:function一样
    return this.c
  },
}


console.log(obj.f()()) // undefined
console.log(obj.g()) // undefined
console.log(obj.h()()) // undefined
```

Finally nested arrow functions

```js
const obj = {
  dev: 'bfe',
  i: function() {
    return () => {
      return this.dev //箭头函数，this指向声明位置的包裹他的函数，所有this指向i:function
    }
  }
}

console.log(obj.i()()) // bfe
```

**总结：**this的指向

- 跟调用方式有关
  - 构造函数
  - 调用函数
- 跟调用者有关
  - 有显式调用者
  - 无显式调用者

**举例：**函数调用（指向window） 对象方法（对象） 构造函数（实例化出来的对象） 定时器调用（全局） 匿名函数（window） 

原型中的this指向调用他的对象不指向本身



## 笔记中有不对的地方，请斧正，谢谢
