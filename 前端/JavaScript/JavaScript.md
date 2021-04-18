#  JavaScript

### 常见知识点

##### 标识符

> 1.标识符可以含有数字，字母，下划线，$
> 2.标识符不可以 以数字开头 ，不能是ES中的关键字或保留字
> 3.var、let（定义局部变量）、const（常量）

##### 运算符

> 1. typeof：console.log(typeof a)；打印变量 a 的类型
>
> 2. in：通过该运算符可以检查对象中是否有该属性,"属性名" in obj，返回true 则表示有，false则表示没有
>
> 3. +:
>
>    ```javascript
>    1）当对非Number类型进行加法运算 ，则先转换成Number类型，再进行加法运算
>    2）任何值与NaN进行运算 都得NaN
>    3）字符串相加，则进行字符串拼接 ，其余算法都是转换成Number类型进行计算
>    ```
>
> 4. 

##### 进制

> 1）0x开头的是16进制
> 2）0开头是八进制
> 3）0b开头的是二进制

#### 数据类型

##### 1、String 字符串

> 强转为字符串
> 		1）调用 toString（）方法
> 		2）调用String（）函数，将需要转换的值传进参数中

##### 2、Number 数值

> 强制转换成数值
> 		1）使用Number（）函数，将需要转换的值传进参数中，但是如果有非数字的内容，则直接转换成NaN，
> 		     空字符串则转换成 0
> 		2）使用parseInt（）方法，可以将字符串中有效的数字取出来

##### 3、Boolean 布尔值

> 强制转换成布尔值
> 		1）使用Boolean（）函数，将需要转换的值传进参数中
> 			1）数字转布尔值，除了0和NaN，其余都是true
> 			2）字符串转布尔值，除了空字符串，其余都是true
> 			3）null 和 underfind 转布尔值，是false

##### 4、Null 空值

##### 5、Undefined 未定义

#####  6、Object  对象

> 1）对象的声明：
> 		1）var obj = new Object()；
> 		2）var obj = {属性名=属性值}；
> 2）对象属性添加：obj.name="孙悟空"，直接对象点加属性名
> 	      特殊的属性名：obj[“123”]=属性值，这种怎么赋值，怎么取值
> 3）删除对象属性：delete obj.name，删除对象的姓名属性
> 4）in 运算符，通过该运算符可以检查对象中是否有该属性
> 		"属性名" in obj，返回true 则表示有，false则表示 没有

#### 函数

##### 函数声明：

```javascript
    1）var fun = new function（函数执行体）；
    2）function fun(){函数执行体}
    3）var fun = function(){函数执行体}
	4）function(){函数执行体}
```

###### 如何调用一个匿名函数？

> 使用括号将匿名函数变成一个整体，在括号后面再加一个括号，
> （function(){ 函数执行体 }）()；立即执行函数，函数定义结束，立即被调用，立即执行函数
> 往往只会执行一次
>
> 这么说可能会不太清楚，上才艺
>
> ```js
> function say(){};
> (function(){ 函数执行体 })();
> say();
> //第三行与第二行对比后，发现say==(function(){ 函数执行体 })，这下子明白了吗
> ```

#### 方法

函数也可以称为对象的属性，如果一个函数作为一个对象的属性保存，那么我们称这个函数是这个对象的方法。

调用函数就说是调用对象的方法

##### for...in语句 

> 对象中有几个属性，循环体就会 被执行几次，每次执行时，会将对象的一个 属性的名字赋值给变量for(var n in obj ){ 执行体 } ，可以使用 **obj[ n ]** 来获取属性值
>
> ```javascript
> var arr ={name:"孙悟空",age:23,gender:"女"};
>  for(var n in arr){
>      console.log(arr[n])
> }
> ```
>
> for...in，取出来的是下标
>
> for...of，取出来的是内容

####  作用域

1）全局作用域
		直接编写在script中的 JavaScript 代码，都是全局作用域
		全局作用域在页面打开时创建，在页面关闭时销毁
		在全局作用域中有一个全局对象：window，他代表的是一个浏览器窗口，它由浏览器创建我们可以直接使用
		在全局作用域中创建变量都会作为 window 对象的属性进行保存，创建的方法 都会作为 window 对象 的方法进行保存

函数就是全局作用域`window`的**方法**



#### 声明提前

##### 1、变量声明提前

> 使用var 关键字声明的变量，会在所有的代码执行之前被声明（但是不会被赋值）但如果声明变量时，不用var关键字，则变量不会被提前声明

##### 2、函数的声明提前

> 使用函数声明形式创建的函数 **function x(){}**，他会在所有代码执行之前就被创建，所以我们可以在函数声明前来调用函数

#### this关键字

> 1）以函数形式调用时，this永远是window
> 2）以方法的形式 调用时，this就是调用方法的那个对象
> 3）以构造函数的形式调用时，this是新创建的那个对象
> 4）使用 call 和 apply 调用时，this是指定的那个对象

#### 构造函数

```js
function Person(name){
    this.name=name;
}
var p = new Person();
//构造函数的执行流程
//1.使用new关键字，创建一个对象
//2.将新建的对象设置为函数中this，在构造函数中可以使用this来引用新建的对象
//3.逐行执行函数中的代码
//4.将新建的对象作为返回值返回
```

####  原型

只要是对象 就有 原型

Object对象的原型没有 原型，如果在Object中依然 没有找到，则返回 undefined

####  对象

```js
function Person(name,age){
    this.name=name,
    this.age=age
}
let p =  new Person("张三",23)
console.log(p)//[object,object]
//当我们直接在页面打印一个对象时，实际上输出的是对象的toString()方法的返回值，解决方法：重写toString()方法
Person.prototype.toString=function(){
    return this.name+this.age
}
```

##### 可选链——?.

```js
let user = {}; // 一个没有 "address" 属性的 user 对象

alert(user.address.street); // Error!
```

```js
//如果可选链 ?. 前面的部分是 undefined 或者 null，它会停止运算并返回该部分。
let user = {}; // user 没有 address 属性

alert( user?.address?.street ); // undefined（不报错）
```

注意：

1. 不要过度使用可选链

2. `?.`前的变量必须已声明

3. 我们可以使用 `?.` 来安全地读取或删除，但不能写入

   ```js
   delete user?.name; // 如果 user 存在，则删除 user.name
   let user = null;
   
   user?.name = "John"; // Error，不起作用
   // 因为它在计算的是 undefined = "John"
   ```



#### 数组（Array）

数组也是对象

##### Array.from

将一个类数组转换成一个真正的数组

##### 声明数组：

> 1）var arr = new Array(10)；声明数组，数组长度为10
> 2）var arr = [10]；声明数组，并且只有一个元素"10"

##### 数组方法：

> 1）push()；向数组末尾添加一个或 多个元素，并返回数组新的长度
> 2）pop()；删除数组的最后一个元素，并将删除的元素返回
> 3）unshift()；向数组开头添加一个或 多个元素，并返回新的长度
> 4）shift()；删除数组第一个元素，并返回数组新的长度
> 5）slice（起始下标：包含，结束下标：不包含），提取数组中的元素返回，但不会影响到原数组
> 6）splice（起始下标，删除的数量，...表示新增加的元素并自动插入参数1 的位置索引前面）；
> 			删除数组中指定元素，会影响到原数组，并将删除的元素返回

##### 数组遍历

> 1）for循环
> 2）forEach（）；该方法需要一个函数作为参数，
> 			arr.forEach(function( 参数1，参数2，参数3 ){ console.log(a) })
> 			参数1：元素，
> 			参数2：下标
> 			参数3：数组

#### call 与 apply

这两个方法都是**函数对象的方法**，需要通过函数来调用，当函数调用call() 和 apply() 都会调用函数执行

```js
function fun(){
    console.log(this)
    console.log("执行了");
}
var obj = {
    name="obj"
};
fun.apply();
fun.call();
fun();
//这三个效果都是一样的，但是call与apply，他们可以通过第一个参数，来指定this对象是谁
fun.call();//[object window]
fun.call(obj)//[object object]
//this的指向发生变化

//call()方法可以将实参在对象之后一次传递	
function t(a,b){
    console.log("a="+a);
    console.log("b="+b);
}
t.call(obj,2,3);//a=2,b=3
//apply()方法需要将实参封装到一个数组当中统一传递
t.apply(obj,[2,3]);//a=2,b=3
```

#### arguments

this,arguments都是在调用函数时，浏览器每次都会传递进两个隐含的参数

1. this：函数的上下文对象

2. 封装实参的对象arguments

   1. arguments是一个**类数组对象**，不是数组

   2. 在调用函数时，我们所传递的**实参**都会封装到arguments中保存

   3. arguments里边有一个属性：callee，这个属性对应一个函数对象，就是当前正在指向的函数的对象

      ```js
      //形参：在声明函数时表示的参数为形参
      function fun(a,b){//这里的a,b是形参
          console.log(arguments.length)
      }
      //调用函数时，实际输入的参数，是实参
      fun("hello",true)//hello与true都是实参
      ```

      

#### 时间对象 Date

> 1）时间对象创建：var date = new Date（）；
> 2）获取时间戳：getTime（）;

#### 数学：Math

Math.random()，生成一个0~1之间的数字，不为0,1

Math.random()*10，生成一个0~10之间的数字，不为0,10

> 1）Math.ceil（）；向上取整，
> 2）Math.floor（）；向下取整
> 3）Math.random（）；生成一个0-1之间的随机数，生成一个0-X之间的的数，则Math.random()*X

#### 包装类

可以通过包装类将基本数据类型转换成对象，

> String
>
> + 1）var str = new String（）；
> + 2）str.slice( 开始 位置索引：包括，结束位置索引吗，不包括)；截取字符串
> + 3）str.substring（ 开始 位置索引：包括，结束位置索引吗，不包括）；截取字符串
> + 4）str.split()；同java的split，拆分字符串
>
> Number
>
> Boolean

#### 正则表达式

> 1）var reg = new RegExp（“正则表达式”，“匹配模式”）
> 		匹配模式：
> 			i，不区分大小写，
> 			g，全局匹配
> 2）test()；正则表达式 方法
> 3）match()；会将匹配到的内容封装到一个数组中返回

```js
var reg = /ab/i;//字符串中包含ab,ab必须是一体的
reg.test("abc")//true，

reg=/a|b/i;//字符串包含a或者b
reg=/[ab]/i;//同上
reg.test("abc")//true

reg=/[^ab]/i;//字符串中除了ab都可以
reg.test("abc");//false

/*match( )
-可以根据正则表达式， 从一个字符串中将符合条件的内容提取出来
-默认情况下我们的match只会找到第- 个符合要求的内容，找到以后就停止检索
我们可以设置正则表达式为全局匹配模式，这样就会匹配到所有的内容
*/
```



#### DOM对象

1. DOM，全称Document Object Model文档对象模型。
2. JS中通过DOM来对HTML文档进行操作。只要理解了DOM就可以随心所欲的操作WEB页面。
3. 文档-
   1. 文档表示的就是整个的HTML网页文档
4. 对象
   1. 对象表示将网页中的**每一个 部分都转换为了一个对象。**
5. 模型
   1. -使用模型来表示对象之间的关系,这样方便我们获取对象。

> 1节点
> 		1）文档节点：整个HTML文档
> 		2）元素节点：HTML文档中的HTML标签
> 		3）属性节点：元素的属性
> 		4）文本节点：HTML标签的文本内容
> 2）通过js 修改元素的样式
> 		语法：元素.style.样式名=样式值
> 		注意：如果CSS 的样式名中含有 “-”，如 background-color，在js 中是不合法的，
> 		正确写法：backgroundColor，使用驼峰命名法
> 3）获取元素当前样式
> 		语法：元素.currentStyle.样式名；该方法只有IE浏览器支持
> 		语法：getComputedStyle（元素，可以传递一个伪元素，一般写null）；该方法返回一个对象，通过
> 			该对象获取参数值

##### 浏览器加载页面

浏览器执行，从上到下，读取到一行运行一行

##### 获取元素节点

1. document.getElementById()

   通过id属性获取一个元素节点

2. document.getElementsByTagName()

   通过标签名获取**一组**元素节点

3. document.getElementsByName()

   通过name属性获取**一组**元素节点对象

##### 操作元素

1. inner HTML用于获取元素内部的HTML代码的，对于自结束标签，这个属性没有意义

2. 如果需要读取元素节点属性名，直接使用 元素.属性名

   ```html
   <input class="haha" type="text" value="hello world" id="id"/>
   ```

   ```js
   var content = document.getElementById("id");
   alert(content.value)
   //注意：读取class属性不能采用这个方法，需要使用className
   alert(content.className)
   ```

3. 修改元素的样式

   元素.style.样式名=样式值

   注意：如果CSS的样式名中含有"-"，则将样式名改成驼峰命名法

4. 获取元素整个的高度，返回值不带单位，可以直接计算

   ```js
   var b = document.getElementById("b");
   alert(b.offsetHeight)
   alert(b.clientHeight)
   alert(b.offsetLeft)//计算元素偏移量
   ```

   

#### 取消事件冒泡

> event.cancelBulle=true；如此设置即可取消事件冒泡
> 事件绑定
> 	div.addEventListener("click",function(){})
> 取消事件（null）
> document.mousemove=null；取消鼠标移动事件

#### 定时器

> 1）setInterval();
> 	定时调用，可以将每个函数，每隔一段时间执行一次
> 2）参数
>
> + 1）回调函数，该函数会每隔一段时间调用一次
> + 2）每次调用间隔时间，单位是毫秒
>
> 3）返回值，返回一个Number类型，这个数字用来作为定时器的唯一标识
>
> 4）clearInterval()；
> 用来关闭定时器，参数是setInterval 的返回值
>
> 5）延时调用，setTimeout()
> 	1）参数：1.执行函数，2.延时时间
> 	延时调用只执行一次

#### 修改样式

> 修改div的class属性
> 我们可以 通过修改 元素的class 属性来间接的修改样式
> 语法：div.className="class属性名"

#### JSON

> 1）json 分类
>
> + 1）对象{}
> + 2）数组[]
>
> 2）JSON 允许的值：字符串，数值，布尔值，null，对象，数组
> 3）JS中，为我们提供了一个工具类，就叫 JSON，这个对象可以帮助我们将一个JSON 转成 JS 对象
> 4）JSON 类方法
>
> + 1）JSON.parse（json）；将JSON 转换成 JS 对象
> + 2）JSON.stringify( 对象）；将JS 对象转换成 JSON
>
> 5）eval（）；这个函数可以执行一段字符串JS代码，并将执行结果返回
> 		注意：如果使用eval()  执行的字符串中含有 {}，他会将 {}当成是代码块，
> 		如果不希望将其当成是代码块解析，则需要用括号（）将字符串括起来
> 		举例子：
>
> ```javascript
> 原JSON：‘{"name":"孙悟空","age":12,"gender":"男"}’
> 修改后：‘（{"name":"孙悟空","age":12,"gender":"男"}）’
> ```
>

## 零散成长笔记

#### forEach使用

forEach() 方法对数组的每个元素执行一次提供的函数。总是返回undefined；

forEach方法中的function回调有三个参数：
第一个参数是遍历的数组内容，
第二个参数是对应的数组索引，
第三个参数是数组本身

foreach 语法：

```js
forEach(function(value,index,array){
　
});
var arr = [1,2,3,4];
var sum =0;
arr.forEach(function(value,index,array){

 array[index] == value; //结果为true

 sum+=value; 

 });

console.log(sum); //结果为 10
```

### ES6

#### 箭头函数

[推荐博客](https://blog.csdn.net/u012149969/article/details/80261081?ops_request_misc=&request_id=&biz_id=102&utm_term=ES6%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-5-80261081.pc_search_result_before_js)

#### fetch

[推荐博客](https://blog.csdn.net/qq_36754767/article/details/89645041?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161495369716780266263445%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=161495369716780266263445&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_click~default-1-89645041.pc_search_result_before_js&utm_term=fetch)

### VUE

#### 生命周期

### node.js

#### 全局变量

1. __filename：当前文件名
2. __dirname：当前目录名