# HTML遇到的问题

## 行内元素问题

##### 行内元素之间用间隙

1. 设置父元素：font-size:0
2. 

##### 按钮点击时出现黑色边框

1. 设置：outline：none；

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

#### 复合选择器

1. ol li，后代选择器
2. ol>li，子选择器
3. div,p，并集选择器

#### 链接伪类选择器

a:link	/*选择所有未被访问的链接*/
a:visited	/*选择所有己被访问的链接*/
a: hover	/选择鼠标指针位于其上的链接/
a: active	/选择活动链接(鼠标按下未弹起的链接) /

#### nth-child与nth-of-type区别

nth-child是根据子元素个数来的

nth-of-type是根据当前元素类型的然后数个数来的

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

1. 父元素没有设置高度时，子元素设置浮动，这是父元素则没有高度

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

1. 额外标签法也称为隔墙法，时W3C推荐的做法（在最后一个浮动的子元素后面添加一个额外标签，必须是块级元素，清除浮动样式）

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