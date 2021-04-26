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
兄弟元素
兄弟元素间的相邻垂直外边距会取两者之间的较大值(两者都是正值)
特殊情况:
如果相邻的外边距-正一负，则取两者 的和
如果相邻的外边距都是负值，则取两者中绝对值较大的
兄弟元素之间的外边距的重叠，对于开发是有利的，所以我们不需要进行处理
父子元素
父子元素间相邻外边距，子元素的会传递给父元素(上外边距)

#### 行内元素盒模型

1. 行内元素不支持设置 宽高
2. 行内元素可以设置padding，但是垂直方向padding不影响页面的布局
3. 行内元素可以设置border，垂直方向的border不会影响页面的布局
4. 可以设置margin，垂直方向margin不会影响布局

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

浮动会脱离文档流