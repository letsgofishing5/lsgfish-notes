# HTML移动端

### 视口

1. 布局视口
2. 视觉视口
3. 理想视口

#### meta视口标签

```html
<meta name="viewport" content= "width= device-width, user-scalable=no,
initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```

| 属性          | 解释说明                                             |
| ------------- | ---------------------------------------------------- |
| width         | 宽度设置的是viewport宽度，可以设置device-width特殊值 |
| initial-scale | 初始缩放比,大于0的数字                               |
| maximum-scale | 最大缩放比，大于0的数字                              |
| minimum-scale | 最小缩放比,大于0的数字                               |
| user-scalable | 用户是否可以缩放页面，yes或no ( 1或0 )               |

#### 物理像素与物理像素比

物理像素就是我们说的分辨率

物理像素点指的是屏幕显示的最小颗粒,是物理真实存在的。这是厂商在出厂时就设置好了,比如苹果6\7\8是750* 1334
我们开发时候的1px不是一定等于1个物理像 素的
PC端页面, 1个px等于1个物理像素的,但是移动端就不尽相同
-个px的能显示的物理像素点的个数,称为物理像素比或屏幕像素比

### flex布局

##### flex(弹性盒、伸缩盒)

1. 是CSS中的又一种布局手段，它主要用来代替浮动来完成页面的布局
2. flex可以使元素具有弹性，让元素可以跟随页面的大小的改变而改变

##### 弹性容器
要使用弹性盒，必须先将一个元素 设置为弹性容器
我们通过display 来设置弹性容器

1. display:flex设 置为块级弹性容器
2. display:inline-flex设置为行内的弹性容器

##### 弹性元素

1. 弹性容器的子元素是弹性元素（弹性项）
2. 一个元素可以同时是弹性容器和弹性元素

##### 常用

flex-direction：用来指定容器中弹性元素的排列方式

- 可选值：
  - row：默认值，水平从左向右排列
  - row-reverse：反向水平排列
  - column：纵向排列（自上向下）
  - column-reverse：反向纵向排列

flex-grow：指定弹性元素的伸展的系数

- 当父元素有多余的空间时，子元素自如伸展

flex-shrink：指定弹性元素的收缩系数

- flex-shrink：0；表示不会收缩了

flex-wrap：设置弹性元素是否在容器中自动换行

- nowrap：默认值，不会自动换行
- wrap：元素沿着辅轴方向自动换行

flex-flow：wrap和direction的简写

- flex-flow：row wrap;

justify-content：分配主轴上的空白空间

- 可选值
  - flex-start：元素沿着主轴起边排列
  - flex-end：元素沿着主轴终边排列
  - center：元素居中排列
  - space-around：空白分布到元素两侧

### rem适配布局

#### rem基础

##### rem单位

1. rem (root em)是一个相对单位，类似于em , em是父元素字体大小。

   1. em相对于父元素的字体大小来说
   2. rem相对于html元素来说
   3. rem的优点就是可以通过修改html的字体大小，来达到改变页面中元素的大小可以整体控制
   4. 不同的是rem的基准是相对于html元素的字体大小，html元素只有一个，方便全局管理。

2. 比如，根元素 ( html ）设置font-size=12px;,非根元素设置width:2rem;则换成px表示就是24px。

   ```css
   html{
   	font-size:12px;
   }
   div{
   	width:10rem;
   	height:10rem;
   }
   ```

   

#### 媒体查询

###### 媒体查询( Media Query )是CSS3新语法。

1. 使用@media查询，可以针对不同的媒体类型定义不同的样式
2. @media可以针对不同的屏幕尺寸设置不同的样式
3. 当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面
4. 目前针对很多苹果手机、Android手机，平板等设备都用得到多媒体查询

###### 语法规范

```css
@media mediatype and|not|only (media feature){
    CSS-Code;
}
```

1. 用@media开头注意@符号
2. mediatype媒体类型
   - all：用于所有设备
   - print：用于打印机和打印预览
   - scree：用于电脑屏幕，平板电脑，智能手机等
3. 关键字and not only
   - and：可以将多个媒体特性连接到一起，相当于"且"的意思
   - not：排除某个媒体类型，相当于"非"的意思，可以省略
   - only：指定某个特定的媒体类型，可以省略
4. media feature媒体特性必须有小括号包含
   - width：定义输出设备中页面可见区域的宽度
   - min-width：定义输出设备中页面最小可见区域宽度（包含等于号）
   - max-width：定义输出设备中页面最大可见区域宽度（包含等于号）

```css
@media screen and (min-width:550px) {
    html{
        font-size: 10px;
    }
    body{
        background-color: #0000FF;
    }
}
@media screen and (min-width:740px) {
    html{
        font-size: 100px;
    }
    body{
        background-color: red;
    }
}
.father{
    font-size: 1rem;
    background-color: orange;
}
```

##### 引入资源

写两套不同的样式，一套用于宽度500Px，一套用于宽度900px

```html
<link rel='stylesheet' href='style500.css' media='screen and (min-width:500px)'/>
<link rel='stylesheet' href='style900.css' media='screen and (min-width:900px)'/>
```

#### less基础

CSS是一门非程序式语言，没有变量，函数，scope（作用域）等概念

1. CSS需要书写大量看似没有逻辑的代码，CSS冗余度是比较高的。
2. 不方便维护1扩展，不利于复用。
3. CSS没有很好的计算能力
4. 非前端开发工程师来讲，往往会因为缺少CSS编写经验而很难写出组织良好且易于维护的CSS代码项目。

做为CSS的一种形式的扩展，它并没有减少CSS的功能，而是在现有的CSS语法上，为CSS加入程序式语言的特性。
它在CSS的语法基础之上，引入了变量，Mixin(混入），运算以及函数等功能，大大简化了CSS的编写，并且降低了CSS的维护成本，就像它的名称所说的那样，Less可以让我们用更少的代码做更多的事情。
心
Less中文网址: http://lesscss.cn/
常见的CSS预处理器: Sass、Less、Stylus

**Less是一门CSS预处理语言，它扩展了CSS的动态特性**

##### less使用

新建一个后缀名为：less的文件，在这个less文件里书写less语句

- less变量

  ```less
  @变量名:值;
  ```

  1.必须有@为前缀
  2.不能包含特殊字符
  3.不能以数字开头
  4.大小写敏感

- less编译

  本质上，Less包含一套自定义的语法及一个解析器，用户根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的CSS文件。
  所以，我们需要把我们的less文件，编译生成为css文件，这样我们的html页面才能使用。

  需要编译插件：easy less

- less嵌套

  如果遇见：交集|伪类|伪元素选择器

  - 内层选择器的前面没有&符号，则它被解析为父选择器的后代;
  - 如果有&符号，它就被解析为父元素自身或父元素的伪类。

  ```less
  a{
      &:hover{
          color:red;
      }
  }
  ```

  

- less运算

  任何数字、颜色或者变量都可以参与运算。就是Less提供了加(+)、减(-)、乘(*)、除(/)算术运算。

  1. 乘号(*)和除号(/ )的写法
  2. 运算符中间左右有个空格隔开1px + 5
  3. 对于两个不同的单位的值之间的运算，运算结果的值取第一个值的单位
  4. 如果两个值之间只有一个值有单位，则运算结果就取该单位
  5. 我们运算符的左右两侧必须敲一个空格隔开
  6. 两个数参与运算如果只有一个数有单位，则最后的结果就以这个单位为准

#### rem适配方案

1. 让一些不能等比自适应的元素，达到当设备尺寸发生改变
   的时候，等比例适配当前设备。
2. 使用媒体查询根据不同设备按比例设置html的字体大小，
   然后页面元素使用rem做尺寸单位，当html字体大小变化
   元素尺寸也会发生变化，从而达到等比缩放的适配。

##### rem实际开发适配方案

元素大小取值方法

1. 最后的公式︰页面元素的rem值=页面元素值( px)/（屏幕宽度│划分的份数)
2. 屏幕宽度/划分的份数就是html font-size的大小
3. 或者:页面元素的rem值=页面元素值( px ) / html font-size字体大小

##### 导入样式

@import "样式文件名";

#### rem适配方案2——flexible.js

手机淘宝团队出的简洁高效移动端适配库
我们再也不需要在写不同屏幕的媒体查询，因为里面js做了处理
它的原理是把当前设备划分为10等份，但是不同设备下，比例还是一致的。我们要做的，就是确定好我们当前设备的html文字大小就可以了
比如当前设计稿是750px，那么我们只需要把 html文字大小设置为75px(750px/10)就可以里面页面元素rem值:页面元素的px值/75
剩余的，让flexible.js来去算

github地址: https://github.com/amfe/lib-flexible

在页面引入flexible.js文件

#### 响应式布局

能同时适应PC、移动端

##### 响应式开发原理

就是使用媒体查询针对不同宽度的设备进行布局和样式的设置,从而适配不同设备的目的。