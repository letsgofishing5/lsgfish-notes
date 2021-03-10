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

   1. typeof：返回数据类型的字符串表达式

      ```js
      var a
      console.log(a,typeof a)//'undefined'
      console.log(undefined==='undefined')//false
      ```

      不能判断：null与object，object与array

   2. instanceof：判断对象的具体类型

   3. ===：全等，不但要内容相等，类型也有一致