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

   1. 表格边框合并

      ```css
       border-collapse: collapse; 
      ```

      ```html
      //cellspacing="0"
      <table border="1" cellspacing="0" cellpadding="50">
          <tr><th>Header</th></tr>
          <tr><td>Data</td></tr>
      </table>
      ```

      