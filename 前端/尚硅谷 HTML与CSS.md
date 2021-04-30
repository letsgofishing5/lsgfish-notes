# HTML

####  文档声明

```html
<!doctype html>
<!--文档 声明，声明当前网页的版本-->
<html>
   <!-- html的根标签（元素）标签 即 元素，网页中的所有内容 都要写在根元素里面-->
    <head>
        <!--head 是网页的头部，head中的内容不会在网页中直接出现，主要是用来帮助浏览器引擎来解析网页-->
        <meta charset="UTF-8">
        <!--meta标签用来设置网页的元数据，这里 设置网页的字符集，避免乱码问题-->
        <title>网页的标题</title>
        <!--title中的内容会显示在浏览器中的标题栏 ，搜索引擎会主要根据title中的内容来判断网页的主要内容-->
    </head>
    <body>
        <!--body是HTML的子元素，表示网页的主体，网页中的所有的可见内容都应该写在body中-->
    </body>
</html>
```

####  meta标签 

meta主要用于设置 网页的元数据，元数据不是给用户看的

charset 指定网页的字符集

name 指定的数据的名称

content 指定的数据内容

```html
<meta name="keywords" content="HTML5,前端，CSS3">
<!--keywords 表示网站的关键字，可以同时指定多个关键字，关键字间使用逗号隔开-->
<!--title标签的内容用于展示结果的超链接-->
<meta http-equiv="refresh" content="3;https://www.baidu.com">
<!--将页面重定向到另一个网页，三秒后跳转-->
<meta name="description" content="HTML5,前端，CSS3">
<!--用于指定网站的描述-->

```

#  CSS 

### 选择器

#### 复合选择器

3. div,p，并集选择器
4. div.class，交集选择器，要同时满足div与.class两个条件

#### 关系选择器

1. ol li，后代选择器
2. ol>li，子选择器
3. .one + .two，兄弟选择器，前后关系，一个兄弟
4. .one ~ .two，选择后边的所有兄弟

#### 属性选择器

1. `div[title]`，选中所有 `p `元素中有` title `属性的 
2. `[title="one"]`，选中属性名`title="one" `的元素
3. `[title^="one"]`，选中属性名`title`以`one`开头的元素
4. `[title$="one"]`，选中属性名`title`以`one`结尾的元素
5. `[title*="one"]`，选中属性名`title`有`one`的元素

#### 伪类选择器

伪类 ，即不存在的类，特殊的类，一般情况下都是使用`:`开头 

```html
<div>
    <div class="one">第一个子元素</div>
    <div class="one"></div>
    <div class="one"></div>
</div>
```

```css
.one:first-child{
    选中.one类的第一个子元素
}
.one:last-child{
    选中.one类的最后一个子元素
}
.one:nth-child(1){
    选中.one类的第一个子元素
}
特殊值 ：
	n第n个 n的范围e到正无穷
	2n或even表示选中偶数位的元素
	2n+1或odd表示选中奇数位的元素
```

#### 链接伪类选择器

```css
a:link	选择所有未被访问的链接，表示未访问链接
a:visited	选择所有己被访问的链接，表示已访问过的链接
a: hover	选择鼠标指针位于其上的链接
a: active	选择活动链接(鼠标按下未弹起的链接)
```

#### 伪元素选择器

表示页面中一些特殊的并不真实存在的元素（特殊的位置）

伪元素使用：`::`开头

```css
p::first-letter 表示第一个字母
P::first-line 表示第一行
P::selectino 表示选中的内容
P::before 元素的开始
p::after 元素的最后
	before和after必须结合content属性来使用
```



#### nth-child与nth-of-type区别

nth-child是根据子元素个数来的

nth-of-type是根据当前元素类型的然后数个数来的

### 像素与百分比

##### 像素

屏幕是一个个小的点构成的，不同的屏幕像素大小是不同的，像素越小显示越清晰

##### 百分比

##### em

1em=1 font-size

一个em就是一个字体大小，会根据字体大小改变而改变

##### rem

rem是相对于根元素字体大小计算，根元素就是：html

### 颜色

##### RGBA

带有透明度

##### HSL

H：色相（0-360）

S：饱和度，颜色的浓度（0%-100%）

L：亮度，颜色的亮度（0%-100%）

### 布局

#### 文档流

网页是一个多层的结构，一层摞着一层

通过css可以分别为每一层来设 置样式

作为用户来讲只能看到最顶上一层

这些层中，最底下的一层称为文档流，文档流是网页的基础

我们所创建的元素默认都是在文档流中进行排列

#### 盒子模型

组成：border、content、padding、margin

**width与height是设置内容的宽高的**

**元素有两个状态**

1. 在文档流中
   1. 块级元素
      1. 独占一行
      2. 默认宽度是父元素的全部（把父元素撑满）
      3. 默认高度是被内容撑开
   2. 行内元素
2. 不在文档流中（脱离文档流）

#### margin

垂直外边距的重叠(折叠)

相邻的垂直方向外边距会发生重叠现象

**兄弟元素**

兄弟元素间的相邻垂直外边距会取两者之间的较大值(两者都是正值)

特殊情况:

1. 如果相邻的外边距-正一负，则取两者 的和
2. 如果相邻的外边距都是负值，则取两者中绝对值较大的
3. 兄弟元素之间的外边距的重叠，对于开发是有利的，所以我们不需要进行处理

**父子元素**

父子元素间**相邻外边距**，子元素的会传递给父元素(上外边距)

解决方法

1. 给父子之间添加一个元素来隔开两者间的距离

   ```css
   .father::before{
       content: '';
       display: table;
   }
   ```

   

#### 行内元素盒模型

1. 行内元素**不支持设置宽高**
2. 行内元素的margin只对水平方向有用，
3. 行内元素可以设置padding，但是垂直方向padding不影响页面的布局
4. 行内元素可以设置border，垂直方向的border不会影响页面的布局
5. 可以设置margin，垂直方向margin不会影响布局

display用来设置元素显示的类型

可选值:

1. inline将元素设置为行内元素block将元素设置为块元素
2. inline-block将元素设置为行内块元素
3. 行内块，既可以设置宽度和高度又不会独占一行
4. table将元素设置为一个表格
5. none元素不在页面中显示

visibility用来设置元素的显示状态

可选值:

1. visible默认值，元素在页面中正常显示
2. hidden元素在页面中隐藏不显示，但是依然占据页面的位置

#### 盒子大小 

box-sizing

1. 默认情况下，盒子可见框的大小由内容区、内边距和边框共同决定
2. box-sizing用来设置盒子尺寸的计算方式(设置width和height的作用)

可选值:

1. content - box
   默认值，宽度和高度用来设置内容区的大小
2. borderbox宽度和高度用来设置整个盒子可见框的大小
3. width和height 指的是内容区和内边距和边框的总大小

#### 轮廓阴影与圆角

#####  轮廓

outline，不会影响到整体布局

```css
outline:1px solid red;//用法与 border一模一样
```

##### 阴影

box-shadow：x  y 浓度 范围 颜色

```css
box-shadow:10px 10px 10px 10px red;
```

##### 圆角

border-radius

```css
border-radius:50px;
border-radius:50%;
```

### 布局——浮动

浮动会脱离文档流，但是 浮动不会脱离父元素，主要是 用来横向布局

#### 高度塌陷和BFC 

浮动会 造成 高度 塌陷

-BFc是一个css中的一个隐含的属性,可以为一个元素开月
开启BFC该元素会变成一个独立的布局区域
-元素开启BFC后的特点:
1.开启BFC的元素不会被浮动元素所覆盖
2.开启BFC的元素子元素和父元素外边距不会重叠
3.开启BFC的元素可以包含浮动的子元素

设置overflow :hidden，开启BFC ，防止 高度塌陷

#### clear 清除浮动

可选值:

1. left清除左侧浮动元素对当前元素的影响
2. right清除右侧浮动元素对当前元素的影响
3. both清除两侧中最大影响的那侧

#### 无副作用清除高度塌陷

after生成的元素时行内元素，需要设置成块级元素

```css
.father::after{
    content: "";
    display: block;
    clear: both;
}
原理：通过after生成一个行内元素，然后将其转换成块级元素，通过清除该元素的浮动影响从而达到目的
```

```css
.clearfix::before,
.clearfix::after{
    content:"";
    display:block;
    clear:both;
}
//既能解决高度塌陷问题，也能解决外边距重叠传递问题
```

### 布局——定位

定位是一种更加高级的布局手段，通过定位可以将元素摆放到页面的任意位置使用position属性来设置定位
可选值;

1. static默认值，元素是静止的没有开启定位
2. relative开启元素的相对定位
3. absolute开启元素的绝对定位
   1. 开启绝对定位后，如果不设置偏移量元素的位置不会发生变化
   2. 开启绝对定位后， 元素会从**文档流中脱离**
   3. 绝对定位会改变元素的性质，行内变成块，块的宽高被内容撑开
   4. 绝对定位会使元素提升一 个层级
4. fixed开启元素的固定定位
   1. 固定定位永远参照于浏览器的视口进行定位
5. sticky开启元素的粘滞定位

<<<<<<< HEAD
#### 文本对齐

1. text-align:center；水平居中
2. vertical-align:middle；垂直居中

##### 图片布局

img布局时，会沿着自己的基线对齐，导致下边框有空隙，解决办法：vertical:top/bottom

##### 文本常用属性

```css
text-decoration:underline/line-through/overline
下划线/删除线/上划线

white-space设置网页如何处理空白
	可选值：
		1.normal：正常
		2.nowrap：不换行
		3.pre：保留空白，预处理格式
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;//溢出的内容设置成省略号
```

#### 元素层级

z-index

如果元素的层级一样，则优先显示靠下的元素

祖先的元素的层级再高也不会盖住后代元素

### 背景

```css
设置背景的范围
background-clip
可选值:
border-box默认值，背景会出现在边框的下边
padding-box背景不会出现在边框，只出现在内容区和内边距content-box背景只会出现在内容区
```

```css
background-origin背景图片的偏移量计算的原点
padding-box默认值，background-position从内边距处开始计算content-box背景图片的偏移量从内容区处计算
border-box背景图片的变量从边框处开始计算
```

```css
background-size设置背景图片的大小
第一个值表示宽度
第二个值表示高度
-如果只写一个，则第二个值默认是 auto
cover图片的比例不变，将元素铺满
contain图片比例不变，将图片在元素中完整显示
```

如果是简写形式，没有顺序，但是`background-size`一定要写到`background-position`后面，用斜杠隔开

```css
background:url() red center center/contain  no-repeat;
```

`background-origin`和`background-clip`，`origin`在前，`clip`在后

```css
background:url() red origin clip;
```

#### 线性渐变

线性渐变，颜色沿着一条直线发生变化 

`linear- gradient()`

`linear-gradient(red,yellow)`红色在开头，黄色在结尾，中间是过渡区域

线性渐变的开头，我们可以指定一一个渐变的方向

1. `to left`
2. `to right`
3. `to bottom`
4. `to top`
5. `deg` ` deg`表示度数
6. `.5turn`
   表示圈

#### 径向渐变

语法:
`radial-gradient(大小 at 位置，颜色 位置,颜色  位置,颜色 位置)`
大小:

1. circle 圆形
2. ellipse  椭圆
3. closest-side近边
4. closest-corner近角
5. farthest-side远边
6. farthest-corner远角

位置
`top right left center bottom !`

### 表格

可以将一个表格分成三个部分:

1. 头部thead
2. 主体tbody
3. 底部tfoot

```html
<table>
    <thead>
    	<tr>
        	<td>头部</td>
        </tr>
    </thead>
    <tbody>
    	<tr><td>身体</td></tr>
    </tbody>
    <tfoot>
    	<tr><td>底部</td></tr>
    </tfoot>
</table>
```

##### 边框

1. border-spacing：指定边框之间的距离
2. border-collapse：collapse；设置边框合并

两个属性可以达到同样的表现效果

如果表格中没有使用tbody而是直接使用tr, 那么浏览器会自动创建一个tbody, 并且将tr全都放到tbody中，所以tr不是table的子元素

##### 表格中的td

表格中的`td`默认是垂直居中的，`td`内部的元素都是被默认垂直居中

```css
td{
    /*默认情况下，元素在td中是垂直居中的，可以通过vertical-align来设置*/
    vertical-align:top;
}
div:{
    display:table-cell;//将元素设置为单元格 td，
    vertical-align：middle;设置垂直居中
}
```

### 表单

```html
<form action="地址">
    <input type="text"/>
    <input type="submit"/>
</form>
```

##### 数据提交

表单的数据提交，必须要为元素指定一个`name`属性值

```html
<form action="地址">
    <input type="text" name="name"/>
    <input type="submit"/>
</form>
```

##### 单选按钮

单选按钮必须要设置相同的name属性，才能达到单选的效果

##### 多选框checkbox

多选框`name`属性要相同，值`value`不同

```html
<input type="text" name="more" value="1"/>
<input type="text" name="more" value="2"/>
<input type="text" name="more" value="3"/>
<input type="text" name="more" value="4"/>
```

##### 下拉列表

```html
<select name="xz">
    <option value="1">选项1</option>
    <option value="2" selected>选项2</option>
    <option value="3">选项3</option>
</select>
```

#### 表单补充

```html
<input type="text" autocomplete="off"/>关闭自动补全，可以写在form中，form中的input都会遵守该属性
<input type="text" readonly/>表单设置为只读，数据会被提交
<input type="text" disabled/>设置为禁用，数据不会被提交
<input type="text" autofocus/>获取焦点
```



