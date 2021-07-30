### 属性描述符

```js
Object.defineProperty(obj,"o",{
    configurable: true,		//代表属性可配置权限（能不能被删除，能不能被重新定义
    enumerable: true,		//代表属性的可枚举权限（能不能出现在对象的 for in循环中）
    value: 'a',				//代表属性所持有的值
    writable: true,			//代表属性的读写权限
})
```

### 对象的不变性

注意点：再 JS 中所有的方法都是一样的！他们只能够影响对象的直接属性

1. 禁止对象扩展

   Object.preventExtensions(target)

2. 密封对象（深度密封）

   密封对象：在禁止对象扩展的前提上，将对象的原有属性的configurable都调整为false

   Object.seal(target)

3. 冻结对象（深度冻结）

   冻结对象：在密封对象的基础上，将对象的原有属性的writable都调整为false

   Object.freeze(target)