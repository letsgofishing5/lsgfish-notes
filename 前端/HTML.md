### HTML头部标签

#### base标签

```html
<head>
<base href="http://www.runoob.com/images/" target="_blank">
</head>
```

base标签的作用就是：使当前页面所有链接地址，全部以base标签内的地址为开头，使用绝对路径，并且继承base标签内的一切设置

#### link标签

```html
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

link标签用于定义文档与外部资源的关系，通常用于连接到样式表（.css文件）

#### meta标签

```html
<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">
```

meta标签用于描述一些基本的元数据（可以理解为不显示在页面的数据，但是该数据会被浏览器解析。），通常用于指定网页的描述，关键字，等

### 表单

#### 表单元素常用属性

| 属性      | 属性值       | 描述                                  |
| --------- | ------------ | ------------------------------------- |
| name      | 由用户自定义 | 定义input元素名称                     |
| value     | 由用户自定义 | 规定input元素的值                     |
| checked   | checked      | 规定此input元素首次被加载时应当被选中 |
| maxlength | 正整数       | 规定输入字段中的字符的最大长度        |

## CSS

### 字体属性一套连招带走

**font:是否斜体(italic) 是否加粗(bold) 字体大小/字体行高 字体样式(宋体)**

#### 文本

##### 颜色

使用16进制颜色表示法，在HBuilder中，选中16进制颜色，alt+鼠标左键可以选择颜色

rgb颜色表示也可以这样做

##### 单位

em是一个相对单位，就是当前元素（font-size）1个文字大小，如果当前元素没有设置文字大小，则按照父元素大小

##### 文本属性总结

| 属性            | 表示                             |
| --------------- | -------------------------------- |
| text-indent     | 文本首行缩进                     |
| text-decoration | 文本修饰，添加下划线，取消下划线 |
| text-height     | 行高                             |

#### 调试工具

CTRL+0，恢复浏览器大小

#### Emmet语法

1. 快速生成HTML结构语法
2. 快速生成CSS样式语法

##### 快速生成HTML结构

1. 页面输入：！，tab键自动生成

   ```html
   <!DOCTYPE html>
   <html lang="zh">
   <head>
   	<meta charset="UTF-8">
   	<meta name="viewport" content="width=device-width, initial-scale=1.0">
   	<meta http-equiv="X-UA-Compatible" content="ie=edge">
   	<title></title>
   </head>
   <body>
   	
   </body>
   </html>
   ```

2. div+p，tab键自动生成

   ```html
   <div></div>
   <p></p>
   ```

3. div>p，tab键自动生成

   ```html
   <div>
       <p></p>
   </div>
   ```

4. **.demo$*5**，tab键自动生成，$默认从1开始

   ```html
   <div class="demo1"></div>
   <div class="demo2"></div>
   <div class="demo3"></div>
   <div class="demo4"></div>
   <div class="demo5"></div>
   ```

5. **.demo${test$}*5**，tab键自动生成，{}内部可以自动添加自定义文本内容

   ```html
   <div class="demo1">test1</div>
   <div class="demo2">test2</div>
   <div class="demo3">test3</div>
   <div class="demo4">test4</div>
   <div class="demo5">test5</div>
   ```

##### 快速生成CSS结构

1. w100，tab键自动生成

   ```html
   width: 100px;
   ```

2. tac，tab键自动生成

   ```html
   text-align: center;	
   ```

##### 快速格式化代码

HBuilder使用：CTRL+K

### 选择器

#### 复合选择器

3. div,p，并集选择器
2. div.class，交集选择器，要同时满足div与.class两个条件

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



### 工具FastStone

### 小工具Snipaste

[下载](https://zh.snipaste.com/)

作用：截图

常用快捷方式:
1. F1可以截图同时测量大小设置箭头书写文字等
2. F3 在桌面置顶显示
3. 点击图片, alt可以取色(按 下shift可以切换取色模式)
4. 按下esc取消图片显示

### CSS背景

##### 平铺

```css
background: url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;
/*引入两张图片*/
background-repeat:no-repeat;
```

##### 固定背景图片

```css
background-attachment: fixed;
```

##### 一套连招带走，无固定顺序

```css
background:red url(img_flwr.gif) right bottom no-repeat fixed;
/*背景颜色，背景图片地址，位置：右下，不平铺，背景附着固定背景图片*/
```

##### 背景色半透明

```css
background-color: rgba(0,0,0,0.5);
```

背景属性总结：颜色，图片，平铺，位置，背景附着（attachment），背景色半透明rgba(0,0,0,.5)

### CSS三大特性

层叠性，继承性，优先级

1. 样式重复，但是每个样式里内容不重复，如果重复，就近原则

2. **行高**既可以写单位，也可以不写单位，不写单位则表示当前文字大小倍数

3. 优先级

   1. 选择器优先级，数字越大权重越高

      1. 继承或者*

      2. 元素选择器

      3. 类选择器，伪类选择器

      4. ID选择器

      5. 行内样式style=""

      6. limportant重要的

         ```css
         color:red!important;
         ```

   2. 总结：定位越是清晰明确，权重越高，！important不可阻挡

### 页面布局

#### 三大核心

1. 盒子模型
2. 浮动
3. 定位

##### 盒子模型

组成：border、content、padding、margin

**width与height是设置内容的宽高的**



1. border，一套连招带走

   ```css
   border:1px dashed red;
   ```


2. padding，内边框，会影响盒子大小，会撑大盒子。如果不设置w、h，则不会撑开盒子

   ```css
   /*一套连招带走:上，右，下，左*/
   padding:0 0 0 0;
   /*上下，左右*/
   padding：0 0;
   ```

3. content，内容

4. margin，外边距

   ```css
   /*一套连招带走*/
   margin:0 0 0 0;
   /*水平居中-只限于块级元素*/
   margin: auto;
   /*行内元素水平居中-给父元素添加*/
   text-align: center;
   ```


   1. 嵌套块元素塌陷——外边距塌陷问题

      子元素设置上外边距，父元素塌陷

      解决方法：

      1. 给父元素设置上边框即可
      2. 给父元素设置上内边距
      3. 给父元素添加overflow：hidden

   2. 清楚内外边距

      ```css
      *{
          padding:*;
          margin:*;
      }
      ```

##### 圆角

一套连招带走

```css
border-radius:0 0 0 0;
border-radius:0;
/*单位可以是：%，也可以是：px*/
```

##### 盒子阴影

一套连招带走

```css
/*x轴，y轴，阴影模糊程度，阴影范围大小，阴影颜色，内阴影*/
box-shadow: 10px 10px 10px 10px blue insert;
/*insert不写，则默认是外阴影*/
```

##### 文字阴影

一套连招带走

```css
/*x轴，y轴，阴影模糊程度，阴影颜色*/
text-shadow: 10px 10px 2px gray;
```

### 浮动

##### 布局三种方式

1. 标准流：按标签规定好的默认方式排列
2. 浮动
3. 定位

##### 网页布局准则

1. 多个块级元素纵向排列找标准流，多个块级元素横向排列找浮动
2. 确定页面版心（可视区）
3. 分析页面中的行模块，以及每个行模块中的列模块（页面布局第一准则）
4. 一行中的列模块经常浮动布局，先确定每个列的大小，之后确定列的位置（页面布局第二准则）
5. 制作HTMl结构。我们还是遵循：先有结构，后有样式的原则。结构永远最重要
6. 先理清布局结构，再写代码



##### 浮动

属性：

1. none：不浮动
2. left：左浮动
3. right：右浮动

特性（重难点）

1. 浮动元素会脱标（脱离标准普通流的控制移动到指定位置）
2. 浮动的盒子不再保留原先的位置
3. 任何元素都可以浮动，不管原先是什么模式的元素，添加浮动后具有行内块元素相似的特性
4. 浮动的盒子，只会影响到后面的盒子，不会影响前面盒子

##### 浮动存在的问题

1. 父元素没有设置高度时，子元素设置浮动，这时父元素则没有高度

##### 清除浮动本质

1. 清除浮动的本质就是清除浮动元素造成的影响
2. 如果父盒子本身就有高度，则不需要清除浮动
3. 清除浮动后，父级就会根据浮动的子盒子自动检测高度。父级有了高度，就不会影响到下面的标准流了

**语法：**

```css
clear: left;
clear: right;
clear: both;
/*实际工作中基本上都只用：clear:both 
	清除浮动的策略时：闭合浮动
*/
```

###### 清除浮动方法

1. 额外标签法也称为隔墙法，是W3C推荐的做法（在最后一个浮动的子元素后面添加一个额外标签，必须是块级元素，清除浮动样式）

   ```css
   *{
       margin: 0;
       padding: 0;
   }
   .son{
       width: 100px;
       height: 100px;
       background: gray;
       margin: 10px;
       float: left;
   }
   .father{
       border: 1px solid red;
       background: orange;
   }
   .clear{
       clear:both;
   }
   ```

   ```html
   <div class="father">
       <div class="son">1</div>
       <div class="son">2</div>
       <div class="son">3</div>
       <div class="son">4</div>
       <div class="clear"></div>
   </div>
   ```

2. 父级添加overflow属性

   给**父元素**设置overflow属性，值：hidden、auto、scroll

3. 父级添加after伪元素

   时额外标签法的升级版，给**父元素**添加

   ```css
   .father:after{
       content: "";
       display: block;
       height: 0;
       clear: both;
       visibility: hidden;
   }
   .father{
       overflow: hidden;
       border: 1px solid red;
       background: orange;
       /*IE6、7专有*/
       *zoom: 1;
   }
   ```

4. 父级添加双伪元素

   给父元素添加

   ```css
   .father::before,.father:after{
       content: "";
       display: table;
   }
   .father:after{
       clear: both;
   }
   .father{
       overflow: hidden;
       border: 1px solid red;
       background: orange;
       /*IE6、7专有*/
       *zoom: 1;
   }
   ```

##### CSS属性书写建议顺序

1.布局定位属性: display / position/ float/ clear / visibility/ overflow (建议display第一个写,毕竟关系到模式)
2.自身属性: width/ height / margin/ padding / border/ background
3.文本属性: color/ font / text-decoration/ text- align/ vertical-align/ white- space / break-word
4.其他属性(CSS3) : content /cursor/ border-radius/ box-shadow/ text-shadow/ background:inear-gradient...

#### 制作导航栏注意


实际开发中,我们不会直接用链接a而是用li包含链接(i+ a)的做法。

1. li+a语义更清晰 , -看这就是有条理的列表型内容。
2.如果直接用a ,搜索引学容易辨别为有堆砌关键字嫌疑(故意堆砌关键字容易被搜索引学有降权的风险) ,
从而影响网站排名
2. 1.让导航栏-行显示， 给li加浮动,因为li是块级元素,需要一行显示
    2.这个nav导航栏可以不给宽度,将来可以继续添加其余文字
    3.因为导航栏里面文字不一 样多所以最好给链接a左右padding撑开盒子,而不是指定宽度

### 定位

#####  浮动与定位

浮动可以让多个块级盒子一行没有缝隙显示

定位可以让盒子自由在某个盒子内移动位置，或者固定某个位置并且可以压住某个盒子

**定位** ：定位模式 + 边偏移

定位模式：决定元素的定位方式，通过CSS 的 position 属性来设置，其值分为四类

| 值       | 语义     |
| -------- | -------- |
| static   | 静态定位 |
| relative | 相对定位 |
| absolute | 绝对定位 |
| fixed    | 固定定位 |

1. static

   元素默认的定位方式，无定位的意思。可以理解为是标准流

2. relative

   相对于原来位置来说的

   保留原来的位置，不脱标

   **人走了，钱没花掉**

3. absolute

   在父元素没有定位的情况下，以浏览器为准定位

   如果父元素有定位，则以父元素为准定位

   **margin:auto;失效** 

   **绝对定位会脱标**

   **人死了，钱也没了**

4. **子绝父相由来**

   因为父元素需要占用位置，所有需要用相对定位，而子盒子不需要占用位置，则是绝对定位

   相对定位就是用来给绝对定位当爹的

5. fixed

   元素固定于浏览器可视区的位置。主要是用场景：可以在浏览器页面滚动时元素位置不发生改变

   跟父元素没有任何关系

   **不占用原来的位置，脱标**

6. 粘性定位sticky

   被认为是相对定位和固定定位的混合。sticky

   设置了：position：sticky 后，需要设置四个属性中的一个才能生效

   

| 定位模式         | 是否脱标       | 移动位置         | 是否常用   |
| ---------------- | -------------- | ---------------- | ---------- |
| static静态定位   | 否             | 不能使用边偏移   | 很少       |
| relative相对定位 | 否(占有位置)   | 相对于自身位置移 | 常用       |
| absolute绝对定位 | 是(不占有位置) | 带有定位的父级   | 常用       |
| fixed固定定位    | 是(不占有位置) | 浏览器可视区     | 常用       |
| sticky粘性定位   | 否(占有位置)   | 浏览器可视区     | 当前阶段少 |

##### 定位的叠放顺序 z-index

1. 数值越大，盒子靠上
2. 如果属性值相同，则按照书写顺序，后来居上
3. 数字后面不加单位
4. 只有定位的盒子才有z-index属性

##### 定位拓展

1. 设置了绝对定位后，margin：auto；失效
2. 设置了固定，绝对定位后 ，行内元素可以设置宽高，浮动也是一样 。变成了行内块元素
3. 浮动元素可以压住下方标准流的盒子 ，但是压不住文字和图片，产生文字环绕效果
4. 固定（绝对）定位会压住下方盒子的所有内容

### 显示隐藏元素

1. display
2. visibility
3. overflow

##### display

display影藏元素后，不在保留原来位置，**人走了，钱也没了**

##### visibility

visibility：visible；元素可视

visibility：hidden；元素影藏

**元素隐藏后，继续占有原来的位置**

##### overflow

隐藏多出盒子的部分

overflow：auto/scroll;

区别：auto，在内容超出后出现滚动条，没有超出则出现，scroll则是一定有滚动条

## CSS提高

#### 精灵图

精灵技术目的︰为了有效地减少服务器接收和发送请求的次数，提高页面的加载速度

精灵图针对的是小的背景图片使用，借助background-position

#### 字体图标

轻量级∶一个图标字体要比一系列的图像要小。一旦字体加载了，图标就会马上渲染出来，减少了服务器请求灵活性∶本质其实是文字，可以很随意的改变颜色、产生阴影、透明效果、旋转等
兼容性︰几乎支持所有的浏览器，请放心使用
注意∶字体图标不能替代精灵技术，只是对工作中图标部分技术的提升和优化。

##### 字体图标下载

推荐网址：

- icomoon字库：http://icomoon.io
- 阿里iconfont字库：http://www.iconfont.cn/

使用方法：

- 下载字体包
- 将fonts文件复制粘贴到项目中，fonts中有四个文件夹，是为了兼容性
- 打开style.css，复制第一段话，放入style中
- 在span标签中输入特殊符号
- 在span的css样式用引入：font-family: 'Linearicons-Free';
- 如果需要重新添加新的字体，可以导入selection.json文件

#### 三角制作

```css
div{
    width: 0;
    height: 0;
    border-top: 100px solid red;
    border-left: 100px solid blue;
    border-right: 100px solid green;
    border-bottom: 100px solid orchid;
}
```

##### 三角强化

锐角直角三角形

```css
.trinagle{
    width: 100px;
    height: 0;
    border-top: 50px solid #0000FF;
    border-right: 20px solid transparent;
}
```



#### 更改用户界面样式

##### 鼠标样式

```css
li{
    cursor:pointer;
}
```

| 属性值      | 描述     |
| ----------- | -------- |
| default     | 小白默认 |
| pointer     | 小手     |
| move        | 移动     |
| text        | 文本     |
| not-allowed | 禁止     |

##### 轮廓线

```css
input{
    outline: none;
    /*或着设置为 0 */
    outline: 0;
}
```

##### 防止拖拽文本域

文本域标签尽量放在一行，否则会有空格，体验效果很差

```css
textarea{
    resize:none;
}
```

##### 行内块和文字垂直居中

默认是基线对齐

```css
vertical: middle;
```

##### 解决图片底侧有空白缝隙

原因：与基线对齐

```css
/*方式一（推荐）*/
vertical-align: bottom;
/*方式二*/
vertical-align: middle;
/*第三种方式：图片转块级元素*/
display:block;
```

##### 单行文字溢出用省略号显示

1. 单行文本溢出显示省略号显示，必须满足三个条件

   ```css
   /*1.先强制-行内显示文本（默认是normal自动换行）*/
   white-space:nowrap;
   /*2.超出的部分隐藏*/
   overflow: hidden;
   /*3.文字用省略号替代超出的部分*/
   text-overflow: ellipsis;
   ```

###### 取消滚动条

```css
.div{
  overflow: auto
}
 
.div::-webkit-scrollbar{
    display: none;
}
```



#### 多行文本溢出省显示略号

有兼容性问题，了解即可

```css
overflow: hidden;
text-overflow: ellipsis;
/*弹性伸缩盒子模型显示*/
display: -webkit-box;
/*限制在一个块元索显示的文本的行数*/
-webkit-line-clamp: 2;
/*设置或检索伸缩盒对象的子元素的排列方式*/
-webkit-box-orient: vertical;
```

##### 常见布局技巧

1. margin负值的运用

2. 文字围绕浮动元素

3. 行内块的巧妙运用

  行内块元素在不进行换行时，是不会有空隙的

4. css三角强化

#### CSS初始化

不同浏览器对标签的默认值是不同的，为了消除不同浏览器对HTML文本呈现的差异，照顾浏览器的兼容，我们需要对CSS初始化

简单理解：CSS初始化是指重设浏览器的样式（也称CSSreset）

每个网页都必须首先进行CSS初始化

```css
* {
	margin: 0;
	padding: 0;
    box-sizing:border-box;
}

em,
i {
	font-style: normal
}

li {
	list-style: none
}

img {
	border: 0;
	vertical-align: middle
}

button {
	cursor: pointer
}

a {
	color: #666;
	text-decoration: none
}

a:hover {
	color: #c81623
}

button,
input {
	font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif
}

body {
	/*抗锯齿性*/
	-webkit-font-smoothing: antialiased;
	background-color: #fff;
	font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
	color: #666
}

.hide,
.none {
	display: none
}
/* 清除浮动 */
.clearfix:after {
	visibility: hidden;
	clear: both;
	display: block;
	content: ".";
	height: 0
}

.clearfix {
	*zoom: 1
}
```

## 新特性

新特性要考虑兼容性问题

**语义化标签**

```
<header> : 头部标签
<nav> :导航标签
<article> :内容标签
<section> :定义文档某个区域
<aside> :侧边栏标签
<footer> :尾部标签
```

这种语义化标准主要是针对搜索弓|擎的
这些新标签页面中可以使用次
在IE9中,需要把这些元素转换为块级元素
其实,我们移动端更喜欢使用这些标签
HTML5还增加了很多其他标签,我们后面再慢慢学

##### 多媒体标签

1. 音频：audio

   设置MP3格式，[菜鸟教程](https://www.runoob.com/html/html5-audio.html)

2. 视频：video，尽量使用mp4格式

   | [autoplay](https://www.runoob.com/tags/att-video-autoplay.html) | autoplay      | 如果出现该属性，则视频在就绪后马上播放。                     |
   | ------------------------------------------------------------ | ------------- | ------------------------------------------------------------ |
   | [controls](https://www.runoob.com/tags/att-video-controls.html) | controls      | 如果出现该属性，则向用户显示控件，比如播放按钮。             |
   | [height](https://www.runoob.com/tags/att-video-height.html)  | *pixels*      | 设置视频播放器的高度。                                       |
   | [loop](https://www.runoob.com/tags/att-video-loop.html)      | loop          | 如果出现该属性，则当媒介文件完成播放后再次开始播放。         |
   | [muted](https://www.runoob.com/tags/att-video-muted.html)    | muted         | 如果出现该属性，视频的音频输出为静音。                       |
   | [poster](https://www.runoob.com/tags/att-video-poster.html)  | *URL*         | 规定视频正在下载时显示的图像，直到用户点击播放按钮。         |
   | [preload](https://www.runoob.com/tags/att-video-preload.html) | metadata none | 如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。 |
   | [src](https://www.runoob.com/tags/att-video-src.html)        | *URL*         | 要播放的视频的 URL。                                         |
   | [width](https://www.runoob.com/tags/att-video-width.html)    | *pixels*      | 设置视频播放器的宽度。                                       |

   谷歌需要设置muted=muted，才能自动播放

##### 表单

| 属性         | 值        | 描述                                             |
| ------------ | --------- | ------------------------------------------------ |
| autocomplete | on/off    | 开启时会记住上次输入的内容，必须要添加：name属性 |
| autofocus    | autofocus | 自动文本聚焦                                     |

#### 选择器

##### 属性选择器

1. input[value]：input标签，具有value属性
2. input[type=text]：input标签，具有type属性，并且属性值为text，text可以夹引号，也可以不加引号
3. input[type^=text]：input标签，type值的**开头**是text
4. input[type$=text]：input标签，type值的**结尾**是text
5. input[type*=text]：input标签，type值包含text值

##### 结构伪类选择器

1. div:nth:child(n)，选择某个父元素下的第n个是div标签的元素，如果第n个不是div标签元素，则什么都不选择
2. 参数：n，可以是odd，或者even，如果**只写n**，则表示选择所有子元素
3. div:nth-of-type(1)，选择div类型的第一个元素

###### 区别

div:nth-child(n)，他是先看子元素下标，然后根据子元素下标对比元素类型

div：nth-of-type(n)，他是先看元素类型，然后根据类型找下标

##### 伪元素选择器

可以简化HTML结构

1. ::before，在元素头部新增元素
2. ::after，在元素尾部新增元素

**注意：**

1. before和after创建一个元素，但是属于**行内元素**
2. 新创建的这个元素在文档树中是找不到的，所以我们称为伪元素
3. 语法: element::before{}
4. before和after 必须有content属性
5. before在父元素内容的前面创建元素，after在父元素内容的后面插入元素伪元素选择器和标签选择器一样，权重为1

#### CSS3盒子新模型

1. box-sizing:content-box 盒子大小为 width + padding + border（默认的）

2. box-sizing:border-box 盒子大小为 width，

   如果盒子模型我们改成了第二种方式，那么padding和border就不会撑开盒子，前提是padding和border不会超过width宽度

   ```css
   *{
       margin: 0;
       paddding: 0;
       box-sizing:border-box;
   }
   ```

#### CSS3其他新特性

##### 1、滤镜

filter：blur（5px）；模糊处理，数值越大越模糊

##### 2、calc函数

width：calc(+ - * /运算)

```css
width: calc(100%+30px)
```

##### 3、过渡

经常与：hover一起，搭配使用

transition，**谁要过渡给谁加**

**一套连招带走**

```css
transition: 变化属性 花费时间 运动曲线 开始时间
transition: width 1s ease-out 0s;
```

##### 4、移动transform

```css
transform：translate(x,y);
```

1. 定义2D转换中的移动，沿着X和Y轴移动
2. 元素translate最大的优点∶不会影响到其他元素的位置（**不会脱标**）
3. translate中的百分比单位是相对于自身元素的translate:(50%,50%);
4. 对行内标签没有效果

##### 5、旋转rotate

平面内顺时针或逆时针旋转

```css
/*deg必须要有*/
transform: rotate(45deg);
```

###### 1.设置旋转中心点

```css
transform-origin: x y;
```

1. 参数用空格分开
2. xy默认转换的中心点是元素的中心点（50% 50%）
3. 还可以给xy设置 **像素** 或者 **方位名词**（top bottom left right center)

###### 2.缩放scale(x y)

如果不跟单位，表示放大多少倍数

0-1，表示缩小，大于等于1表示放大

**优点：**放大的同时，不会影响其他盒子

###### 2D旋转一套连招

```css
/*代码有执行顺序，同时具有位移和其他属性时，先位移*/
transform:translate() rotate() scale();
```

#### 3D

##### perspective透视

透视效果，需要写在父盒子上面，单位px，数值越小效果越明显

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			.one{
				perspective: 200px;
			}
			img{
				transform: rotateY(20deg);
				transform: rotateX(30deg);
			}
		</style>
		
	</head>
	<body>
		<div class="one">
			<img src="https://p3.ssl.qhimgs0.com/dr/200_200_60/t018f65e703ff111af8.jpg" >
		</div>
		
	</body>
</html>

```

#### 动画

##### 一套连招带走

**animation :动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 动画起始或者结束的状态;**

```css
/* 声明动画 */
@keyframes move{
    from{
        transform: translate(0,0);
    }
    to{
        transform: translate(100px,300px);
    }
}
div{
    /* 调用动画 */
    animation-name: move;
    /* 动画时间 */
    animation-duration: 5s;
    width: 200px;
    height: 200px;
    transition: all 1s ease-in;
    background-color: #009688;
}
```

| 属性                                                         | 描述                                                         | CSS  |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--- |
| [@keyframes](https://www.runoob.com/cssref/css3-pr-animation-keyframes.html) | 规定动画。                                                   | 3    |
| [animation](https://www.runoob.com/cssref/css3-pr-animation.html) | 所有动画属性的简写属性。                                     | 3    |
| [animation-name](https://www.runoob.com/cssref/css3-pr-animation-name.html) | 规定 @keyframes 动画的名称。                                 | 3    |
| [animation-duration](https://www.runoob.com/cssref/css3-pr-animation-duration.html) | 规定动画完成一个周期所花费的秒或毫秒。默认是 0。             | 3    |
| [animation-timing-function](https://www.runoob.com/cssref/css3-pr-animation-timing-function.html) | 规定动画的速度曲线。默认是 "ease"。                          | 3    |
| [animation-fill-mode](https://www.runoob.com/cssref/css3-pr-animation-fill-mode.html) | 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。 | 3    |
| [animation-delay](https://www.runoob.com/cssref/css3-pr-animation-delay.html) | 规定动画何时开始。默认是 0。                                 | 3    |
| [animation-iteration-count](https://www.runoob.com/cssref/css3-pr-animation-iteration-count.html) | 规定动画被播放的次数。默认是 1。                             | 3    |
| [animation-direction](https://www.runoob.com/cssref/css3-pr-animation-direction.html) | 规定动画是否在下一周期逆向地播放。默认是 "normal"。          | 3    |
| [animation-play-state](https://www.runoob.com/cssref/css3-pr-animation-play-state.html) | 规定动画是否正在运行或暂停。默认是 "running"。               | 3    |

#### 3D旋转

1. x轴:水平向右注意:x右边是正值，左边是负值
2. y轴:垂直向下注意:y下面是正值，上面是负值
3. z轴:垂直屏幕注意:往外面是正值，往里面是负值

### 扩展

1. icon图片在线生成：比特虫
   1. 免费空间：http://free.3v.do/

