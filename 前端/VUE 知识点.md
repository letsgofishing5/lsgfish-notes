# VUE 知识点

#### 常用属性加载顺序

`Props`，`methods`,`data`和`computed`的初始化都是在`beforeCreated`和`created`之间完成的。

#### export 与 export default 区别

### Array

#### Array.from

1. from方法是用于遍历类数组对象，或将类数组对象转换成数组，是数组的静态方法。

2. 类数组对象:可以通过索引值获取属性值，并且要具备length属性的一类对象

3. 类数组对象不能使用数组的迭代器方法，ES6中拓展的from方法可以将类数组对象转为真正的数组，之后就可以使用数组的常用方法

4. 使用方式:`Array.from(arrLike, fn)`

   1. arrLike:类数组对象
   2. fn:执行的函数，有两个参数:成员值、索引值。作用域是全局作用域
   3. 如果传递的fn参数，此时，from方法的返回值是函数的执行结果
      总结: from方法不仅可以将类数组转为数组，还可以遍历类数组对象

   ```js
   let a = [1,2,3,4]
   let b = Array.from(a,val=>{
       console.log(val)
   })
   console.log(b)
   ```

   

#### Array.of



