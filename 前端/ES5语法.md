### 严格模式 

```js
"use strict"//在开头输入，则表示开启严格模式 ，如果不生效也没有关系，只是一段字符串 ，没有 影响
```

作用：

1. 必须要有`var`声明变量
2. 禁止自定义的函数中的`this`指向`window`
3. 创建`eval`作用域
4. 对象不能有重名的属性

### JSON对象扩展

1. JSON.stringfy(obj/arr)：js对象（数组）转换为json对象（数组）
2. JSON.parse(json)：json对象（数组）转换成js对象（数组）

####  Object对象方法的扩展

```js
Object.create(prototype,[descriptors])
//作用：以指定对象为原型，创建新的对象
//为新的对象指定新的属性，并对属性进行描述
- value：指定值
- writable：标识当前属性值是否是可以修改的，默认是false
- configurable：标识当前属性是否可以被删除，默认是false
- enumerable：标识当前属性是否能用for in 枚举，默认是false
let obj = {
    name:"张三",
    age:23
}
let obj2 = {}
obj2 = Object.create(obj)
console.log(obj2)

obj2 = Object.create(obj,{
    sex:{
        value:"女"，
        writable:true,//sex属性可以被修改
        configurable:true,//sex属性可以被删除
        enumerable:true,//sex可以被for in 枚举出来
    }
})
delete obj2.sex//删除当前属性，如果configurable 不为true，则无法删除
obj2.sex="男"//如果writable不为true，则sex属性不可修改

Object.defineProperties(object,descriptors)
//作用：为指定对象定义扩展多个属性
- get：用来获取当前属性值的回调函数
- set：修改当前属性值的触发的回调函数，并且实参即为修改后的值
存取器属性：setter，getter。一个用来存值，一个用来取值
```

