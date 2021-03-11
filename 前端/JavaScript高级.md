# JavaScript高级

## 数据类型

1. 分类

   1. 基本类型
      1. String：任意字符串
      2. Number：任意数字
      3. Boolean：true/false
      4. undefined：undefined
      5. null：null
   2. 对象类型
      1. Object：任意对象
      2. function：一种特别的对象（可以执行）
      3. Array：一种特别的对象（数值下标，内部数据是有序的）

2. 判断

   1. `typeof`：返回**数据类型的字符串表达式**

      ```js
      var a
      console.log(a,typeof a)//'undefined'
      console.log(undefined==='undefined')//false
      ```

      不能判断：`null`与`object`，`object`与`array`

   2. `instanceof`：判断对象的具体类型

   3. ===：全等，不但要内容相等，类型也有一致

## 函数高级

#### 函数的prototype属性

1. 每个函数都有一个`prototype`属性，它默认指向一个`Object`空对象（即称为：原型对象）。原型对象中有一个属性`constructor`，他指向函数对象
2. 给原型对象添加属性（一般都是方法）
   1. 作用：函数的所有实例对象自动拥有原型中的属性（方法）

#### 显示原型与隐式原型

1. 显示：`prototype`
2. 隐式：`__ proto__ `

#### 原型链

原型链本质是隐式原型链

作用：查找对象的属性

#### instanceof

顺着隐式原型链进行对比，只要在一条链上，就是true